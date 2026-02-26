import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Clock,
  AlertCircle,
  MessageSquare,
  Timer,
  Star,
  MessageCircle,
  X,
  Headset,
} from "lucide-react";
import { io } from "socket.io-client";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("chat_is_open") === "true",
  );
  const [isHumanMode, setIsHumanMode] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("chat_session_id"),
  );
  const [messages, setMessages] = useState([]);

  // --- NEW: RATING STATES ---
  const [showRatingUI, setShowRatingUI] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const API_BASE = process.env.REACT_APP_API_URL || "http://192.168.0.103:5000";
  const scrollRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat_is_open", isOpen);
  }, [isOpen]);

  useEffect(() => {
    socketRef.current = io(API_BASE, { withCredentials: true });

    socketRef.current.on("new_message", (data) => {
      if (data.sessionId === localStorage.getItem("chat_session_id")) {
        setMessages((prev) => {
          const exists = prev.some(
            (m) =>
              m.timestamp === data.message.timestamp &&
              m.text === data.message.text,
          );
          return exists ? prev : [...prev, data.message];
        });
        if (data.message.sender === "customer_service") setIsHumanMode(true);
      }
    });

    socketRef.current.on("session_closed", (data) => {
      const closedId = typeof data === "object" ? data.sessionId : data;
      const currentLocalId = localStorage.getItem("chat_session_id");
      if (closedId === currentLocalId) {
        setIsClosed(true);
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "This session has been closed. Thank you for contacting us!",
            timestamp: getDbTimestamp(),
          },
        ]);
        setTimeout(() => {
          cleanupSession();
          setIsClosed(false);
        }, 5000);
      }
    });

    // --- NEW: LISTEN FOR RATING REQUEST ---
    socketRef.current.on("rating_requested", (data) => {
      if (data.sessionId === localStorage.getItem("chat_session_id")) {
        setShowRatingUI(true);
      }
    });

    return () => socketRef.current.disconnect();
  }, [API_BASE]);

  useEffect(() => {
    const initChat = async () => {
      const storedId = localStorage.getItem("chat_session_id");
      if (storedId) {
        try {
          const res = await fetch(`${API_BASE}/api/sessions/${storedId}`);
          if (res.status === 404) {
            cleanupSession();
            return;
          }
          const data = await res.json();
          if (res.ok && data.ai_history) {
            if (data.status === "closed") {
              cleanupSession();
            } else {
              setMessages(data.ai_history);
              setSessionId(storedId);
              if (
                data.assigned_agent_id ||
                ["active", "pending"].includes(data.status)
              )
                setIsHumanMode(true);
            }
          }
        } catch (err) {
          cleanupSession();
        }
      } else {
        setMessages([
          {
            sender: "ai",
            text: "Hello! I am your AI assistant. How can I help you today?",
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    };
    initChat();
  }, [API_BASE]);

  const cleanupSession = () => {
    localStorage.removeItem("chat_session_id");
    localStorage.removeItem("chat_is_open");
    setSessionId(null);
    setIsHumanMode(false);
    setShowRatingUI(false); // Reset Rating UI
    setUserRating(0); // Reset Rating Score
    setMessages([
      {
        sender: "ai",
        text: "Hello! I am your AI assistant. How can I help you today?",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const getDbTimestamp = () => {
    const now = new Date();
    const datePart = now.toLocaleDateString("en-CA");
    const timePart = now.toLocaleTimeString("en-GB", { hour12: false });
    return `${datePart} ${timePart}+08`;
  };

  // --- NEW: SUBMIT RATING FUNCTION ---
  const handleRate = async (score) => {
    setUserRating(score);
    try {
      await fetch(`${API_BASE}/api/sessions/rate/${sessionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: score }),
      });
      // Delay closing UI to show the feedback message
      setTimeout(() => setShowRatingUI(false), 2000);
    } catch (error) {
      console.error("Rating failed", error);
    }
  };

  const requestLiveChat = async () => {
    if (!sessionId) return;
    try {
      const res = await fetch(
        `${API_BASE}/api/sessions/update-status/${sessionId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "pending" }),
        },
      );
      if (res.ok) {
        setIsHumanMode(true);
        const sysMsg = {
          sender: "ai",
          text: "I've alerted our team. One moment please...",
          timestamp: getDbTimestamp(),
        };
        setMessages((prev) => [...prev, sysMsg]);
        await fetch(`${API_BASE}/api/messages/sync`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, message: sysMsg }),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isClosed) return;
    const userMsg = {
      text: input,
      sender: "user",
      timestamp: getDbTimestamp(),
    };
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    try {
      let currentId = sessionId;
      if (!currentId) {
        const response = await fetch(`${API_BASE}/api/sessions/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            visitorId: `visitor_${Math.random().toString(36).substring(7)}`,
            status: "ai_only",
            initialMessage: userMsg,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("chat_session_id", data.sessionId);
          setSessionId(data.sessionId);
          currentId = data.sessionId;
        }
      } else {
        await fetch(`${API_BASE}/api/messages/sync`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: currentId, message: userMsg }),
        });
      }
      if (!isHumanMode) {
        const n8nRes = await fetch(
          "https://jasonkc.app.n8n.cloud/webhook/6537f239-69c6-48fb-a2d8-af55111f2dc7",
          {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ question: userMsg.text }),
          },
        );
        const aiText = await n8nRes.text();
        const aiMsg = {
          sender: "ai",
          text: aiText || "...",
          timestamp: getDbTimestamp(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        await fetch(`${API_BASE}/api/messages/sync`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: currentId, message: aiMsg }),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle size={28} color="white" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-bold">Support Chat</span>
              <span className="text-[10px] opacity-80">
                {isHumanMode ? "Live Representative" : "AI Assistant"}
              </span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-sm shadow-sm ${msg.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none border"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* NEW: RATING UI */}
            {showRatingUI && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-2 text-center animate-in fade-in slide-in-from-bottom-2">
                <p className="text-amber-800 text-xs font-bold mb-2 uppercase tracking-tighter">
                  Rate our service
                </p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      onClick={() => handleRate(score)}
                      className="transition-transform hover:scale-125"
                    >
                      <Star
                        size={22}
                        fill={score <= userRating ? "#fbbf24" : "none"}
                        color="#fbbf24"
                      />
                    </button>
                  ))}
                </div>
                {userRating > 0 && (
                  <p className="text-[10px] text-amber-600 mt-2 font-bold italic">
                    Feedback received!
                  </p>
                )}
              </div>
            )}

            {isClosed && (
              <div className="flex items-center gap-2 bg-red-50 text-red-600 p-2 rounded-lg text-xs font-bold border border-red-100 italic animate-pulse">
                <AlertCircle size={14} /> Session has ended.
              </div>
            )}

            {!isHumanMode && sessionId && !isClosed && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={requestLiveChat}
                  className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm"
                >
                  <Headset size={14} /> Request Live Chat
                </button>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSendMessage}
            className={`p-3 border-t bg-white flex gap-2 ${isClosed ? "opacity-50 pointer-events-none" : ""}`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isClosed}
              placeholder={isClosed ? "Session closed" : "Type a message..."}
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isClosed}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

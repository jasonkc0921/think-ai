import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { TandSus } from "./pages/TandS_us";
import { Privacyus } from "./pages/Privacy_us";
import { StopCPMadness } from "./pages/StopCPMadness";
import { SmartEmailAutomation } from "./pages/EmailAutomation";
import { Blogus } from "./pages/Blog";
import { CaseStudiesPage } from "./pages/CaseStudies";
import WhatsAppChat from "./components/WhatsAppChat";
import ChatWidget from "./components/ChatWidgetNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        // path: '/home',
        index: true,
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Landing />,
      },
      /*       {
        path: '/about',
        element: <Aboutus/>,
      }, */
      {
        path: "/privacy",
        element: <Privacyus />,
      },
      {
        path: "/termofservice",
        element: <TandSus />,
      },
      {
        path: "/blog",
        element: <Blogus />,
      },
      {
        path: "/blog/stop_copy_paste_madness",
        element: <StopCPMadness />,
      },
      {
        path: "/blog/smart_email_automation",
        element: <SmartEmailAutomation />,
      },
      {
        path: "/case-studies",
        element: <CaseStudiesPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* WhatsApp Chat Button (appears on all pages) */}
      {/*       <WhatsAppChat
        phoneNumber="0122670130" // Replace with your actual WhatsApp number
        companyName="Think AI" // Replace with your company name
      /> */}
      {/* <ChatWidget /> */}
    </>
  );
};
export default App;

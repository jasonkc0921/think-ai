import React from "react";
import {
  Mail,
  Bot,
  Clock,
  CheckCircle,
  TrendingUp,
  Zap,
  Users,
  Settings,
  Database,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  MessageSquare,
  DollarSign,
} from "lucide-react";

export const CustomerEmailAutomationBlog = () => {
  const challenges = [
    {
      title: "Information Silos",
      desc: "Agents juggle multiple systems while customers wait",
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Repetitive Inquiries",
      desc: "70-80% ask the same questions repeatedly",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Inconsistent Responses",
      desc: "Different agents provide varying answers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "24/7 Expectations",
      desc: "Immediate responses expected around the clock",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const automationFeatures = [
    {
      title: "Understands Intent",
      desc: "AI analyzes email content to identify customer needs",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "Accesses Real Data",
      desc: "Integrates with ERP for live order and inventory data",
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Applies Company Knowledge",
      desc: "References complete product catalog and policies",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Provides Personalized Responses",
      desc: "Crafts replies using customer-specific information",
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ];

  const useCases = [
    {
      title: "Intelligent Order Status Inquiries",
      scenario:
        "Customers constantly email asking 'Where's my order?' with just their name or partial order number.",
      workflow: [
        "AI parses email to extract customer identifiers",
        "Queries ERP system to locate correct order",
        "Retrieves real-time shipping information",
        "Generates personalized response with tracking details",
        "Sets up automatic follow-up notifications",
      ],
      sampleResponse:
        "Hi Sarah, I found your recent order #ORD-2024-3847 for the wireless headphones placed on March 15th. Great news—your order shipped yesterday via UPS and is currently in transit to your Boston address. Expected delivery is Thursday, March 21st by end of day.",
      tools: "Make.com + OpenAI API + ERP API + Email provider",
      icon: <Mail className="h-8 w-8" />,
    },
    {
      title: "Product Compatibility Questions",
      scenario:
        "Customers ask detailed questions about product specifications, compatibility, and technical requirements.",
      workflow: [
        "AI identifies product and categorizes inquiry type",
        "Retrieves comprehensive product specifications",
        "Compares customer requirements with capabilities",
        "Generates detailed technical answers",
        "Suggests complementary products when relevant",
      ],
      sampleResponse:
        "Hello Michael, regarding your question about the ProMax 4K Camera—yes, it's fully compatible with your editing software setup. The camera outputs in both H.264 and H.265 codecs, which work seamlessly with Adobe Premiere Pro 2024.",
      tools: "n8n + Product database + OpenAI API + Document storage",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      title: "Automated Refund Processing",
      scenario:
        "Customers request refunds or returns, requiring policy verification, eligibility checking, and process initiation.",
      workflow: [
        "Identifies refund reason and product details",
        "Checks purchase date against return policy",
        "Verifies product condition requirements",
        "Generates return labels and updates status",
        "Sends detailed instructions to customer",
      ],
      sampleResponse:
        "Hi Jessica, I've processed your return request for the blue summer dress (Order #ORD-2024-2156). Since you're within our 30-day return window, you're approved for a full refund of $89.99. I've emailed you a prepaid return label.",
      tools: "Make.com + ERP + Shipping API + Payment processor",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Proactive Issue Resolution",
      scenario:
        "Customers report problems, request account changes, or need billing adjustments.",
      workflow: [
        "Categorizes problem type and severity",
        "Retrieves customer history and account status",
        "Determines appropriate solution path",
        "Implements fixes for common issues automatically",
        "Routes complex issues to human agents with context",
      ],
      sampleResponse:
        "Hi Robert, I see you're having trouble accessing your premium account features. I've checked your account and found your subscription payment was declined due to an expired credit card. I've temporarily restored your access.",
      tools: "n8n + Customer database + Payment API + Account system",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Inventory Alerts & Suggestions",
      scenario:
        "Customers inquire about out-of-stock items or want to be notified when products are available.",
      workflow: [
        "Recognizes which product customer is asking about",
        "Queries real-time stock levels across warehouses",
        "Uses sales data to estimate restock dates",
        "Recommends similar products currently in stock",
        "Creates automated alerts for availability",
      ],
      sampleResponse:
        "Hi Amanda, unfortunately the rose gold iPhone case you're interested in is currently out of stock, but we expect new inventory by March 25th. I've added you to our notification list and suggest our bestselling clear case with rose gold accents.",
      tools: "Make.com + Inventory API + Customer database + Email automation",
      icon: <BarChart3 className="h-8 w-8" />,
    },
  ];

  const kpis = [
    {
      metric: "Response Time",
      target: "Under 5 minutes",
      current: "From 4 hours to 3 minutes",
    },
    {
      metric: "Resolution Rate",
      target: "70-80%",
      current: "78% automated resolution",
    },
    {
      metric: "Customer Satisfaction",
      target: "Above baseline",
      current: "23% increase",
    },
    {
      metric: "Cost Savings",
      target: "Significant reduction",
      current: "$180,000 annually",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <Bot className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smart Customer Email Automation
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              How AI-Powered Tools Can Transform Your Support Operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium">
                  🤖 80% automated resolution
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium">
                  ⚡ 3-minute response times
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Customer support emails pile up faster than your team can handle
              them. Questions about products, refund requests, order status
              inquiries, shipping updates—each one requiring manual research,
              policy lookups, and personalized responses.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Modern automation platforms like{" "}
              <span className="font-semibold text-indigo-600">n8n</span>,{" "}
              <span className="font-semibold text-indigo-600">Make.com</span>,
              and{" "}
              <span className="font-semibold text-indigo-600">RPA tools</span>,
              combined with AI and ERP integrations, can create sophisticated
              customer service workflows that understand context, access
              real-time data, and provide accurate, personalized responses
              around the clock.
            </p>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            The Customer Support Challenge
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-red-600 mb-4">{challenge.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-slate-600 text-sm">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            The Smart Automation Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {automationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-indigo-600 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            5 Powerful Email Automation Workflows
          </h2>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              >
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-white">{useCase.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {index + 1}. {useCase.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-orange-600 mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4" /> The Scenario
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      {useCase.scenario}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <Settings className="h-4 w-4" /> The Automation Workflow
                    </h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      {useCase.workflow.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" /> Sample Response
                    </h4>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-blue-800 text-sm italic">
                        "{useCase.sampleResponse}"
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4" /> Tools Required
                    </h5>
                    <p className="text-slate-600 text-sm">{useCase.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Measuring Success: Key Performance Indicators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-indigo-600 mb-2">
                  {kpi.metric}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Target: {kpi.target}
                </p>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-green-700 text-sm font-medium">
                    ✓ {kpi.current}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Real-World Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h3 className="font-bold text-indigo-600 mb-4">
                E-commerce Retailer
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                500+ daily support emails
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> 78% of
                  inquiries resolved automatically
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" /> Response time: 4
                  hours → 3 minutes
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" /> 23%
                  increase in satisfaction scores
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-600" /> Team reallocated
                  to strategic initiatives
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h3 className="font-bold text-indigo-600 mb-4">
                B2B Software Company
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                200+ daily technical inquiries
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" /> 65% of
                  technical questions answered instantly
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" /> 40% reduction
                  in ticket backlog
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-purple-600" /> $180,000
                  annual savings
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-600" /> 35% improvement
                  in retention rates
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Transform Your Customer Experience
          </h2>
          <p className="text-purple-100 mb-6 leading-relaxed max-w-3xl mx-auto">
            Intelligent email automation isn't about replacing human
            support—it's about amplifying your team's capabilities. Handle
            routine inquiries instantly and accurately while your human agents
            focus on complex problems, relationship building, and strategic
            customer success initiatives.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors cursor-pointer">
            <a href="https://think-ai.online/?scrollTo=contact">
              Start Your Email Automation Journey
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

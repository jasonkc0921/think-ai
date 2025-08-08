import React from "react";
import {
  Clock,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Zap,
  ArrowRight,
  Code,
  Users,
  BarChart3,
} from "lucide-react";

export const StopCopyPaste = () => {
  const useCases = [
    {
      title: "Customer Inquiry Management: From Email to CRM",
      problem:
        "Customer inquiries flood your inbox daily—contact forms, support requests, sales leads. Each one needs to be manually read, categorized, and entered into your CRM system.",
      solution:
        "Monitor business emails, extract key information using AI, categorize inquiries, create CRM leads automatically, and send acknowledgment emails.",
      tools: "Make.com + Gmail/Outlook + CRM + OpenAI",
      impact:
        "Marketing agency reduced lead processing from 2 hours daily to 15 minutes",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Invoice Processing: From PDF to Accounting Software",
      problem:
        "Dozens of vendor invoices arrive monthly as PDFs. Manual extraction of invoice numbers, amounts, dates requires hours of tedious work.",
      solution:
        "Monitor emails for invoices, use OCR to extract text, apply AI for data identification, validate against vendor database, create accounting entries automatically.",
      tools: "n8n + Google Cloud Vision API + QuickBooks API",
      impact: "Construction company reduced accounts payable processing by 75%",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "E-commerce Inventory Synchronization",
      problem:
        "Managing products across Amazon, eBay, Shopify, and your website requires separate manual updates, leading to overselling and inconsistencies.",
      solution:
        "Centralized workflow monitors master inventory, automatically updates stock levels, syncs pricing, transfers product listings across all platforms.",
      tools: "Make.com + Shopee API +  MWS Amazon + Lazada API",
      impact:
        "Online retailer eliminated 20 hours of weekly updates, reduced discrepancies by 95%",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Social Media Lead Capture and Follow-up",
      problem:
        "Customer interactions across Facebook, Instagram, LinkedIn need tracking and follow-up. Manual monitoring means leads slip through cracks.",
      solution:
        "Monitor social mentions, extract contact information, create CRM leads, trigger email sequences, schedule sales follow-ups automatically.",
      tools: "n8n + Facebook Graph API + LinkedIn API + Mailchimp",
      impact: "Consulting firm increased social media lead conversion by 40%",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Employee Onboarding Document Processing",
      problem:
        "New employees submit various forms requiring manual data extraction and input across HR, payroll, benefits, and security systems.",
      solution:
        "Secure upload portal, automated form recognition, data validation, multi-system population, welcome packet generation, reminder scheduling.",
      tools: "Make.com + BambooHR API + ADP API + DocuSign",
      impact: "Tech company reduced employee setup from 4 hours to 30 minutes",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      desc: "Hours of work completed in minutes",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Error Reduction",
      desc: "Eliminate human mistakes in repetitive tasks",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Efficiency",
      desc: "Free staff for higher-value work",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability",
      desc: "Handle increasing data volumes seamlessly",
    },
  ];

  const tools = [
    {
      name: "n8n",
      subtitle: "The Developer-Friendly Choice",
      bestFor: "Technical teams comfortable with coding",
      strengths:
        "Highly customizable, self-hosted option, extensive API connections",
      pricing: "Free self-hosted version available",
    },
    {
      name: "Make.com",
      subtitle: "The Visual Workflow Builder",
      bestFor: "Non-technical users who need powerful automation",
      strengths: "Intuitive drag-and-drop interface, extensive app marketplace",
      pricing: "Free tier with paid plans scaling with usage",
    },
    {
      name: "RPA Tools",
      subtitle: "Enterprise-Grade Solutions",
      bestFor: "Large enterprises with complex legacy system integrations",
      strengths: "Desktop app automation, complex UI interactions",
      pricing: "Higher cost but enterprise-grade features",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stop the Copy-Paste Madness
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              How Automation Tools Can Transform Your Data Entry Workflows
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium">
                  🚀 Save 75% of your data entry time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Data entry is often the silent productivity killer in modern
              businesses. Hours spent copying information between systems,
              manually updating spreadsheets, and transferring data from emails
              to databases—it's mind-numbing work that drains valuable human
              resources from more strategic tasks.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The good news? Modern automation tools like{" "}
              <span className="font-semibold text-indigo-600">n8n</span>,{" "}
              <span className="font-semibold text-indigo-600">Make.com</span>,
              and{" "}
              <span className="font-semibold text-indigo-600">
                RPA platforms
              </span>{" "}
              have made it incredibly easy to eliminate repetitive data entry
              tasks without requiring extensive technical knowledge.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Why Automate Data Entry?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            5 Powerful Data Entry Automation Use Cases
          </h2>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
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
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4" /> The Problem
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> The Automation
                      Solution
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" /> Tools Needed
                      </h5>
                      <p className="text-slate-600 text-sm">{useCase.tools}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" /> Business Impact
                      </h5>
                      <p className="text-blue-700 text-sm font-medium">
                        {useCase.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Choosing the Right Automation Tool
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-indigo-600 mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-600">{tool.subtitle}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-800">
                      Best For:
                    </span>
                    <p className="text-sm text-slate-600">{tool.bestFor}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800">
                      Strengths:
                    </span>
                    <p className="text-sm text-slate-600">{tool.strengths}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800">
                      Pricing:
                    </span>
                    <p className="text-sm text-slate-600">{tool.pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Getting Started: Your First Automation Project
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
            <div className="space-y-4">
              {[
                "Identify Your Pain Point: Start with the most time-consuming, repetitive data entry task",
                "Map the Process: Document every step of your current manual process",
                "Choose Your Tool: Based on your technical comfort level and budget",
                "Start Simple: Begin with basic automation and add complexity gradually",
                "Test Thoroughly: Always test with sample data before going live",
                "Monitor and Optimize: Track performance and refine as needed",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">The Future is Automated</h2>
          <p className="text-indigo-100 mb-6 leading-relaxed">
            The businesses that embrace automation now will have a significant
            competitive advantage in efficiency, accuracy, and scalability. The
            question isn't whether you should automate your data entry—it's
            which processes you'll automate first.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors cursor-pointer">
            <a href="https://think-ai.online/?scrollTo=contact">
              Start Your Automation Journey Today
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

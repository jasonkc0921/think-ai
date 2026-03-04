import React from "react";
import {
  Clock,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Zap,
  ArrowRight,
  Code,
  Feather, // For Content Creation
  BarChart3, // For Data Analysis
  Headphones, // For Customer Support
  Scale, // For Legal & Document Processing
} from "lucide-react";

export const ClaudeCoworkAutomation = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      desc: "Customer service agents using AI resolve 14% more issues per hour.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Productivity Boost",
      desc: "64% of businesses expect AI to increase productivity.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Efficiency",
      desc: "42% of firms content with AI reported cost reduction.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Enhanced Accuracy",
      desc: "Reduce human error in complex document processing and data tasks.",
    },
  ];

  const useCases = [
    {
      title: "Content Creation & Marketing",
      problem:
        "Businesses struggle to consistently produce high-quality, SEO-optimized content for blogs, social media, and marketing campaigns, leading to time-consuming manual efforts and potential inconsistencies in brand voice.",
      solution:
        "Claude AI can be used to generate engaging website content, brainstorm marketing campaign ideas, draft social media captions, and write ad copy based on specific business goals and prompts. It can also help polish drafts, fix tone, and shorten long pieces while maintaining clear structure.",
      tools:
        "Claude AI (Opus, Sonnet, Haiku models), potentially integrated with content management systems or marketing platforms via API.",
      impact:
        "Businesses can significantly accelerate their content production pipeline, ensuring a steady stream of fresh material, improving SEO, and maintaining brand consistency, potentially saving hours of content creation time weekly.",
      icon: <Feather className="h-8 w-8" />,
    },
    {
      title: "Data Analysis & Reporting",
      problem:
        "Business owners and professionals often face challenges in interpreting complex analytics reports, sales figures, or large datasets, requiring specialized data analysis skills or significant time investment.",
      solution:
        "Claude AI can simplify data analysis by summarizing website data or sales numbers into simple, actionable insights. It can also process vast amounts of data, extract key insights, generate summaries, and even write transformation scripts for messy datasets.",
      tools:
        "Claude AI (especially Opus and Sonnet for complex reasoning and data processing), potentially integrated with data visualization tools or spreadsheets.",
      impact:
        "Faster and more accessible data-driven decision-making, allowing businesses to quickly understand trends, identify opportunities, and make informed strategic choices without needing a dedicated data analyst for every task.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Customer Support Automation",
      problem:
        "Handling repetitive customer queries, FAQs, and support tickets can be resource-intensive, leading to long response times and diverting human agents from more complex issues.",
      solution:
        "Claude AI can act as a 24/7 customer assistant, integrated into websites or CRM systems to answer FAQs, handle appointment bookings, or resolve support tickets instantly and professionally. The Haiku model is particularly suited for quick and accurate customer support due to its near-instant responsiveness.",
      tools:
        "Claude AI (Haiku or Sonnet models), integrated with CRM platforms, website chatbots, or helpdesk software.",
      impact:
        "Improved customer satisfaction through instant responses, reduced workload for human support teams, and increased efficiency in handling routine inquiries, allowing human agents to focus on more critical customer interactions.",
      icon: <Headphones className="h-8 w-8" />,
    },
    {
      title: "Legal & Document Processing",
      problem:
        "Legal drafting, contract review, and processing large volumes of technical or financial documents are time-consuming and require high accuracy, often involving manual review and extraction.",
      solution:
        "Claude AI excels at document processing, data analysis, and handling sensitive business documents like financial data, contracts, and technical specifications with high accuracy. It can draft boilerplate contracts, NDAs, and compliance documents, providing a legally coherent draft in seconds for refinement by legal professionals. Claude can also read large documents, clear their format, and extract key information, turning messy notes into tables or long reports into short lists.",
      tools:
        "Claude AI (Opus for complex reasoning, Sonnet for data processing), potentially integrated with document management systems.",
      impact:
        "Significant acceleration of legal and document-related workflows, reducing the time and effort spent on drafting and review, while enhancing accuracy and compliance.",
      icon: <Scale className="h-8 w-8" />,
    },
  ];

  const toolsComparison = [
    {
      name: "Claude 3 Models",
      subtitle: "Haiku, Sonnet, Opus",
      bestFor:
        "General-purpose AI tasks: content generation, summarization, data analysis, coding, and complex reasoning.",
      strengths:
        "Strong emphasis on safety, long-context processing, and generating accurate, contextually relevant outputs.",
      pricing:
        "Free access for basic tasks, Pro (~$17/month), Max (from $100-$200/month) for increased usage. API pricing per million tokens.",
    },
    {
      name: "Claude Coworker",
      subtitle: "AI Local Agent for Desktop Automation",
      bestFor:
        "Non-technical users needing to automate multi-step workflows directly on their desktop, interacting with local files, browsers, and applications.",
      strengths:
        "Autonomously plans and executes tasks, organizes files, drafts reports, and manages browser tasks, moving beyond simple chat interactions.",
      pricing: "Included with Claude Pro/Max plans.",
    },
    {
      name: "Integration Platforms",
      subtitle: "Connecting Claude to Your Ecosystem",
      bestFor:
        "Businesses looking to embed Claude AI directly into existing CRMs, ERPs, marketing automation, and other business software.",
      strengths:
        "Leverages robust APIs (Claude API, Google Cloud Vertex AI) and iPaaS solutions (like Alumio) for seamless, cohesive automation.",
      pricing: "Varies by platform and usage; Claude API pricing applies.",
    },
  ];

  const gettingStartedSteps = [
    "Identify Your Automation Needs: Pinpoint repetitive, time-consuming tasks or areas where human error is common within your business.",
    "Start with a Free Account and Experiment: Familiarize yourself with Claude's interface and capabilities through simple tasks.",
    "Define Your Business Context: Provide clear, concise descriptions of your business, brand details, and specific goals.",
    "Utilize Project-Specific Instructions (Claude Pro/Max): Set up 'projects' to maintain consistent context and instructions for ongoing tasks.",
    "Explore Claude Coworker for Desktop Automation (Claude Max): Activate Coworker and grant access to a dedicated work folder for autonomous task execution.",
    "Integrate with Existing Tools via API or Connectors: Leverage Claude's API or iPaaS solutions to connect it with your CRM, ERP, or other software.",
    "Monitor, Refine, and Scale: Continuously monitor outputs, refine prompts, and gradually scale Claude's application to other business areas.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Claude as Your Coworker: The Case for AI-Powered Business
              Automation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Claude AI is rapidly emerging as a transformative force in
              business, offering advanced capabilities that redefine workplace
              automation and productivity.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium">
                  🚀 64% of businesses expect AI to boost productivity
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
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Claude AI, developed by Anthropic, is redefining workplace
              automation and productivity. It functions as an intelligent
              "coworker," streamlining complex tasks, augmenting human
              capabilities, and driving efficiency across various business
              functions.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              For business owners and professionals, understanding Claude's
              strengths in areas like document processing, data analysis,
              content generation, and workflow automation is crucial for
              staying competitive in an increasingly AI-driven landscape.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Integrate Claude AI into Your Business?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Real-World Transformations: Claude AI in Action
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
                      <Zap className="h-4 w-4 text-indigo-600" /> The Problem
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600" /> The
                      Automation Solution
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-indigo-600" /> Tools Used
                      </h5>
                      <p className="text-gray-500 text-sm">{useCase.tools}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-indigo-600" />{" "}
                        Business Impact
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choosing the Right Claude AI Model & Tools
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {toolsComparison.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-indigo-600 mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-500">{tool.subtitle}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      Best For:
                    </span>
                    <p className="text-sm text-gray-500">{tool.bestFor}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      Strengths:
                    </span>
                    <p className="text-sm text-gray-500">{tool.strengths}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      Pricing:
                    </span>
                    <p className="text-sm text-gray-500">{tool.pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your First Steps: Getting Started with Claude AI
          </h2>
          <div className="bg-green-50 rounded-2xl p-8 border border-slate-200">
            <div className="space-y-4">
              {gettingStartedSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            The Future of Work is Collaborative AI
          </h2>
          <p className="text-indigo-100 mb-6 leading-relaxed">
            The trajectory of Claude AI and similar large language models in the
            workplace points towards an increasingly integrated and autonomous
            future. The goal is not to replace human workers but to augment
            their capabilities, fostering hybrid roles where human creativity
            and judgment are amplified by AI's computational power.
          </p>
          <a
            href="https://think-ai.online/?scrollTo=contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors cursor-pointer"
          >
            Start Your AI Automation Journey Today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
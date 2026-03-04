import React from "react";
import {
  Clock,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Zap,
  ArrowRight,
  Code,
  Scale, // For legal/finance
  Megaphone, // For marketing
  Briefcase, // For sales
  Laptop, // For general admin
} from "lucide-react";

export const ClaudeCoworkUseCases = () => {
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

  const useCases = [
    {
      title: "Revolutionizing Software Development & Engineering",
      problem:
        "Development teams often spend significant time on code analysis, test automation, debugging complex systems, and onboarding new members, leading to slower development cycles and reduced productivity.",
      solution:
        "Claude Code, integrated with platforms like GitHub, can analyze code, generate unit tests, and assist with refactoring. Claude Cowork can further streamline workflows by explaining complex tech stacks to new team members and identifying necessary file modifications.",
      tools: "Claude 3.7 Sonnet (via 'Claude Code' feature), GitHub, Deno, EdgeDB.",
      impact:
        "A development team using Deno shortened complex module updates from 10 days to just 2 days. Test coverage increased from 78% to 95%, tripling bug detection rates.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Streamlining Legal & Financial Document Analysis",
      problem:
        "Law firms and financial institutions deal with extensive, complex documents (e.g., contracts, technical specifications, financial models) that require hours of manual review, leading to high costs and potential for human error.",
      solution:
        "Claude 3.7 Sonnet's large context window (128K tokens) allows it to summarize and analyze long documents rapidly, extract key information, and perform transparent calculations for financial analysis.",
      tools:
        "Claude 3.7 Sonnet, potentially integrated with internal document management systems.",
      impact:
        "Analysis time for a 200-page technical specification was reduced from 8 hours to just 45 minutes. Law firms reported an 87.5% accuracy improvement in contract reviews.",
      icon: <Scale className="h-8 w-8" />,
    },
    {
      title: "Supercharging Marketing & Content Creation",
      problem:
        "E-commerce companies and marketing agencies need to produce a high volume of SEO-optimized content (blog posts, marketing copy, reports) consistently and efficiently to drive organic traffic and generate leads.",
      solution:
        "Claude can generate SEO-optimized articles, draft emails, fix grammar, rewrite long content, and create short marketing copy. It can also transform client interviews into compelling case studies with a problem-solution-results structure.",
      tools:
        "Claude AI (various models), potentially integrated with SEO tools and content management systems.",
      impact:
        "An online fashion retailer increased organic traffic by 45% in 3 months by using Claude to generate SEO-optimized blog posts, reducing time per article from 4 hours to 30 minutes and saving 70 hours monthly.",
      icon: <Megaphone className="h-8 w-8" />,
    },
    {
      title: "Enhancing Sales & Business Development Efficiency",
      problem:
        "Sales teams spend significant time on non-selling activities like prospect research, lead qualification, and drafting personalized outreach, which reduces their time for actual selling.",
      solution:
        "AI agents can automate prospect research (identifying decision-makers, finding personalization angles), enrich inbound leads, score them against ideal customer profiles, and draft personalized emails at scale.",
      tools:
        "Claude AI (for content generation and analysis), potentially integrated with CRM systems and sales engagement platforms.",
      impact:
        "A 10-person sales team spending 2 hours daily on research could save 100 hours weekly with agent automation, translating to an estimated $260,000 annually in recovered selling time.",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      title: "Automating General Office & Administrative Tasks",
      problem:
        "White-collar workers are often bogged down by tedious administrative tasks such as organizing files, cleaning inboxes, managing folders, and synthesizing information from scattered notes.",
      solution:
        "Claude Cowork acts as an autonomous digital operations assistant, capable of planning and carrying out multi-step tasks directly on a user's computer. It can organize files, generate reports from notes, synthesize documents, and create spreadsheets, all without constant copy-pasting.",
      tools: "Claude Cowork (via Claude Desktop app, available with Claude Max plan).",
      impact:
        "Offloads tedious administrative grunt work, freeing up white-collar workers for more strategic and creative thinking. It can reduce the time spent reconstructing context for tasks like bug investigation dramatically.",
      icon: <Laptop className="h-8 w-8" />,
    },
  ];

  const tools = [
    {
      name: "Anthropic's Claude",
      subtitle: "The Autonomous Digital Operations Assistant",
      bestFor:
        "Businesses seeking deep automation and multi-step task execution without constant human intervention.",
      strengths:
        "Autonomous multi-step task execution, large context windows, ethical AI development focus, direct file access.",
      pricing:
        "Paid (Claude Pro starts at $20/month, Claude Max starts at $100/month). API access is token-based.",
    },
    {
      name: "OpenAI's GPT Models",
      subtitle: "The Versatile Conversational AI",
      bestFor:
        "Creative content generation, coding assistance, and broad knowledge tasks with user-friendly interfaces.",
      strengths:
        "Versatile conversational AI, powers ChatGPT, strong in creative content and coding assistance.",
      pricing: "Paid (various API tiers, ChatGPT Plus subscription).",
    },
    {
      name: "Google's Gemini",
      subtitle: "The Multimodal AI Powerhouse",
      bestFor:
        "Advanced multimodal tasks, handling text, images, audio, video input natively, and strong in math problems.",
      strengths:
        "Advanced multimodal capabilities, strong in math problems, real-time data access, integrated with Google ecosystem.",
      pricing: "Paid (API access).",
    },
  ];

  const gettingStartedSteps = [
    "Identify High-Value, Repetitive Tasks: Look for small, mundane, and time-consuming tasks that don't require complex human judgment but interrupt focus.",
    "Define the AI Agent's Role and Mission: Clearly articulate what outcomes you want the AI agent to achieve, much like creating a job description for a human employee.",
    "Fuel Your AI Agent with Relevant Data and Context: Provide the AI agent with access to the necessary information to perform its tasks. Ensure this access is scoped and secure.",
    "Set Clear Guardrails and Escalation Paths: Establish boundaries for the AI agent's actions and define what it should do when it encounters uncertainty, errors, or situations requiring human judgment.",
    "Start with a Pilot Project and Measure Rigorously: Deploy the AI agent on a small, controlled scale to test its effectiveness and gather feedback. Define clear success metrics.",
    "Train Your Team and Manage Change: Educate employees on how to interact with the AI agent, what its capabilities are, and how it will change their workflows.",
    "Iterate and Scale What Works: Based on pilot results, refine the agent's instructions, expand its capabilities, and gradually apply it to similar use cases across the organization.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Claude Cowork Use Cases: Real-World Business Applications of
              Claude Cowork as a Workplace Coworker
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              How AI Agents are Transforming Daily Workflows and Boosting
              Business Productivity
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-sm font-medium">
                  🚀 AI agents could contribute up to $4.4 trillion in
                  productivity growth
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
              The landscape of workplace productivity is undergoing a
              significant transformation with the emergence of advanced AI
              agents, and Anthropic's Claude Cowork stands at the forefront of
              this revolution. Moving beyond traditional chatbots and copilots,
              Claude Cowork is designed to function as an autonomous digital
              operations assistant, capable of understanding context, planning,
              and executing multi-step tasks directly within a user's computer
              environment.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This innovation is particularly relevant for business owners and
              professionals seeking to leverage AI for deeper automation and
              enhanced daily workflows, freeing human capital for more strategic
              and creative endeavors. By exploring the core concepts, relevant
              tools, and future outlook of AI agents, this material aims to
              equip businesses with the knowledge to strategically adopt AI
              automation and maintain a competitive edge in an increasingly
              AI-driven economy.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Business Case for AI Automation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4">{benefit.icon}</div>
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
            Claude Cowork in Action: Real-World Business Use Cases
          </h2>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
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
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" /> Tools & Tech
                      </h5>
                      <p className="text-gray-500 text-sm">{useCase.tools}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" /> Business Impact
                      </h5>
                      <p className="text-green-700 text-sm font-medium">
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
            Choosing Your Digital Teammates: Relevant Tools & Technologies
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-green-600 mb-1">
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
            Getting Started with Claude Cowork: A Step-by-Step Guide
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="space-y-4">
              {gettingStartedSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            The Future of Work is Agentic
          </h2>
          <p className="text-green-100 mb-6 leading-relaxed">
            The future of AI in the workplace is poised for rapid and
            transformative growth. AI agents will become more sophisticated,
            capable of not just automating tasks but also understanding context
            across entire business ecosystems. The shift from simple 'input and
            output' chat to AI agents with persistent workspaces, as exemplified
            by Claude Cowork, signals a new standard for workplace productivity
            where AI is an embedded, proactive collaborator.
          </p>
          <a
            href="https://think-ai.online/?scrollTo=contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors cursor-pointer"
          >
            Start Your AI Agent Journey Today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
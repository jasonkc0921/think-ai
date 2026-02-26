import React, { useState } from "react";
import { Play } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Smart AI PA",
    description: "See how our Smart AI Personal Assistant automates day-to-day tasks, manages schedules, and boosts productivity for your team.",
    src: "/videos/smart-ai-pa.mp4",
  },
  {
    id: 2,
    title: "Automated Lead Generation Workflow",
    description: "Discover how we built an end-to-end automated lead generation pipeline that captures, qualifies, and nurtures leads without manual effort.",
    src: "/videos/automated-lead-generation.mp4",
  },
  {
    id: 3,
    title: "Automated PO Forwarding Workflow",
    description: "Watch how purchase orders are automatically extracted, validated, and forwarded to the right teams — saving hours of manual processing.",
    src: "/videos/automated-po-forwarding.mp4",
  },
  {
    id: 4,
    title: "Automated Sales Order Creation with MS Power Automate",
    description: "Learn how we leveraged Microsoft Power Automate to streamline sales order creation, reducing errors and turnaround time dramatically.",
    src: "/videos/automated-sales-order.mp4",
  },
  {
    id: 5,
    title: "Automate Your Accounting Workflow",
    description: "Explore how AI-driven automation handles invoicing, reconciliation, and reporting — letting your finance team focus on what matters.",
    src: "/videos/automate-accounting.mp4",
  },
];

const VideoCard = ({ study }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative bg-gray-900 aspect-video">
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <Play size={48} className="mb-2 opacity-40" />
            <p className="text-sm">Video coming soon</p>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            onError={() => setHasError(true)}
          >
            <source src={study.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          {study.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {study.description}
        </p>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Real-world automation solutions we've built for our clients — watch them in action.
          </p>
          <div className="mt-6 w-20 h-1 bg-white opacity-50 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <VideoCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-gray-500 mb-8">
            Let's build a custom automation solution tailored to your workflows.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

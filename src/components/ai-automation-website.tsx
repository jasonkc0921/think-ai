import React, { useState } from "react";
import {
  Menu,
  X,
  Play,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const AiAutomationWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    try {
      // Replace with your actual Google Apps Script web app URL
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzxRd7m-vDlEmQl7bD0Vtl1FdmGJA7pUS_MvijaA19u0UjQnotAnYGOaZKOA748aGSznw/exec";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(formData),
        redirect: "follow",
      });

      console.log("Form submission completed");

      var result;

      result = {
        success: true,
        message: "Thank you! Your message has been submitted successfully.",
      };
    } catch (error) {
      console.error("Network error:", error);
      result = {
        success: false,
        message:
          "Sorry, there was an error submitting your message. Please try again.",
      };
    }

    console.log(result);

    if (result.success) {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("There was an error submitting your message. Please try again.");
      console.error("Submission error:", result.message);
    }
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-green-50 to-blue-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Automate Your Business with{" "}
                <span className="text-green-600">AI-Powered</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business operations with our cutting-edge AI
                automation solutions. Save time, reduce costs, and boost
                productivity through intelligent automation that works 24/7 to
                deliver optimal results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/*                 <a href="#contact">
                  <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Get Started
                  </button>
                </a> */}
                <a href="#contact">
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="text-white" size={32} />
                    </div>
                    <p className="text-gray-700 font-semibold">
                      AI Automation Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Services
            </h2>
            <p className="text-xl text-gray-600">
              We leverage cutting-edge automation tools to create seamless and
              intelligent systems that save time and reduce errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                CRM Integration
              </h3>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate your customer relationship management
                system with intelligent automation platforms to streamline your
                client data and improve customer experience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Make.com Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Harness the power of Make.com to automate complex workflows and
                integrate your favorite apps and services without coding.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI Process Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Identify and automate your business processes that consume
                efficiency and redirect focus to strategic activities.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer Service Bots
              </h3>
              <p className="text-gray-600 mb-6">
                Deploy AI-powered chatbots and virtual assistants to handle
                customer inquiries 24/7 with instant responses.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data Processing
              </h3>
              <p className="text-gray-600 mb-6">
                Automate data collection, cleaning, and analysis to generate
                accurate insights and reports automatically.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Develop tailor-made automation solutions designed specifically
                for your unique business requirements and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Automation
            </h2>
            <p className="text-xl text-gray-600">
              Our solutions deliver tangible benefits that transform how your
              business operates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Save Time & Resources
              </h3>
              <p className="text-gray-600">
                Reduce manual work by up to 80% with intelligent automation that
                handles repetitive tasks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Minimize Human Error
              </h3>
              <p className="text-gray-600">
                Eliminate mistakes in data entry, processing, and other routine
                operations through precise automation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Scale With Ease
              </h3>
              <p className="text-gray-600">
                Our solutions grow with your business, handling increased
                workloads without proportional cost increases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Focus On What Matters
              </h3>
              <p className="text-gray-600">
                Free up your team to focus on strategic and creative tasks while
                automation handles the routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Process Works
            </h2>
            <p className="text-xl text-gray-600">
              We streamline a simple, effective approach to implement AI
              automation for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analyze</h3>
              <p className="text-gray-600">
                We thoroughly analyze your current workflows and identify
                processes that can benefit from automation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">
                Our team designs custom automation solutions tailored to your
                specific business needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Implement
              </h3>
              <p className="text-gray-600">
                We seamlessly integrate the automation into your existing
                systems with minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from businesses that have transformed their operations with
              our AI automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Working with their team has been transformative. The automation
                they implemented reduced our processing time by 70% and
                eliminated errors completely."
              </p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> */}
                <div>
                  <p className="font-semibold text-gray-900">Angie Tan</p>
                  <p className="text-gray-500">General Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Incredible! The n8n integrations they created for us have
                streamlined our entire customer service process. We can now
                handle 3x more inquiries."
              </p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> */}
                <div>
                  <p className="font-semibold text-gray-900">Mohd. Nizar</p>
                  <p className="text-gray-500">Operations Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The AI automation solution they developed for us saved over 2
                hours per day. Our PO forwarding processes are now fully
                automated and error-free."
              </p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> */}
                <div>
                  <p className="font-semibold text-gray-900">Ami</p>
                  <p className="text-gray-500">Account Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to automate your business processes? Contact us today to
              discuss your automation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+6012 2670130</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">
                      thinkai_cust_service@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      8, JLN Casabella 1, 47810 PJ, Selangor, Malaysia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61568099737311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  {/*                   <a
                    href="www.linedin.com"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a> */}
                  {/* <a
                    href="https://www.youtube.com"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <Youtube size={20} />
                  </a> */}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your automation needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationWebsite;

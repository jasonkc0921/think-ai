import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../images/ThinkAI_Logo_rectangular.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <h3 className="text-xl font-bold mb-4">ThinkAI</h3> */}
            <img src={logo} alt="thinkAI logo" width="160" height="80"></img>
            <p className="text-gray-400 mb-4">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61568099737311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Make.com Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  CRM Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer Service Bots
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechAI Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

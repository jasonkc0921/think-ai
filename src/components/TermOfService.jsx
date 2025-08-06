import React, { useState } from "react";
import styled from "styled-components";

const TermOfService = () => {
  return (
    <TandSContainer>
      <div className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Terms of Service</h1>
          <p className="hero-subtitle">
            Please read these terms carefully before using our services
          </p>
          <p className="effective-date">Effective Date: January 15, 2025</p>
        </section>

        <div className="intro-section">
          <p className="intro-text">
            These Terms of Service ("Terms") govern your access to and use of
            our website, services, tools, and content (collectively, "Services")
            provided by <strong>ThinkAI</strong> ("we", "us", "our"). By
            accessing or using our Services, you agree to be bound by these
            Terms.
          </p>
        </div>

        <div className="terms-grid">
          <div className="terms-card">
            <div className="card-icon services">🔧</div>
            <h3 className="card-title">1. Scope of Services</h3>
            <div className="card-content">
              <p>We provide AI and automation consultancy, including:</p>
              <ul className="terms-list">
                <li>Business process assessment</li>
                <li>Automation tool integration</li>
                <li>Training and technical support</li>
                <li>Workflow development</li>
              </ul>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon eligibility">👤</div>
            <h3 className="card-title">2. Eligibility</h3>
            <div className="card-content">
              <p>
                You must be at least 18 and legally authorized to enter into
                binding agreements on behalf of your business.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon usage">🌐</div>
            <h3 className="card-title">3. Use of Website and Content</h3>
            <div className="card-content">
              <ul className="terms-list">
                <li>Content is for informational and internal use only</li>
                <li>No unauthorized copying, reproduction, or resale</li>
                <li>No disruption or misuse of website functionality</li>
              </ul>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon responsibilities">✅</div>
            <h3 className="card-title">4. Client Responsibilities</h3>
            <div className="card-content">
              <ul className="terms-list">
                <li>Provide accurate, up-to-date information</li>
                <li>Cooperate during consultation and implementation</li>
                <li>Ensure proper use of third-party automation tools</li>
              </ul>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon payment">💳</div>
            <h3 className="card-title">5. Fees and Payment</h3>
            <div className="card-content">
              <p>
                All fees are detailed in service quotations. Payments are due as
                stated on invoices. Late payments may result in service
                suspension.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon confidentiality">🔒</div>
            <h3 className="card-title">6. Confidentiality</h3>
            <div className="card-content">
              <p>
                Both parties must keep confidential information secure and not
                disclose it without consent unless required by law.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon intellectual">📝</div>
            <h3 className="card-title">7. Intellectual Property</h3>
            <div className="card-content">
              <p>
                Materials created by us remain our property unless stated
                otherwise. Clients receive limited rights to use deliverables
                internally.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon liability">⚖️</div>
            <h3 className="card-title">8. Limitation of Liability</h3>
            <div className="card-content">
              <p>
                We are not liable for indirect or consequential damages. Our
                maximum liability is limited to the fees paid for the relevant
                service.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon termination">🚪</div>
            <h3 className="card-title">9. Termination</h3>
            <div className="card-content">
              <p>
                We may terminate services for non-payment, breach, or misuse.
                Upon termination, use of deliverables must cease unless agreed
                otherwise.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon changes">🔄</div>
            <h3 className="card-title">10. Changes to These Terms</h3>
            <div className="card-content">
              <p>
                We may update these Terms from time to time. Continued use
                indicates your acceptance of any revised Terms.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon law">🏛️</div>
            <h3 className="card-title">11. Governing Law</h3>
            <div className="card-content">
              <p>
                These Terms are governed by the laws of Malaysia. Disputes will
                be handled in Malaysian courts.
              </p>
            </div>
          </div>

          <div className="terms-card">
            <div className="card-icon contact">📧</div>
            <h3 className="card-title">12. Contact Information</h3>
            <div className="card-content">
              <p>For questions about these Terms, contact us at:</p>
              <p>
                <strong>ThinkAI</strong>
                <br></br>
                Email:{" "}
                <a
                  href="mailto:thinkai.cust.service@gmail.com"
                  className="contact-email"
                >
                  thinkai.cust.service@gmail.com
                </a>
                <br></br>
                Website: www.think-ai.online
              </p>
            </div>
          </div>
        </div>

        <section className="contact-section">
          <h2 className="contact-title">Questions About Our Terms?</h2>
          <div className="contact-info">
            <p>
              If you have any questions about these Terms of Service or need
              clarification on any point, please don't hesitate to reach out to
              our team.
            </p>
            <p>
              <a
                href="mailto:thinkai.cust.service@gmail.com"
                className="contact-email"
              >
                thinkai.cust.service@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </TandSContainer>
  );
};

export default TermOfService;

const TandSContainer = styled.div`
  .main-content {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 2rem;
  }

  .hero-section {
    text-align: center;
    padding: 4rem 0;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    margin-bottom: 3rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 1rem;
  }

  .effective-date {
    font-weight: 600;
    color: #667eea;
    font-size: 1rem;
  }

  .terms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .terms-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid #667eea;
  }

  .terms-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: white;
  }

  .services {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  .eligibility {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  .usage {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  .responsibilities {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  .payment {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  }
  .confidentiality {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }
  .intellectual {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  }
  .liability {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  }
  .termination {
    background: linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%);
  }
  .changes {
    background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
  }
  .law {
    background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  }
  .contact {
    background: linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%);
  }

  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .card-content {
    color: #666;
    line-height: 1.7;
  }

  .terms-list {
    margin: 1rem 0;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  .terms-list li {
    margin-bottom: 0.5rem;
    color: #555;
  }

  .intro-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .intro-text {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: center;
  }

  .contact-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
  }

  .contact-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .contact-info {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .contact-email {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
  }

  .contact-email:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .terms-grid {
      grid-template-columns: 1fr;
    }

    .main-content {
      padding: 0 1rem;
    }

    .intro-section,
    .contact-section {
      padding: 2rem;
    }
  }
`;

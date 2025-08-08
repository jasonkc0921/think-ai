import React, { useState } from "react";
import styled from "styled-components";

const Privacy = () => {
  return (
    <PrivacyContainer>
      <div className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-subtitle">
            Your privacy matters to us. Learn how we protect and handle your
            personal information in accordance with the Personal Data Protection
            Act 2010 (PDPA) of Malaysia.
          </p>
        </section>

        <div className="privacy-grid">
          <div className="privacy-card">
            <div className="card-icon data-collection">📊</div>
            <h3 className="card-title">Data Collection</h3>
            <div className="card-content">
              <p>We may collect personal data when you:</p>
              <ul className="data-list">
                <li>Visit our website or social media pages</li>
                <li>Subscribe to our newsletter</li>
                <li>Submit an enquiry or request consultation</li>
                <li>Engage with our services</li>
                <li>Communicate with us via email, phone, or other channels</li>
              </ul>
              <p className="additional-info">
                Data includes: name, company name, email, phone, job title,
                business info, payment info, IP address, and browser behavior.
              </p>
            </div>
          </div>

          <div className="privacy-card">
            <div className="card-icon data-use">🎯</div>
            <h3 className="card-title">Purpose of Data Collection</h3>
            <div className="card-content">
              <p>We use your personal data to:</p>
              <ul className="data-list">
                <li>Provide and manage our services</li>
                <li>Respond to enquiries and support</li>
                <li>Send updates, newsletters, or marketing (with consent)</li>
                <li>Improve website and services</li>
                <li>Process transactions</li>
                <li>Comply with legal requirements</li>
              </ul>
            </div>
          </div>

          <div className="privacy-card">
            <div className="card-icon data-protection">🔒</div>
            <h3 className="card-title">Data Protection & Disclosure</h3>
            <div className="card-content">
              <p>
                <strong>We do not sell your personal data.</strong> We may
                disclose data to:
              </p>
              <ul className="data-list">
                <li>Employees or consultants</li>
                <li>Third-party service providers</li>
                <li>Authorities when required by law</li>
              </ul>
              <p className="additional-info">
                We implement reasonable safeguards to protect your personal data
                and retain it only as long as necessary or required by law.
              </p>
            </div>
          </div>

          <div className="privacy-card">
            <div className="card-icon user-rights">⚖️</div>
            <h3 className="card-title">Your Rights</h3>
            <div className="card-content">
              <p>You have the right to:</p>
              <ul className="rights-list">
                <li>Access your personal data</li>
                <li>Request corrections</li>
                <li>Withdraw consent for processing</li>
                <li>Request data deletion when no longer needed</li>
              </ul>
              <p className="contact-info">
                Contact us at <strong>thinkai.cust.service@gmail.com</strong> to
                exercise these rights.
              </p>
            </div>
          </div>

          <div className="privacy-card">
            <div className="card-icon cookies">🍪</div>
            <h3 className="card-title">Cookies & Tracking</h3>
            <div className="card-content">
              <p>
                We use cookies for analytics and site improvements. You may
                disable cookies in your browser settings.
              </p>
              <p className="additional-info">
                <strong>Third-Party Links:</strong> We are not responsible for
                the privacy practices of external sites linked from our website.
              </p>
            </div>
          </div>

          <div className="privacy-card">
            <div className="card-icon contact">📧</div>
            <h3 className="card-title">Policy Updates</h3>
            <div className="card-content">
              <p>
                We may update this policy periodically. The latest version will
                always be posted with the effective date.
              </p>
              <p className="additional-info">
                By using our website and services, you agree to the collection
                and use of information in accordance with this policy.
              </p>
            </div>
          </div>
        </div>

        <div className="highlight-box">
          <h3 className="highlight-title">Security Measures</h3>
          <p>
            We implement reasonable safeguards to protect your personal data
            from unauthorized access, disclosure, alteration, or destruction.
            Our security measures are continuously updated to ensure the highest
            level of protection for your information.
          </p>
        </div>

        <section className="contact-section">
          <h2 className="contact-title">Questions About Your Privacy?</h2>
          <p className="contact-description">
            If you have any questions about this Privacy Policy or need to
            exercise your data rights, please don't hesitate to contact our
            customer service team.
          </p>
          <a
            href="mailto:thinkai.cust.service@gmail.com"
            className="contact-email"
          >
            thinkai.cust.service@gmail.com
          </a>
        </section>
      </div>
    </PrivacyContainer>
  );
};

export default Privacy;

const PrivacyContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;

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
    margin: 0 auto;
  }

  .privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .privacy-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid #667eea;
  }

  .privacy-card:hover {
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

  .data-collection {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  .data-use {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  .data-protection {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  .user-rights {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  .cookies {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  }
  .contact {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
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

  .data-list,
  .rights-list {
    margin: 1rem 0;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  .data-list li,
  .rights-list li {
    margin-bottom: 0.5rem;
    color: #555;
  }

  .additional-info,
  .contact-info {
    margin-top: 1rem;
  }

  .highlight-box {
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.1),
      rgba(118, 75, 162, 0.1)
    );
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    border-left: 4px solid #667eea;
  }

  .highlight-title {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
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

  .contact-description {
    margin-bottom: 1.5rem;
    color: #666;
  }

  .contact-email {
    font-size: 1.1rem;
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

    .privacy-grid {
      grid-template-columns: 1fr;
    }

    .main-content {
      padding: 0 1rem;
    }
  }
`;

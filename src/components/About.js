import React from 'react';
import './About.css';

const About = () => {
  const handleVisitWebsite = () => {
    window.open('https://thinkitech.com', '_blank');
  };

  return (
    <div className="facility-container">
      <div className="facility-card">
        <div className="machine-content animated-content">
          {/* Hero Section */}
          <div className="header-section">
            <h1 className="pro-item-title">Think Xag Tek</h1>
            <h2 className="category-title">
              <span>Revolutionizing UAV Technology</span>
            </h2>
          </div>

          {/* Company Overview */}
          <div className="about-content-section">
            <div className="text-content">
              <p className="pro-item-description">
                Think Xag Tek is revolutionizing the UAV industry with advanced agricultural, 
                surveillance, and military drones. We also manufacture batteries, flight controllers, 
                and UAV accessories. Our in-house manufacturing production features strict quality 
                control and testing for durability, performance, and compliance.
              </p>
              
              <p className="pro-item-description">
                We provide custom-built solutions for specialized industry needs and have gained 
                recognition for high-performance drone solutions in agriculture, defense, and logistics. 
                Our commitment to innovation, reliability, and cost-effective UAV technology drives us forward.
              </p>
              
              <div className="compatible-sizes">
                <h3>Our Core Strengths</h3>
                <div className="size-bubbles">
                  <span className="size-bubble">Made-in-USA</span>
                  <span className="size-bubble">Advanced Materials</span>
                  <span className="size-bubble">Quality Control</span>
                  <span className="size-bubble">Custom Solutions</span>
                  <span className="size-bubble">Military Grade</span>
                  <span className="size-bubble">Innovative R&D</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Section */}
          <div className="full-width-specs-container">
            <div className="specs-header">
              <h3 className="section-title">
                Innovative In-House Drone Manufacturing
              </h3>
            </div>
            
            <div className="about-content-section">
              <div className="text-content">
                <p className="pro-item-description">
                  At Think Xag Tek, we take pride in preparing our own molds, enabling us to develop 
                  high-quality products tailored to precision. Utilizing advanced materials like carbon 
                  fiber, Kevlar, and premium resins, we ensure durability, strength, and lightweight 
                  efficiency in every design.
                </p>
                <p className="pro-item-description">
                  This in-house capability allows us to maintain complete control over quality and 
                  innovation, setting new benchmarks in drone manufacturing.
                </p>
              </div>
            </div>
          </div>

          {/* Composite Lab Section */}
          <div className="features-section">
            <h3 className="section-title">
              Composite Laboratory: Precision in Drone Manufacturing
            </h3>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2L1,12H5V22H19V12H23L12,2M12,5L18,11V20H14V14H10V20H6V11L12,5Z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Custom Molding</h4>
                  <p>Advanced molds prepared with care for optimal structural integrity and aerodynamic performance.</p>
                </div>
                <div className="feature-card-hover"></div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,17V18H17V17C17,16 16,15 15,15H9C8,15 7,16 7,17Z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Material Processing</h4>
                  <p>Expert work with carbon fiber, resin, and composites for lightweight, strong components.</p>
                </div>
                <div className="feature-card-hover"></div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,17V18H17V17C17,16 16,15 15,15H9C8,15 7,16 7,17Z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Quality Control</h4>
                  <p>Stringent testing processes guarantee parts meet the highest manufacturing standards.</p>
                </div>
                <div className="feature-card-hover"></div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="process-steps-section">
            <h3 className="section-title">
              <span className="section-icon"></span>
              Our Manufacturing Process
            </h3>
            <div className="process-steps-container">
              <div className="process-step">
                <div className="step-content">
                  <div className="step-line"></div>
                  <div className="step-text">
                    <h4>Design & Engineering</h4>
                    <p>Custom UAV designs tailored to specific industry requirements with advanced CAD modeling.</p>
                  </div>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-content">
                  <div className="step-line"></div>
                  <div className="step-text">
                    <h4>Material Selection</h4>
                    <p>Careful selection of carbon fiber, Kevlar, and premium resins for optimal performance.</p>
                  </div>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-content">
                  <div className="step-line"></div>
                  <div className="step-text">
                    <h4>Precision Molding</h4>
                    <p>In-house mold preparation and composite layup for structural integrity.</p>
                  </div>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-content">
                  <div className="step-line"></div>
                  <div className="step-text">
                    <h4>Quality Testing</h4>
                    <p>Rigorous testing for durability, performance, and compliance with industry standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h3 className="section-title">
              <span className="section-icon"></span>
              Ready to Experience Our Technology?
            </h3>
            <button className="cta-button" onClick={handleVisitWebsite}>
              Visit Our Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
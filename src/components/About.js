import React from 'react';
import './About.css';

const About = () => {
  const handleVisitWebsite = () => {
    window.open('https://thinkitech.com', '_blank');
  };

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-main-title">About Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main-content">
        {/* Company Overview */}
        <section className="about-section about-company">
          <div className="section-header">
            <h2 className="section-title">Revolutionizing UAV Technology</h2>
            <div className="title-divider"></div>
          </div>
          <div className="content-grid">
            <div className="text-content">
              <p className="about-description">
                Think Xag Tek is revolutionizing the UAV industry with advanced agricultural, 
                surveillance, and military drones. We also manufacture batteries, flight controllers, 
                and UAV accessories. Our in-house manufacturing production features strict quality 
                control and testing for durability, performance, and compliance.
              </p>
              <p className="about-description">
                We provide custom-built solutions for specialized industry needs and have gained 
                recognition for high-performance drone solutions in agriculture, defense, and logistics. 
                Our commitment to innovation, reliability, and cost-effective UAV technology drives us forward.
              </p>
            </div>
            <div className="image-content">
              <div className="floating-drone-image"></div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="about-section strengths-section">
          <div className="section-header center-header">
            <h2 className="section-title">Our Core Strengths</h2>
            <div className="title-divider center-divider"></div>
          </div>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/></svg>
              </div>
              <h3>Made-in-USA</h3>
              <p>Proudly designed and manufactured in the United States</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.84,4.61a1,1,0,0,0-.2-.33,1,1,0,0,0-.33-.21l-7-2a1,1,0,0,0-.64,0l-7,2a1,1,0,0,0-.53.46,1,1,0,0,0-.21.33A1,1,0,0,0,5,5V15.26a2,2,0,0,0,1.11,1.79l7,3.14h0a1,1,0,0,0,.82,0l7-3.14h0A2,2,0,0,0,21,15.26V5A1,1,0,0,0,20.84,4.61Z"/></svg>
              </div>
              <h3>Advanced Materials</h3>
              <p>Carbon fiber, Kevlar, and aerospace-grade composites</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7Z"/></svg>
              </div>
              <h3>Quality Control</h3>
              <p>Stringent testing for durability and performance</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z"/></svg>
              </div>
              <h3>Custom Solutions</h3>
              <p>Tailored to your specific operational needs</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/></svg>
              </div>
              <h3>Military Grade</h3>
              <p>Ruggedized for extreme conditions</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,14H17V17H14V19H17V22H19V19H22V17H19V14M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V12.08L19,12C16.41,12 14.2,13.64 13.36,15.94L12,16C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12,18H13C13,19.05 13.27,20.04 13.75,20.9L12,21C7.58,21 4,19.21 4,17V14Z"/></svg>
              </div>
              <h3>Innovative R&D</h3>
              <p>Continuous technological advancement</p>
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section className="about-section manufacturing-section">
          <div className="section-header">
            <h2 className="section-title">Innovative In-House Drone Manufacturing</h2>
            <div className="title-divider"></div>
          </div>
          <div className="content-grid reverse">
            <div className="text-content">
              <p className="about-description">
                At Think Xag Tek, we take pride in preparing our own molds, enabling us to develop 
                high-quality products tailored to precision. Utilizing advanced materials like carbon 
                fiber, Kevlar, and premium resins, we ensure durability, strength, and lightweight 
                efficiency in every design.
              </p>
              <p className="about-description">
                This in-house capability allows us to maintain complete control over quality and 
                innovation, setting new benchmarks in drone manufacturing.
              </p>
            </div>
          </div>
        </section>

        {/* Composite Lab Section */}
        <section className="about-section features-section">
          <div className="section-header center-header">
            <h2 className="section-title">Composite Laboratory: Precision in Drone Manufacturing</h2>
            <div className="title-divider center-divider"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,2L1,12H5V22H19V12H23L12,2M12,5L18,11V20H14V14H10V20H6V11L12,5Z"/></svg>
              </div>
              <div className="feature-content">
                <h3>Custom Molding</h3>
                <p>Advanced molds prepared with care for optimal structural integrity and aerodynamic performance.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,17V18H17V17C17,16 16,15 15,15H9C8,15 7,16 7,17Z"/></svg>
              </div>
              <div className="feature-content">
                <h3>Material Processing</h3>
                <p>Expert work with carbon fiber, resin, and composites for lightweight, strong components.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M7,17V18H17V17C17,16 16,15 15,15H9C8,15 7,16 7,17Z"/></svg>
              </div>
              <div className="feature-content">
                <h3>Quality Control</h3>
                <p>Stringent testing processes guarantee parts meet the highest manufacturing standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="about-section process-section">
          <div className="section-header center-header">
            <h2 className="section-title">Our Manufacturing Process</h2>
            <div className="title-divider center-divider"></div>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Design & Engineering</h3>
                <p>Custom UAV designs tailored to specific industry requirements with advanced CAD modeling.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Material Selection</h3>
                <p>Careful selection of carbon fiber, Kevlar, and premium resins for optimal performance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Precision Molding</h3>
                <p>In-house mold preparation and composite layup for structural integrity.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Quality Testing</h3>
                <p>Rigorous testing for durability, performance, and compliance with industry standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-section cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Experience Our Technology?</h2>
            <p className="cta-text">Discover how our UAV solutions can transform your operations.</p>
            <button className="cta-button" onClick={handleVisitWebsite}>
              <span>Visit Our Website</span>
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
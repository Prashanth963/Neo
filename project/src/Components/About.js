import React, { useState, useEffect } from 'react';
import './About.css';
import women from "./Allimages/girl.png";
import farm from "./Allimages/fe.png";
import Login from './Login';
import sea from './Allimages/sea.jpeg';

const About = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowLogin(true);
  };

  const closePopup = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin]);

  return (
    <>
      <section className="about-section">
        <div className="container">

          {/* Left Side */}
          <div className="image-column">
            <div className="circle-mask">
              <img src={women} alt="Neon Biotech" />
            </div>
            <div className="exp-badge">
              <span className="exp-number">12</span>
              <div className="exp-text">
                Years Of <br /> Experience
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="content-column">
            <span className="label">ABOUT US</span>
            <h2 className="main-title">Neon Biotech</h2>

            <p className="description">
              Neon Biotech is an Indian-based Aquaculture manufacturing company
              providing expert opinions, technology transfer, and services to
              both new and existing Aquaculture ventures across India.
            </p>

            <div className="features-grid">
              <div className="feature-list">
                <div className="feature-item">
                  <div className="i">⚙️</div>
                  <div className="feature-info">
                    <h3>Technical Excellence</h3>
                    <p>We Are Technically Strong</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="i">💻</div>
                  <div className="feature-info">
                    <h3>End-to-End Services</h3>
                    <p>Service Based On Personal Requirement</p>
                  </div>
                </div>
              </div>

              <div className="farm-preview">
                <img src={farm} alt="Farm Preview" />
              </div>
            </div>

            <button className="quote-btn" onClick={handleClick}>
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showLogin && (
        <div className="popup-overlay">
         <div className="popup-box">
  <Login closePopup={closePopup} />
          </div>
</div>
    
      )}
         <section className="work-process-container">
      <header className="process-header">
        <p className="subtitle">WORK PROCESS</p>
        <h2 className="title">We Complete Every Step Carefully</h2>
      </header>

      <div className="process-grid">

        <div className="process-card">
          <div className="icon-wrapper">
            <span className="icon">🔍</span>
          </div>
          <div className="content">
            <h3>Research & Analysis</h3>
            <p>
              We begin with in-depth water quality testing, pond diagnostics,
              and pathogen screening to understand your shrimp farm's unique
              challenges.
            </p>
          </div>
        </div>

        <div className="process-card">
          <div className="icon-wrapper">
            <span className="on">🧪</span>
          </div>
          <div className="content">
            <h3>Innovative Formulation</h3>
            <p>
              Using cutting-edge biotechnology, we develop eco-friendly
              probiotics and supplements tailored for shrimp health and pond
              ecology.
            </p>
          </div>
        </div>

        <div className="process-card">
          <div className="icon-wrapper">
            <span className="on">🌡️</span>
          </div>
          <div className="content">
            <h3>Testing & Validation</h3>
            <p>
              Every solution undergoes real-pond trials across multiple cycles
              to validate efficacy, safety, and ROI for farmers.
            </p>
          </div>
        </div>

        <div className="process-card">
          <div className="icon-wrapper">
            <span className="on">🚚</span>
          </div>
          <div className="content">
            <h3>Delivery & Support</h3>
            <p>
              Timely product delivery with 24/7 technical guidance ensures
              seamless adoption and long-term success in your aquaculture
              operations.
            </p>
          </div>
        </div>

      </div>
    </section>
      <section className="hero-section">
      <div className="hero-layout">

        {/* Left Main Banner */}
        <div className="hero-banner">
          <img
            src={sea}
            alt="Fish Farming"
            className="hero-image"
          />

          <div className="hero-overlay">
            <p className="hero-subtitle">AQUA BIOTECH SOLUTIONS</p>
            <h1>
              Trusted Experts in <br />
              Aquaculture Growth
            </h1>
            <p className="hero-text">
              Helping shrimp and fish farming thrive with advanced
              biotechnology and eco-friendly solutions.
            </p>

            <button className="hero-btn">Learn More</button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>95K</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Success Rate</p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
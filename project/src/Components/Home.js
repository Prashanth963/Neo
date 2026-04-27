import React from "react";
import "./Home.css";
import { Beaker, Diamond, Leaf, Sparkles, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import Login from "./Login";
import women from "./Allimages/girl.png";
import farm from "./Allimages/fe.png";
import cul from "./Allimages/Culture.jpg";
import grow from "./Allimages/Grow.jpg";
import ehp from "./Allimages/EHP.jpg";
import gas from "./Allimages/Gastac.jpg";
import jj from "./Allimages/telephone-call.png";
import jk from "./Allimages/name.png";
import kl from "./Allimages/ken.png";
import ag from "./Allimages/Ag.jpg";
import { Link } from "react-router-dom";


const Home = () => {
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
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Innovative solutions for sustainable and profitable shrimp farming
      </p>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">
            <Beaker size={36} />
          </div>
          <h3>Probiotics</h3>
          <p>
            Sustainable solutions to enhance shrimp health, growth,
            and pond productivity.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <Diamond size={36} />
          </div>
          <h3>Minerals</h3>
          <p>
            Essential minerals for molting, osmoregulation,
            and optimal shrimp development.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <Leaf size={36} />
          </div>
          <h3>Feed Supplements</h3>
          <p>
            Natural, high-performance nutrition for shrimp
            from post-larvae to harvest.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <Sparkles size={36} />
          </div>
          <h3>Sanitizers</h3>
          <p>
            Advanced water and surface sanitizers to prevent
            disease and maintain biosecurity.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <Waves size={36} />
          </div>
          <h3>Aquaculture Solutions</h3>
          <p>
            End-to-end shrimp farming systems: pond management,
            biosecurity, and monitoring.
          </p>
        </div>

      </div>
    </section>
    
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
      <div className="page">

      {/* HEADER */}
      <div className="sec">
        <h4>What We Do</h4>
        <h2>
          What You Can Do <br />
          <span>with Neon Biotech</span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid">

        <div className="ca">
          <div className="imgBox">
            <img src={cul} alt="Culture Pro" />
          </div>
          <h3>CULTURE-PRO</h3>
          <p>Soil & Water Probiotic for aquaculture pond management</p>

          <Link to="/product"  className="readMore">Read More →</Link>
        </div>

        <div className="ca">
          <div className="imgBox">
            <img src={grow} alt="Growzyme C" />
          </div>
          <h3>Growzyme-C</h3>
          <p>Aids digestion and vitamin utilization. Boosts immunity.</p>

          <Link to="/product"  className="readMore">Read More →</Link>
        </div>

        <div className="ca">
          <div className="imgBox">
            <img src={ehp} alt="EHP SOL" />
          </div>
          <h3>EHP SOL</h3>
          <p>Bacterial and viral infection management solution</p>

          <Link to="/product"  className="readMore">Read More →</Link>
        </div>

        <div className="ca">
          <div className="imgBox">
            <img src={gas} alt="GASTAC" />
          </div>
          <h3>GASTAC</h3>
          <p>Toxic gases controller for pond bottom management</p>

          <Link to="/product"  className="readMore">Read More →</Link>
        </div>

      </div>
    </div>
    
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
     <div className="nx">
            <div className="vc">
               <div className="cc">
                <h5>GET IN TOUCH</h5>
                <h1>We want to share our location to find us easily.</h1>
                <p>Have questions or want to know more about our services? We're here to help! Visit us at our office, call us directly, or drop us a message — we’d love to connect with you.</p><br></br>
                <div className="info">
                
                    
                    <img src={jj} alt="location" width="30px" height="40px"/><div className="x">
                    
                    <h3> Our Address</h3>
                    <p>2-178/14, JALPALLY VILLAGE, BALAPUR MANDAL Ranga Reddy, Hyderabad, Telangana, 500005</p>
                 </div> </div><br></br>
                 <div className="info">
                    <img src={jk} alt="phone" width="30px" height="40px"/>
                    <div className="x">
                    <h3> Our Phone</h3>
                    <p>+91 8143658596</p>
                </div></div><br></br>
                 <div className="info">
                    <img src={kl} alt="email" width="30px" height="40px"/>
                    <div className="x">
                    <h3> Our Email</h3>
                    <p>info@neonbiotech.in</p>
                    </div>
                </div>
                </div>
                <div className="mm">
                     <div className="quote-container">
          <h1 className="quote-title">Get a Quote</h1>
    
          <form className="quote-form">
            {/* Row 1 */}
            <div className="form-row">
              <div className="group">
                <label>Name (required)</label>
                <input type="text" placeholder="Full Name"  className="s"/>
              </div>
    
              <div className="group">
                <label>Phone (optional)</label>
                <input type="tel" placeholder="Phone Number"  className="s"/>
              </div>
            </div>
    
            {/* Row 2 */}
            <div className="form-row">
              <div className="group">
                <label>Email address (required)</label>
                <input type="email" placeholder="Email Address"  className="s"/>
              </div>
    
              <div className="group">
                <label>Services (required)</label>
                <select className="s">
                  <option>Choose services</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>SEO</option>
                </select>
              </div>
            </div>
    
            {/* Message */}
            <div className="message-box">
              <label>Your message*</label><br/><br/>
              <textarea placeholder="Your Message"></textarea>
            </div>
    
            <button className="tn">Send Me Request</button>
          </form>
        </div>
                </div>
                </div>
                </div>
   
  <section className="abt-wrap">
      <div className="abt-layout">

        {/* LEFT IMAGE */}
        <div className="abt-left-panel">
          <img
            src={ag}
            alt="Aquaculture"
            className="abt-main-image"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="abt-right-panel">
          <h1 className="abt-main-title">
            Solutions for Sustainable Aquaculture
          </h1>

          <p className="abt-description">
            Neon Biotech develops eco-friendly probiotic and microbial
            solutions that improve aquaculture health and productivity.
          </p>

          <div className="abt-two-column">

            {/* LEFT COLUMN */}
            <div className="abt-column">
              <div className="abt-service-card">
                <div className="abt-card-top">
                  <div className="abt-number-box">01</div>

                  <div className="abt-card-text">
                    <h3>Our Services</h3>
                    <p>
                      Driving sustainable aquaculture through biotech innovation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="abt-list-card">✔ Eco pond care</div>
              <div className="abt-list-card">✔ Disease prevention</div>
              <div className="abt-list-card">✔ Farmer productivity</div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="abt-column">
              <div className="abt-service-card">
                <div className="abt-card-top">
                  <div className="abt-number-box">02</div>

                  <div className="abt-card-text">
                    <h3>Our Vision</h3>
                    <p>
                      Global leader in sustainable aquaculture biotechnology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="abt-list-card">✔ Healthy ecosystem</div>
              <div className="abt-list-card">✔ Reliable solutions</div>
              <div className="abt-list-card">✔ Long-term balance</div>
            </div>

          </div>
        </div>
      </div>
    </section>
                
    </>
  );
};

export default Home;
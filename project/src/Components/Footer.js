import React from "react";
import "./Footer.css";
import raghu from "./Allimages/facebook.png";
import saran from "./Allimages/instagram.png";
import greshu from "./Allimages/youtube.png";
import thiru from "./Allimages/linkedin.png";
import pranay from "./Allimages/image.png";

const Footer = () => {
  
  return (
    <div className="rt">

      {/* Top Contact Section */}
      <div className="footer-top">
        <div className=" logo-box">
                      <img src={pranay} alt="neo" className="gm" />
        
        </div>
        <div className="contact-box">

        <div >
          <h4>Address</h4>
          <p>
            2-178/14, Jalpally Village,
            <br />
            Balapur Mandal,
            <br />
            Hyderabad, Telangana - 500005
          </p>
        </div>

        <div >
          <h4>Phone</h4>
          <p className="p">+91 8143658596</p>
          <p>040 2458 7772</p>
        </div>

        <div>
          <h4>Email</h4>
          <p className="p">info@neonbiotech.in</p>
          <p>www.neonbiotech.in</p>
        </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="er">
        <div className="re">
          <div className="th">
            <h4>About Us</h4>
            <p>
              Innovative probiotics & feed supplements powering sustainable
              shrimp and fish farming.
            </p>
          </div>

          <div className="ht">
            <img src={raghu} alt="Facebook" className="mg" />
            <img src={saran} alt="Instagram" className="mg" />
            <img src={greshu} alt="Youtube" className="mg" />
            <img src={thiru} alt="Linkedin" className="mg" />
          </div>
        </div>

        <div className="re">
          <h4>Quick Links</h4>
          <ul className="ll">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="re">
          <h4>Recent Post</h4>
          <ul className="ll">
          <li>Sustainable Aquaculture Practices for 2025</li>
          <li>How Probiotics Improve Shrimp & Fish Farming</li>
          </ul>
        </div>

        <div className="re">
          <h4>Newsletter</h4>
          <p>Stay connected! Get the latest news, tips, and updates straight to your inb.</p>
          <input type="email" placeholder="Email Address" className="inp" />
        </div>
      </div>

      <hr />

      <div className="bn">
        <h3>Copyright © 2026 by Neon Biotech.</h3>
      </div>
    </div>
  );
};

export default Footer;
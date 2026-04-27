import React from "react";
import './Contact.css';
import jj from "./Allimages/telephone-call.png";
import jk from "./Allimages/name.png";
import kl from "./Allimages/ken.png";

const Conatct=()=>{

    return(
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
             <div className="map-container">
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=Seattle&t=&z=10&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>

        </div>
        
        
        

    )
}
export default Conatct;
import React from "react";
import "./Lodin.css";

const Login = ({ closePopup }) => {
  return (
    <div className="quote-container">
      <div className="form-header">
        <h1 className="quote-title">Get a Quote</h1>
        <span className="close" onClick={closePopup}>
          &times;
        </span>
      </div>

      <form className="quote-form">
        {/* Row 1 */}
        <div className="form-row">
          <div className="group">
            <label>Name (required)</label>
            <input
              type="text"
              placeholder="Full Name"
              className="s"
              required
            />
          </div>

          <div className="group">
            <label>Phone (optional)</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="s"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="group">
            <label>Email address (required)</label>
            <input
              type="email"
              placeholder="Email Address"
              className="s"
              required
            />
          </div>

          <div className="group">
            <label>Services (required)</label>
            <select className="s" required>
              <option value="">Choose services</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="message-box">
          <label>Your message*</label>
          <textarea placeholder="Your Message"></textarea>
        </div>

        <button className="submit" type="submit">
          Send Quote Request
        </button>
      </form>
    </div>
  );
};

export default Login;
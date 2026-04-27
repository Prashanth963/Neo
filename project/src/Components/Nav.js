import React, { useState } from "react";
import "./Nav.css";
import pras from "./Allimages/image.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowLogin(true);
  };

  const closePopup = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className="a">
        <div className="b">
          <img src={pras} alt="marketing" width="200px" height="90px" />
        </div>

        <div className="ga">
          <div className="c">
            <ul className="d">
              <li><h4><Link to="/">Home</Link></h4></li>
              <li><h4><Link to="/about">About</Link></h4></li>
              <li><h4><Link to="/product">Products</Link></h4></li>
              <li><h4><Link to="/Con">Contact</Link></h4></li>
              <li><h4><Link to="/Care">Careers</Link></h4></li>
            </ul>
          </div>

          <div>
            <button className="e" onClick={handleClick}>
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="popup-overlay">
          <div className="popup-box">
            <Login closePopup={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
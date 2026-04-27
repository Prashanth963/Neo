import React from "react";
import './Nav1.css';
import one from "./Allimages/name.png";
import two from "./Allimages/phone.png";
import three from "./Allimages/facebook.png";
import four from "./Allimages/logo.png";
import five from "./Allimages/social.png";
import six from "./Allimages/logo.png";
import ping from "./Allimages/placeholder.png";


const Nav1=()=>{

    return(
        <div className="wq"> 
            <div className="hg">
                <img src={ping} alt="loaction" width="30px" height="30px"/>
                <p>Jalpally Village, Balapur Mandal, Ranga Reddy, Hyderabad, Telangana 500005.</p>
            </div>
            <div className="df">
            <div className="ty">
            <div className="hg">
                
                <img src={one} alt="mail" width="30px" height="30px" />
                <p>info@neonbiotech.in</p>
            </div>
            <div className="hg">
                
                <img src={two} alt="phone" width="30px" height="30px"/>
                <p>+91 40 2458 7772</p>
            </div>
            </div>
            <div className="cv">
            
                 <img src={three} alt="Facebook" className="g" />
                <img src={four} alt="Instagram" className="g" />
                <img src={five} alt="telagram" className="g" />
                <img src={six} alt="Linkedin" className="g" />
            </div>
            </div>
        
        </div>
    )
}
export default Nav1;
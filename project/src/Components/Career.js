import React from "react";
import'./Career.css';
import win from "./Allimages/pra.webp";

const Career=()=>
{
    return(
        <div>
        <div className="pj">
            <div className="ff">
            <h3>JOIN OUR TEAM</h3>
            <h1>Build Your Future With<br></br>Aqua Bio Tech</h1>
            <p>At Aqua Bio Tech, we believe in empowering people to make a real difference in aquaculture and biotechnology. If you're passionate about innovation, sustainability, and growth — we'd love to hear from you.</p>
            <button className="jk">Join us Today</button>
        </div>
        <div className="sd">
           <img src={win} alt="picture"  width="500px" height="350px" className="zx"/>
        </div></div>
        <div className="y">
            <h1 className="st">Our Values</h1>
            <p className="t">The principles that guide everything we do</p>
            <div className="xy">
                <div className="zz">
                    <div className="icon">🔬</div>
                    <h3>Innovation</h3>
                    <p>We foster creativity and cutting-edge research in biotechnology</p>
                </div>
                 <div className="zz">
                 <div className="icon">🌱</div>
                    <h3>Sustainability</h3>
                    <p>Committed to environmentally responsible aquaculture practices</p>
                </div>
                <div className="zz">
             <div className="icon">🤝</div>

                    <h3>Collaboration</h3>
                    <p>Working together to achieve breakthrough solutions</p>
                </div>
               <div className="zz">
                                 <div className="icon">📈</div>
                    <h3>Growth</h3>
                    <p>Continuous learning and professional development opportunities</p>
                </div>
            </div>
        </div>
        <div className="yy"> 
            <h1 className="st">Why Work With Us</h1>
            <p className="t">Comprehensive benefits and perks for our team members</p>
            <div className="hf">
                <div className="ui">
                    <div className="icon1">💰</div><div>
                    <h3>Competitive Salary</h3>
                    <p>Market-leading compensation packages</p></div>
                </div>
                <div className="ui">
                    <div className="icon1">🏥</div><div>
                    <h3>Health Benefits</h3>
                    <p>Comprehensive medical and dental coverage</p></div>
                </div>
                <div className="ui">
                    <div className="icon1">🎓</div><div>
                    <h3>Learning & Development</h3>
                    <p>Training programs and conference attendance</p></div>
                </div>
                <div className="ui">
                    <div className="icon1">⏰</div><div>
                    <h3>Flexible Hours</h3>
                    <p>Work-life balance with flexible scheduling</p></div>
                </div>
                <div className="ui">
                    <div className="icon1">🏖️</div><div>
                    <h3>Paid Time Off </h3>
                    <p>Generous vacation and sick leave policies</p></div>
                </div>
                <div className="ui">
                    <div className="icon1">🚀</div><div>
                    <h3>Career Growth</h3>
                    <p>Clear advancement paths and mentorship</p></div>
                </div>
            </div>
        </div>
        <div className="car">
            <h1>Open Positions</h1>
            <p>Join our team and make a difference in biotechnology</p>
            <div className="cards">
                <div className="card">
                    <div className="top"> 
                    <h3>Senior Research Scientist</h3>
                    <span>Full-time</span></div>
                    <div className="tags">
                        <p>R&D</p>
                        <p>Remote/hybrid</p>
                    </div>
                    <p>Lead research initiatives in aquaculture biotechnology</p>
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <div className="top">
                        <h3>Aquaculture Specialist</h3>
                        <span>Full-time</span>
                    </div>
                    <div className="tags">
                        <p>Operations</p>
                        <p>On-site</p>
                    </div>
                    <p>Manage aquaculture systems and optimize production</p>
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <div className="top">
                        <h3>Biotechnology Engineer</h3>
                        <span>Full-time</span>
                    </div>
                    <div className="tags">
                        <p>Engineering</p>
                        <p>Hybrid</p>
                    </div>
                    <p>Design and implement biotech solutions</p>
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <div className="top">
                        <h3>Marketing Coordinator</h3>
                        <span>Full-time</span>
                    </div>
                    <div className="tags">
                        <p>Marketing</p>
                        <p>Remote</p>
                    </div>
                    <p>Drive marketing campaigns and brand awareness</p>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
         <div className="apply-section">
      <div className="left-box">
        <h1>Ready to Apply?</h1>
        <p>
          Don’t see a position that fits? We’re always looking for talented
          individuals. Send us your resume and we’ll keep you in mind for
          future opportunities.
        </p>

        <div className="resume-box">
          <div className="ic">📧</div>
          <div>
            <h3>Send Your Resume</h3>
            <p>Email us at careers@aquabiotech.in</p>
          </div>
        </div>
      </div>

      <div className="right-box">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Position of Interest" />
        <input type="text" placeholder="Tell us about yourself"/>

        <button>Submit Application</button>
      </div>
    </div>
        </div>
    )
}
export default Career;
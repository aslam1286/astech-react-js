import React from 'react'
import astechLogo from "../img/logo215.png"
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="border-top">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-5 col-md-6 footer-contact footer-logo">
              <img  src={astechLogo} alt="astechLogo"/>
              <p>
              House No. 03, Priti Villa, Dalal Compound,<br/>
              Katol Road, Nagpur - 440013<br/>
              Maharastra, India <br/><br/>
              <strong>Phone:</strong><a href="tel:+917122971457"> +91-712-2971457</a><br/>
              <strong>Email:</strong> <a href="mailto:info@astechpromotions.com">info@astechpromotions.com</a><br/>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><NavLink to="/terms-and-conditions">Terms of Services</NavLink></li>
                <li><NavLink to="/privacy-n-policy">Privacy policy</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <div className="social-links mt-3">
              
                <a href="www.facebook.com" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="www.google.com" className="instagram"><i className="bi bi-instagram"></i></a>
                
                <a href="www.linkedin.com" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
              <div className="copyright-text mt-4">
                <p className="mt-0">&copy; Copyright <strong><span>Astech Promotions</span></strong>. All Rights Reserved.<br/>
                  Designed & developed by <b>Astech Promotions</b>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

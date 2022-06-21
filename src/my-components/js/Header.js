import React from 'react'
import { NavLink } from "react-router-dom";
import astechLogo from '../img/logo215.png'

export default function Header() {
  return (
    <nav id="header" className="navbar navbar-expand-md navbar-light fixed-top d-flex align-items-center">
        <div className="container-fluid container-md px-0 d-flex align-items-center justify-content-between">
            <a href="/" className="navbar-brand">
            <img  src={astechLogo} alt="astechLogo"/>
            </a>
            
            <button className="navbar-toggler me-4 me-md-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <a href='#navbarText' className="hamburger hamburger--squeeze" data-toggle="collapse" data-target="#navbarText">
                    <div className="hamburger-box">
                        <div className="hamburger-inner">

                        </div>
                    </div>
                </a>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto" id="navbar">
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li><hr/>
                    <li className="nav-item">
                        <NavLink to="/about">About</NavLink>
                    </li><hr/>
                    <li className="nav-item">
                        <NavLink to="/services">Services</NavLink>
                    </li><hr/>
                    <li className="nav-item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

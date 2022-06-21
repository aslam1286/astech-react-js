import React from 'react'
import heroBanner from '../img/hero-banner.png'

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
        <div className="container">
            <div className="row gy-4">
                <div className="col-md-5 hero-img order-2 mt-md-0 mt-5">
                    <img src={heroBanner} className="img-fluid animated" alt=""/>
                </div>
                
                <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center offset-md-1 text-md-start text-center">
                    <h1>Welcome to <br /> Astech Promotions</h1>
                    <h2>Promote your business with us. Partner with us for all your digital marketing needs may it be product promotion, email campaign, social media marketing or internet research.</h2>
                    
                    <div>
                        <a href="#contact" className="btn-get-started scrollto">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

import React from 'react'
import aboutBanner from '../img/about-banner.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">About</h3>
            <p>
              Welcome to Astech Promotions, your number one source for digital marketing. We're dedicated to providing you the very best of promotion, with an emphasis on Website Promotion, Content Marketing, Data Cleansing. Founded in 2022 by Astech Team, Astech Promotions has come a long way from its beginnings in Nagpur, Maharashtra.</p>
              <p>
              When Astech Team first started out, their passion for marketing drove them to start his own business.We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
            
          </div>
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={aboutBanner} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

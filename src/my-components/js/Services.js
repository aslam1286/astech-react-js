import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services section-bg">
        <div className="container">
            <div className="section-title">
                <p>Check out the great services we offer</p>
            </div>
            
            <div className="row">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-search"></i></div>
                        <h4 className="title">Search Engine Optimization (SEO)</h4>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-trophy"></i></div>
                        <h4 className="title">Product Promotion</h4>
                    </div>
                </div>
  
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-chat-dots"></i></div>
                        <h4 className="title">Social Media Marketing</h4>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-facebook" style={{fontSize: "44px"}}></i></div>
                        <h4 className="title">Facebook Promotions</h4>
                    </div>
                </div>
  
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-google" style={{fontSize: "44px"}}></i></div>
                        <h4 className="title">Google Ads</h4>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-clipboard-data"></i></div>
                        <h4 className="title">Data Mining</h4>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-people"></i></div>
                        <h4 className="title">Lead Generation</h4>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-at" style={{fontSize: "52px"}}></i></div>
                        <h4 className="title">Email Campaign</h4>
                    </div>
                </div>
  
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon mb-3"><i className="bi bi-person-circle"></i></div>
                        <h4 className="title">Contact Discovery</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

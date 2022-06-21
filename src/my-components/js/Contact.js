import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact section-bg">
        <div className="container">
            <div className="section-title">
                <p>Contact us to get started</p>
            </div>
            <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>House No. 03, Priti Villa, Dalal Compound,<br/>
                              Katol Road, Nagpur - 440013<br/>
                              Maharastra, India</p>
                        </div>
                        
                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p><a href="mailto:info@astechpromotions.com">info@astechpromotions.com</a></p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p><a href="tel:+917122971457">+91-712-2971457</a></p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="#" method="post" role="form" className="astech-form"  onsubmit="return SendInquiry();">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>First Name</label>
                                <input type="text" name="fname" className="form-control" id="txtFName" placeholder="First Name*"/>
                            </div>
                            
                            <div className="form-group col-md-6 mt-3 mt-md-0">
                                <label>Last Name</label>
                                <input type="text" name="lname" className="form-control" id="txtLName" placeholder="Last Name*"/>
                            </div>
                            
                            <div className="form-group col-md-6 mt-3">
                                <label>Your Email</label>
                                <input type="text" className="form-control" name="email" id="txtEmail" placeholder="Your Email*"/>
                            </div>
                            
                            <div className="form-group col-md-6 mt-3">
                                <label>Phone Number</label>
                                <input type="text" className="form-control" maxlength="12" onKeyUp="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" id="txtPhone" value="" placeholder="Phone Number*"/>
                            </div>
                        </div>
                        
                        <div className="form-group mt-3">
                            <label>Message</label>
                            <textarea className="form-control" placeholder="How can we help?" id="txtComments" name="message" rows="10" spellcheck="false"></textarea>
                        </div>
                        
                        <div className="form-group my-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img id="IMG_Security" src="/formhandler/captcha.aspx?update=1" alt="security code" className=""/>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Security Code*" id="txtSecurityCode"/>
                            </div>
                        </div>
                        
                        <div className="text-center"><button type="submit" id="btnSendInquiry">SEND</button></div>
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

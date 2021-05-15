import React, { Component } from 'react'

export default class CyberSecurity extends Component {
  render() {
    return (
      <div>
      <section className="site-section bg-light" id="cybersecurity-section">
        <div className="container">
          <div className="row mb-5">
          </div>
          <div className="row site-section" id="culture-section">
            <div className="col-12 text-center" data-aos="fade">
              <a name="featured" />
              <h2 className="section-title" style={{fontSize: '28px'}}>Partners</h2>
            </div>
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
            </div>
            <div className="col-lg-2 text-left" data-aos="fade">
            </div>
            <div className="col-sm-8 text-left" data-aos="fade">
              <p>If you are a food delivery service or grocer, you are perfectly poised to help people live healthier lives. Imagine leading the charge while growing your customer base AND collecting subsidies for your participation.</p>
              <p><b>Sign up</b> to learn more or <b>Sign In</b> to  view customer participation or track reimbursement subsidies.</p>
              <img src="images/cyber_security-sm.jpg" alt="Image" class="center" style="max-width: 60%; height: auto" /> 
            </div>
          </div>
        </div></section>
      <section>
        <div className="row site-section" id="cybersecurity-section">
        </div>
      </section>
    </div>
      );
    }
  };
import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (

      <section className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>The Bento Concept</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay={100}>Like the dishes in a bento box, we're assembling the expertise of healthcare providers, nutritionists, payers, local chefs, grocers, and meal delivery services to make healthful food choices available to all.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay>
              <div className="owl-carousel slide-one-item-alt">
                <img src="images/featured.jpg" alt="Image" className="img-fluid" />
                <img src="images/human_centered_ai.png" alt="Image" className="img-fluid" />
                <img src="images/leveraging_data_cscience.jpg" alt="Image" className="img-fluid" />
                <img src="images/talent_pipelines.jpg" alt="Image" className="img-fluid" />
                <img src="images/cyber_security.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="custom-direction">
                <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace" /></span></a><a href="#" className="custom-next"><span><span className="icon-keyboard_backspace" /></span></a>
              </div>
            </div>
            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay={100}>
              <div className="owl-carousel slide-one-item-alt-text">
                <div>
                  <h2 className="section-title mb-3">Healthcare Providers. </h2>
                  <p className="lead">Participating providers ask their clients if they'd like to test the program and invite them to join.</p>
                  <p><a href="#feature-section" className="btn btn-primary mr-2 mb-2">Learn more about bento providers</a></p>
                </div>
                <div>
                  <h2 className="section-title mb-3">Nutritionists</h2>
                  <p className="lead">Nutritionists submit healthy menu items and grocery lists in the bento portal. These appear on grocery and menu sites as discounted options for clients (healthy eaters).</p>
                  <p><a href="#ai-section" className="btn btn-primary mr-2 mb-2">Learn more about bento nutritionists</a></p>
                </div>
                <div>
                  <h2 className="section-title mb-3">Payers</h2>
                  <p className="lead">Insurers help subsidize the program to promote community wellness, which results in fewer claims. Payers also receive government funds for participating.</p>
                  <p><a href="#bigdata-section" className="btn btn-primary mr-2 mb-2">Learn more about bento payers</a></p>
                </div>
                <div>
                  <h2 className="section-title mb-3">Healthy Eaters</h2>
                  <p className="lead">Clients (healthy eaters) receive a questionnaire to fine-tune food preferences. They then access partner sites to shop grocery or menu items selected for them. If recommended items are seleced, they get nutritionally tailored foods at a reduced cost.</p>
                  <p><a href="#culture-section" className="btn btn-primary mr-2 mb-2">Learn more about healthy eaters</a></p>
                </div>
                <div>
                  <h2 className="section-title mb-3">Partners</h2>
                  <p className="lead">Our partners are participating grocers, restaurateurs, and food delivery services that can expand their customer base while receving a subsidy for discounted healthy offerings.</p>
                  <p><a href="#cybersecurity-section" className="btn btn-primary mr-2 mb-2">Learn about bento partners</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

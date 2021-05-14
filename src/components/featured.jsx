import React, { Component } from 'react'

export default class Featured extends Component {
  render() {
    return (
        <div>
          <section className="site-section bg-light" id="feature-section">
            <div className="container">
              <div className="row mb-5">
              </div>
              <div className="row site-section" id="feature-section">
                <div className="col-12 text-center" data-aos="fade">
                  <a name="featured" />
                  <h2 className="section-title" style={{fontSize: '28px'}}>Healthy Eaters</h2>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                </div>
                <div className="col-lg-2 text-left" data-aos="fade">
                </div>
                <div className="col-sm-8 text-left" data-aos="fade">
                  <p>Pick up the wholesome meals and groceries you select or have them delivered directly to your door. Complete a questionnaire to define your food preferences. Select suggested items from participating grocers, restaurants, or meal delivery services to receive items at a discount.</p>
                  <p><b>Ask your healthcare provider if you’re eligible to join.</b></p> 
                </div>
              </div>
            </div></section>
          <section>
            <div className="row site-section" id="feature-section">
            </div>
          </section>
        </div>
      );
    }
  };
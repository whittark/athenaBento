import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_2.jpg)'}} data-aos="fade" id="home-section">
          <div className="container">
            <div className="row align-items-center justify-content-right">
              <div className="col-sm-1 col-sm-11 mt-sm-5 text-right">
              <p id="purple-name"><b>athena</b>Bento</p>
                <h1 data-aos="fade-up">Say yum to good health</h1>
                <p id="purple-h"><b>Get delicious foods tailored to your</b></p>
                <p id="purple-h"><b>health profile and delivered to your door.</b></p>
                <p id="purple-h"><b>Choose items selected for</b></p>
                <p id="purple-h"><b>you by nutritionists and save.</b></p>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <a href="#" target="_blank" className="btn smoothscroll btn-primary mr-2 mb-2">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
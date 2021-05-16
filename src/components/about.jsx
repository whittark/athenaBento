import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/purpleband.gif)'}} data-aos="fade" id="home-section">
      <div className="container">
      <div className="col-sm-12 text-center">
              <h2 className="section-title-w mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>Dig in to get your glow on.</h2>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>Feeling great begins with delicious, nutritious foods. </h2>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>But in our fast-paced culture, getting the right nutrition can be a challenge. </h2>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}><b>athenaBento</b> has partnered with healthcare providers, nutitionists, grocers, and the best chefs in your town to deliver meals and pantry suggestions tailored for you.</h2>
              <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                 <img src="images/sushi2.gif" alt="Image" className="img-fluid" />
              </div>
              <h2 className="section-title-w mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>Here's what's most delicious.</h2>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>When you make healthy food choices, everyone saves. <b>athenaBento</b> passes these savings on to you and our partners.</h2>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}> Get delectable, healthful meals without the effort, guesswork, or cost. 
              </h2>
              <span></span>
              <h2 className="section-title-w2 mb-6" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}><b>Scroll down to learn more and get started.</b> </h2>
              <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                <img src="images/sushi8.gif" alt="Image" className="img-fluid" /> 
              </div>
            </div>
            
      </div>
      
    </div>
  );
}
};
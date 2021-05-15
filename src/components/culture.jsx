import React, { Component } from 'react'

export default class Culture extends Component {
  render() {
    return (
      <div>
      <section className="site-section bg-light" id="culture-section">
        <div className="container">
          <div className="row mb-5">
          </div>
          <div className="row site-section" id="culture-section">
            <div className="col-md-7 text-center" data-aos="fade">
              <a name="featured" />
              <h2 className="section-title" style={{fontSize: '28px'}}>Payers</h2>
              <p>As payers, you are champions of preventative care. Accessible, nutritious meals result in lower healthcare costs for everyone.</p>
              <p><b>Sign up</b> to learn more or <b>Sign In</b> to access your program dashboard and track subsidies for participation.</p>
            </div>
              <div className="col-12 text-center" data-aos="fade">
                <img src="images/leveraging_data_cscience-sm.jpg" alt="Image" /> 
              </div>
          </div>
        </div></section>
      <section>
        <div className="row site-section" id="culture-section">
        </div>
      </section>
    </div>
      );
    }
  };
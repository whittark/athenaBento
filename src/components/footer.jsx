import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-5">
                    <h2 className="footer-heading mb-4">Inside <b>athenaBento</b></h2>
                    <p>In our busy culture, making healthy food choices is a challenge for us all.</p>
                    <p>As someone who struggles with balancing a healthy lifestyle myself, I dream of the day when healthy food choices are as affordable and convenient as drive thru fare.</p>
                    <p><b>athenaBento</b> takes the shame and burden off of the patient to 'just eat better' 
                    by providing just that. Cost-effective and convenient options that promote wellness.</p>
                    <p>It is ambitious. But it's also food for thought. :-D  Thanks for your consideration!</p>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                  </div>
                </div>
              </div>
            </div>
          </div></footer>
      );
    }
  };
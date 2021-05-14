import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (

      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2">
                <h1 className=".right-side-content"><a href="#" target="_blank" className="h2 mb-0"><span className="text-primary" style={{color: 'rgb(88, 44, 131)'}}>.</span> </a></h1>
              </div>
              <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li><a href="#feature-section" className="nav-link">Healthy Eaters</a></li>
                    <li><a href="#ai-section" className="nav-link">Providers</a></li>
                    <li><a href="#bigdata-section" className="nav-link">Nutritionists</a></li>
                    <li><a href="#culture-section" className="nav-link">Payers</a></li>
                    <li><a href="#cybersecurity-section" className="nav-link">Partners</a></li>
                    <li><a href="#devops-section" className="nav-link"><b>Sign In</b></a></li>
                  </ul>
                </nav>
      
              </div>
              <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle float-left"><span className="icon-menu h3" /></a></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
};
import React from 'react';

const Header = () => (
  <nav className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="./index.html">Material Kit </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="material-icons">apps</i> Components
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="./index.html" className="dropdown-item">
                <i className="material-icons">layers</i> All Components
              </a>
              <a href="http://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html" className="dropdown-item">
                <i className="material-icons">content_paste</i> Documentation
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">
              <i className="material-icons">cloud_download</i> Download
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
              <i className="fa fa-facebook-square" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;

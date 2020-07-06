import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="global-footer full-footer">
        <div className="in-glfooter">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 col-lg-2 col-md-2 col-sm-3">
                <div className="glfooter-content">
                  <div className="glfooter-box">
                    <div className="logo-left">
                      <img src="../images/logo/kiya-logo.png" alt="kiy-logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-8 col-md-8 col-sm-6">
                <div className="glfooter-content">
                  <div className="glfooter-box">
                    <div className="glcopyright-text1">
                      <em>
                        Powered by Kiya.ai ATM Monitoring System © 2020
                        Infrasoft Technologies Ltd - All rights reserved
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 col-lg-2 col-md-2 col-sm-3">
                <div className="glfooter-content">
                  <div className="glfooter-box">
                    <div className="logo-right">
                      <img
                        src="../images/logo/infrasoft-logo.png"
                        alt="infrasoft-logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

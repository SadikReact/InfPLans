import React from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import planLeftImg from "../../../assets/imgs/plans/elite-network-img.png";
import { Button } from "reactstrap";
export default function Extend() {
  return (
    <LayoutOne headerTop="visible">
      <div className="container">
        <section id="extend">
          <form className="login-form">
            <div className="login-container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                  <img src={planRighttImg} alt="ddd" />
                  <div>
                    <h3>INF Plan Extensions</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="m-2">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="EmailInput"
                    />
                    {/* <button className="plan-btn">Next</button> */}
                    <Button className="btn next-btn">Next</Button>
                  </div>
                </div>
              </div>
              <div className="Extend-Content">
                <h3>To extend coverage please complete the following steps:</h3>

                <ol>
                  <li>Enter email in the Plan Member Sign In</li>
                  <li>
                    We will send a 6-digit OTP to your email. Enter this OTP as
                    the password.
                  </li>
                  <li>Once you're logged in, click on 'Active Plans.'</li>
                  <li>
                    On the right hand side of the Active Plans record will be a
                    "Extend" Button. Click the button to Extend coverage.
                  </li>
                </ol>
              </div>
            </div>
          </form>
        </section>
      </div>
    </LayoutOne>
  );
}

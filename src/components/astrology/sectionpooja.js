import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import Homebookpooja from "./Homebookpooja.js";
// import Swiper from "react-id-swiper";
import customerService from "../../assets/imgs/Insurance/customer-service.png";
import built from "../../assets/imgs/Insurance/built-with-technology-icon.png";
import visitor from "../../assets/imgs/Insurance/expert-in-visitor-insurance-icon.png";
import record from "../../assets/imgs/Insurance/over-30-year-track-record-icon.png";
import Fulltransparency from "../../assets/imgs/Insurance/full-transparency-icon.png";
import company from "../../assets/imgs/Insurance/company-with-patents-icon.png";
import offerings from "../../assets/imgs/Insurance/exclusive-plan-offerings-icon.png";
import permanentResident from "../../assets/imgs/Insurance/permanent-resident-icon.png";
class SectionPooja extends React.Component {
  state = {
    productList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getProduct`).then(res => {
      this.setState({ productList: res.data.data });
    });
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        {/* <Container-fluid> */}
        <div className="heading mt-40">
          <h4>We Really Do Care About Our Plan Members</h4>
          <h2>Why Choose INF Insurance?</h2>
          {/* <img src={textbottom} alt="" /> */}
        </div>
        <section className="pt-0 pb-0" id="why-choose-inf-insurance">
          <div className="container mt-2">
            <Row>
              <div className="col-lg-12 col-md-12 mb-50">
                <div className="category-home">
                  <section className="pt-0">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={built}
                              alt="built"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            A Simpler Experience With Built-in Technology
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={record}
                              alt="record"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            Our 30 Year Track Record
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={visitor}
                              alt="visitor"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            Expertise in Visitors Insurance
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={customerService}
                              alt="customerService"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            24-hour Customer Service
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={Fulltransparency}
                              alt="Fulltransparency"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">Full Transparency</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={company}
                              alt="company"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            The Company with Patents
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={offerings}
                              alt="offerings"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            Exclusive Plan Offerings
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 why-choose-inf-icon-container">
                          <div className="insuranceDiv">
                            <img
                              src={permanentResident}
                              alt="permanentResident"
                              className="mb-4 InsuranceImg"
                            />
                          </div>
                          <p className="column-title">
                            No Paperwork. Instant ID. Secure Purchase
                          </p>
                        </div>
                        <div className="col-lg-12 col-md- col-sm-12 why-choose-inf-icon-container">
                          <a href="#">
                            <button className="btn btn-main">Learn More</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Row>
          </div>
        </section>
        {/* </Container-fluid> */}
      </>
    );
  }
}
export default SectionPooja;

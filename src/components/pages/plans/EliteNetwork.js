import React, { useState, useEffect } from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import eliteRight from "../../../assets/imgs/network/elite1.png";
import eliteLeft from "../../../assets/imgs/network/elite2.png";
import elite3 from "../../../assets/imgs/network/elite3.png";
import elite4 from "../../../assets/imgs/network/elite4.png";
import BookIcon from "../../../assets/imgs/network/book-icon.png";
import "../../../assets/scss/elite.scss";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import classnames from "classnames";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";

export default function EliteNetwork() {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  const [network, setNetwork] = useState("1");
  const [ViewOnePlan, setViewOnePlan] = useState({});

  const params = useParams();
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const networkFunc = ele => {
    if (network !== ele) setNetwork(ele);
  };
  useEffect(() => {
    // console.log(params.id);
    axiosConfig
      .get(`/user/getOnePlan/${params.id}`)
      .then(response => {
        console.log(response?.data?.data?.Plan);
        setViewOnePlan(response?.data?.data?.Plan);
        // setCategoryList(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.id]);

  return (
    <LayoutOne headerTop="visible">
      <section id="elite-section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" elite-container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <div> */}
                    <h2 className="text-center text-blue">
                      What is the {ViewOnePlan && ViewOnePlan?.planName}
                      International Visitor Accident & Sickness Insurance
                      (IVAS)?
                    </h2>
                    {/* </div> */}
                    {/* <div className="">
                      <img src={planRighttImg} alt="ddd" />
                    </div>
                    <p className="text-center plans-title">Elite Network</p> */}
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-8 col-md-8">
                      {ViewOnePlan && ViewOnePlan ? (
                        <>{ReactHtmlParser(ViewOnePlan?.desc)}</>
                      ) : (
                        <></>
                      )}
                      <p className="text-black">
                        INF Elite IVAS Plan is our flagship insurance program
                        for INF members visiting the USA, Canada, or Mexico.
                      </p>
                      <p className="text-black">
                        INF Elite IVAS Plan is not available to US residents and
                        is <b>only available to non-US residents</b>
                      </p>
                      <p className="text-black">
                        INF Elite IVAS provides coverage for pre-existing
                        conditions as defined in the plan, as per policy
                        limitations, exclusions and maximums, with no benefit
                        waiting period.
                      </p>
                      <a href="#" className="read-more">
                        Read More
                      </a>
                      <p className="text-black">
                        INF Elite IVAS provides coverage for pre-existing
                        conditions as defined in the plan, as per policy
                        limitations, exclusions and maximums, with no benefit
                        waiting period.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <img src={planRighttImg} alt="ddd" />
                      <h3 className="text-center text-blue">
                        {ViewOnePlan && ViewOnePlan?.planName} Plan
                      </h3>
                      <Button className="plan-btn">Click to Get a Quote</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="elite-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h3 className="text-center">
                As a plan member you will also have access to additional
                Non-Insurance Features when traveling to the USA including:
              </h3>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul>
                    <li>
                      Access to a Careington discount program at no additional
                      cost with the INF Elite IVAS Plan. Careington coordinates
                      this discount program, which provides savings on Dental,
                      Vision, Prescription, & Hearing products & services in the
                      United States. For example, you may see savings of up to
                      50% for Dental procedures! For more information on
                      benefits of the discount program, please visit our page on
                      the Discount Card Program. This Discount card program is
                      not an insurance product and is not insured by Crum &
                      Forster SPC. This is not insurance.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img src={eliteRight} alt="premier" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row mt-5">
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <img src={eliteLeft} alt="premier" />
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12">
                  <ul>
                    <li>
                      As a plan member, you will be provided access to Doctor
                      Please!- a telehealth app which allows plan member to
                      access medical care from the comfort of their own home.
                      Doctor Please! works worldwide, and allows plan member to
                      schedule an appointment with a healthcare provider that is
                      credentialed, certified and highly trained, and typically
                      arrange medical care within 1 hour. The doctor will video
                      or audio chat with you and if required, send a
                      prescription to the nearest pharmacy (note that
                      prescriptions may require out of pocket expense if they
                      are not eligible expenses). Doctor Please may be able to
                      facilitate prescription refills of medications, and can be
                      used for any non life threatening condition. This is not
                      an insurance product and is not insured by Crum & Forster
                      SPC. Doctor Please! only provides access to and helps
                      arrange the telehealth visits. Any eligible benefits are
                      paid under the terms of the IVAS Insurance Plan.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul>
                    <li>
                      Qualified Plan members are eligible for free Airport
                      lounge visit via Priority Pass. With a true global spread
                      of lounges, Priority Pass really does help you make the
                      most of your non-insurance benefits. With 1,300+ airport
                      experiences in over 600 cities and 148 countries and more
                      lounges being added every month, Priority Pass looks
                      forward to helping you get even more out of your
                      membership. Priority Pass Members can now benefit from
                      airport dining, retail and spa discounts. Easily redeem
                      offers via the Priority Pass app or with your digital
                      account. Priority Pass is not an insurance product and is
                      not insured by Crum & Forster SPC. This is not insurance.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img src={elite3} alt="premier" className="EliteBigImg" />
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="row mt-5">
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <img src={elite4} alt="premier" />
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12">
                  <ul>
                    <li>
                      Qualifying INF Premier IVAS plan holders may be eligible
                      for VIP Airport Assistance as an addon. Organized through
                      INF-Robin Assist on request, VIP airport assistance is a
                      premium service offered to travelers that provides
                      personalized, high-end support throughout the airport
                      experience. This can include amenities such as fast-track
                      immigration and security, private transportation to and
                      from the plane, exclusive lounge access, and assistance
                      with baggage and check-in. The goal of VIP airport
                      assistance is to make the travel experience as seamless
                      and comfortable as possible, while providing a high level
                      of personal attention and luxury. This is not an insurance
                      product and is not insured by Crum & Forster SPC.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="elite-section3">
        <div className="container">
          <div className="row text-center">
            <h2 className="text-center text-blue my-3">
              INF Elite IVAS Plan Coverages
            </h2>
            {/* <div className="elite-coverages-tab"></div> */}
            <div className="col-lg-12">
              <div>
                <Nav tabs>
                  <NavItem className="test">
                    <NavLink
                      className={classnames({
                        active: currentActiveTab === "1",
                        Tablehead: "Tablehead",
                      })}
                      onClick={() => toggle("1")}
                    >
                      Policy Maximum <br />
                      Age 0-69
                    </NavLink>
                  </NavItem>
                  <NavItem className="test">
                    <NavLink
                      className={classnames({
                        active: currentActiveTab === "2",
                        Tablehead: "Tablehead",
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Policy Maximum <br />
                      Age 70-99
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={currentActiveTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <section className="tableSection">
                          <div className="elite-coverages-tab1">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  <p className="column-tab-title">
                                    Maximum per Accident <br /> or Sickness
                                    Expense
                                    <br />
                                    Benefits
                                  </p>
                                </div>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  {" "}
                                  <p className=" column-tab-title">
                                    ​Deductible per <br />
                                    Accident or Sickness
                                    <br /> Expense Benefits
                                  </p>
                                </div>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  <p className=" column-tab-title">
                                    ​Maximum for Pre <br />
                                    -Existing Conditions
                                  </p>
                                </div>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab ">
                                  <p className=" column-tab-title">
                                    ​Deductible for Pre- <br />
                                    Existing Conditions
                                  </p>
                                </div>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$1500</p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <section className="tableSection">
                          <div className="elite-coverages-tab1">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  <p className="column-tab-title">
                                    Maximum per Accident <br /> or Sickness
                                    Expense
                                    <br />
                                    Benefits
                                  </p>
                                </div>
                                <p className="tab-content text-black">$2500</p>
                                <p className="tab-content text-black">$1800</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$1500</p>
                                <p className="tab-content text-black">$600</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$300</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  <p className=" column-tab-title">
                                    ​Deductible per <br />
                                    Accident or Sickness
                                    <br /> Expense Benefits
                                  </p>
                                </div>
                                <p className="tab-content text-black">$2500</p>
                                <p className="tab-content text-black">$1200</p>
                                <p className="tab-content text-black">$1300</p>
                                <p className="tab-content text-black">$1400</p>
                                <p className="tab-content text-black">$1700</p>
                                <p className="tab-content text-black">$1900</p>
                                <p className="tab-content text-black">$1300</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab">
                                  <p className=" column-tab-title">
                                    ​Maximum for Pre <br />
                                    -Existing Conditions
                                  </p>
                                </div>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                              </div>
                              <div className="col-lg-3">
                                <div className="column-tab ">
                                  <p className=" column-tab-title">
                                    ​Deductible for Pre- <br />
                                    Existing Conditions
                                  </p>
                                </div>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                                <p className="tab-content text-black">$500</p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" id="elite-section4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-blue text-center">
                INF Elite IVAS Plan Co-Insurance
              </h2>
              <h3 className="text-black text-center py-3">
                Co-Insurance With INF Elite IVAS Plan
              </h3>
              <div className="elite-co-insurance-tab">
                <div>
                  <Nav tabs>
                    <NavItem className="test">
                      <NavLink
                        className={classnames({
                          active: network === "1",
                          Tablehead: "Tablehead",
                        })}
                        onClick={() => networkFunc("1")}
                      >
                        In-Network
                      </NavLink>
                    </NavItem>
                    <NavItem className="test">
                      <NavLink
                        className={classnames({
                          active: network === "2",
                          Tablehead: "Tablehead",
                        })}
                        onClick={() => networkFunc("2")}
                      >
                        Out of Network
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={network}>
                    <TabPane tabId="1">
                      <Row>
                        <Col lg="12" sm="12">
                          <section>
                            <p>
                              80% or 90% of charges up to the Total Maximum for
                              All Accident or Sickness Expense Benefits. $25
                              in-network Urgent Care Copay
                            </p>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col lg="12" sm="12">
                          <section>
                            <p>
                              60% or 70% of the Usual and Customary Charges up
                              to the Total Maximum for All Accident or Sickness
                              Expense Benefits. $50 out-of-network Urgent Care
                              Copay
                            </p>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <h2 className="text-blue ">INF Elite IVAS Plan Description</h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 text-center">
              <div>
                <h3 className="text-black">
                  Read INF Elite IVAS Plan <br></br>
                  Description for Age 0-69
                </h3>
                <img src={BookIcon} alt="book" />
              </div>
              <button className="plan-btn my-4">Read Now</button>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 text-center">
              <div>
                <h3 className="text-black">
                  Read INF Elite IVAS Plan <br></br>
                  Description for Age 70-99
                </h3>
                <img src={BookIcon} alt="book" />
              </div>
              <button className="plan-btn my-4">Read Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* cta section */}
      <section className="elite-cta-hero-section-bg">
        <div id="elite-cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2 className="text-white text-center">Get Coverage Now</h2>
                <a href="#">
                  <button className="buy-now-btn">Apply Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="elite-section7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="text-black text-center first-paragraph">
                Benefits are provided for eligible Insured Persons. Terms and
                conditions are briefly outlined in this summary of coverage.
                Complete provisions pertaining to this insurance are contained
                in the Plan. In the event of any conflict between this summary
                of coverage and the Plan, the Plan will govern. The Plan is a
                short term limited duration Plan renewable at the option of the
                insurer. This is a brief description of the important features
                of the insurance plan. It is not a contract of insurance. The
                terms and conditions of coverage are set forth in the plan
                issued to ITA Global Trust, LTD. For a detailed plan
                description, exclusions, and limitations please view the plan on
                file with INF. This insurance is not subject to, and will not be
                administered as a PPACA (Patient Protection and Affordable Care
                Act) insurance plan. PPACA requires certain US residents and
                citizens obtain PPACA compliant insurance coverage. This plan is
                not designed to cover US residents and citizens. This Plan is
                not subject to guaranteed issuance or renewal. By purchasing
                this insurance, you become a member of the ITA Global Trust,
                LTD. PPO Networks are not provided by Crum & Forster, SPC
              </p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blue-bg text-center">
                <h3 className="text-white"> Privacy Statement:</h3>
                <p className="text-white">
                  We know that your privacy is important to you and we strive to
                  protect the confidentiality of your non-public personal
                  information. We do not disclose any non-public personal
                  information about our insureds or former insureds to anyone,
                  except as permitted or required by law. We maintain
                  appropriate physical, electronic and procedural safeguards to
                  ensure the security of your non-public personal information.
                  You may obtain a detailed copy of our privacy policy by
                  calling 408-222-1110.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className=" white-bg text-center">
                <h3 className="text-blue"> Complaints:</h3>
                <p className="text-black">
                  In the event that you remain dissatisfied and wish to make a
                  complaint you can do so to the Complaints team at
                  support@infplans.com
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blue-bg text-center">
                <h3 className="text-white"> Data Protection:</h3>
                <p className="text-white">
                  Please note that sensitive health and other information that
                  you provide may be used by us, our representatives, the
                  insurers and industry governing bodies and regulators to
                  process your insurance, handle claims and prevent fraud. This
                  may involve transferring information to other countries (some
                  of which may have limited, or no data protection laws). We
                  have taken steps to ensure your information is held securely.
                  Where sensitive personal information relates to anyone other
                  than you, you must obtain the explicit consent of the person
                  to whom the information relates both to the disclosure of such
                  information to us and its use as set out above. Information we
                  hold will not be shared with third parties for marketing
                  purposes. You have the right to access your personal records.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className=" white-bg text-center">
                <h3 className="text-blue"> Note:</h3>
                <p className="text-black">
                  This insurance is not subject to and does not provide certain
                  insurance benefits required by the United States’ Patient
                  Protection and Affordable Care Act (“PPACA”). This coverage is
                  not a general health insurance product, but is intended for
                  use in the event of a sudden and unexpected event while
                  traveling outside your home country. PPACA requires certain US
                  citizens or US residents to obtain PPACA compliant health
                  insurance, or “minimum essential coverage.” PPACA also
                  requires certain employers to offer PPACA compliant insurance
                  coverage to their employees. Tax penalties may be imposed on
                  U.S. residents or citizens who do not maintain minimum
                  essential coverage, and on certain employers who do not offer
                  PPACA compliant insurance coverage to their employees. In some
                  cases, certain individuals may be deemed to have minimum
                  essential coverage under PPACA even if their insurance
                  coverage does not provide all of the benefits required by
                  PPACA. You should consult your attorney or tax professional to
                  determine whether the policy meets any obligations you may
                  have under PPACA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}

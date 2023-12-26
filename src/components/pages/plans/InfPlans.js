import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { FaCheck } from "react-icons/fa";
import LayoutOne from "../../../layouts/LayoutOne";
import planLeftImg from "../../../assets/imgs/plans/elite-network-img.png";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import premier from "../../../assets/imgs/plans/premier-img.png";
import travelImg from "../../../assets/imgs/plans/travel-img.png";
import standardImg from "../../../assets/imgs/plans/standard-img.png";
// import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../../axiosConfig";
import {
  Button,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
const InfPlan = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  // useEffect(() => {
  //   axiosConfig
  //     .get("/admin/getbanner")
  //     .then(response => {
  //       setSliderData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.log("error", error);
  //     });
  // }, []);
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,

    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  const toggle = tab => {
    console.log(tab);
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  return (
    <LayoutOne headerTop="visible">
      <div className="slider-area">
        <div className="slider-active nav-style-1">
          <section
            class="home-hero-section-bg sectionPart"
            alt="Find the righ  t coverage for your trip"
            id="Inf-plans"
          >
            <div id="plans-section-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="plans-container">
                      <h2 className="text-blue text-center">
                        Explore Insurance for Visitors
                      </h2>
                      <p className="text-center">
                        We offer insurance plans for international visitors
                        traveling worldwide outside their home countries, from
                        most countries in the world. You should consider
                        International Visitors Accident and Sickness Insurance
                        when traveling outside your home country- especially
                        when staying for a defined period of time. It is
                        important to find an insurance plan which fits your
                        needs. For over 30 years, INF has provided unique and
                        innovative accident & sickness insurance to individuals
                        from across the world visiting anywhere outside their
                        home country.
                      </p>
                      <p className="text-center">
                        *INF Elite, Traveler, Standard, & Premier are not
                        available to US residents and are only available to
                        non-US residents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={planLeftImg} alt="ddd" />
                        </div>
                        <p className="text-center plans-title">Elite Network</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Utilizes UnitedHealthcare Options PPO (including
                            Direct Billing)
                          </li>

                          <li>
                            Maximum Limits of $75,000 (Age 70-99), or $150,000,
                            $250,000, $300,000, $500,000, $1,000,000 (Age 0-69)
                          </li>

                          <li>
                            Includes Pre-Existing Condition coverage (see plan
                            details)
                          </li>
                          <li>
                            Pre-Existing Conditions Coverage up to $20,000 (Age
                            70-99) or $25,000, $30,000, $40,000, or $50,000 (Age
                            0-69)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Priority Pass Airport Lounge Access as an addon
                          </li>
                          <li>
                            VIP Airport Assistance as an addon (when requested
                            and organized by INF-Robin Assist at available
                            airports)
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>

                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Elite Network</p>
                        <button className="plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={premier} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Premier</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Direct Billing may be available from providers
                          </li>

                          <li>
                            Maximum Limits of $100,000, $150,000, $300,000,
                            $500,000, and $1,000,000
                          </li>

                          <li>
                            Pre-Existing Limits of $15,000 and $25,000 (Age
                            70-99) or $20,000, $30,000, $40,000, $50,000,
                            $100,000, $150,000 or $200,000
                          </li>
                          <li>
                            Includes Pre-Existing Condition Coverage (See plan
                            details)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Priority Pass Airport Lounge Access as an addon
                          </li>
                          <li>
                            VIP Airport Assistance as an addon (when requested
                            and organized by INF-Robin Assist at available
                            airports)
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>

                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Premier</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={travelImg} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Traveler USA</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (90 days to 364
                            days)
                          </li>
                          <li>
                            Utilizes UnitedHealthcare Options PPO (including
                            Direct Billing)
                          </li>

                          <li>
                            Maximum Limits of $75,000 (Age 70-99) or $150,000,
                            $250,000, or $300,000 (Age 0-69)
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>
                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Traveler USA</p>
                        <button className=" plan-btn">Plan Details</button>
                        <a href="#">
                          <button className=" get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container">
                    <div className="row">
                      <div className="box"></div>
                      <div className="col-lg-3">
                        <div className="">
                          <img src={standardImg} alt="premier" />
                        </div>
                        <p className="text-center plans-title">Standard</p>
                      </div>
                      <div className="col-lg-6">
                        <h4>
                          Insurance Benefits underwritten by Crum & Forster,
                          SPC:
                        </h4>
                        <ul className="UlList">
                          <li>Coverage for non-US residents ages 0-99 years</li>

                          <li>
                            Short-term travel medical coverage (30 days to 364
                            days)
                          </li>
                          <li>
                            Direct Billing may be available from providers
                          </li>

                          <li>
                            Maximum Limits of $50,000, $100,000, or $150,000
                          </li>
                        </ul>
                        <h4>
                          Non-Insurance Benefits (not associated with Crum &
                          Forster SPC):
                        </h4>
                        <ul className="UlList">
                          <li>
                            24/7/365 Medical Concierge INF-Robin Assist, which
                            makes appointments and arranges direct billing for
                            members
                          </li>

                          <li>
                            Telehealth Provided by Doctor Please! (available
                            while visiting anywhere worldwide)
                          </li>
                          <li>
                            Dental, Vision, Hearing, and Prescription Discount
                            coordinated by Careington International (available
                            while visiting the US only)
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3">
                        <div className="plans-logo">
                          <img src={planRighttImg} alt="right" />
                        </div>
                        <p className="text-center plans-title">Standard</p>
                        <button className="plan-btn">Plan Details</button>
                        <a href="#">
                          <button className="get-btn">Get a Quate</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container tabmain" id="centerDiv">
            <div className="bmi-plans-tab ">
              <div className="row">
                <h3 className="text-center ">BMI Plans</h3>

                <Nav tabs>
                  <NavItem>
                    <div className="">
                      <NavLink
                        className={classnames({
                          active: currentActiveTab === "1",
                          TabBmi: "TabBmi",
                        })}
                        onClick={() => toggle("1")}
                      >
                        Benefits That Come With INF -BMI Plans
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem>
                    <div className="">
                      <NavLink
                        className={classnames({
                          active: currentActiveTab === "2",
                          TabBmi: "TabBmi",
                        })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        COVID-19 Coverage
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem>
                    <div className="">
                      <NavLink
                        className={classnames({
                          active: currentActiveTab === "3",
                          TabBmi: "TabBmi",
                        })}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Pre -Existing Conditions Coverage
                      </NavLink>
                    </div>
                  </NavItem>
                </Nav>
                <div className="container">
                  <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <ul className="tabList">
                            <li className="disc">COVID-19 Coverage</li>
                            <li className="disc">
                              All plans have 100% Co-Insurance (We cover 100%)
                              and NO DEDUCTIBLE
                            </li>
                            <li className="disc">
                              We make all the appointments for you- no more
                              hassle of finding a provider who will accept you
                              plan. We do everything on the backend to make sure
                              it's completely cashless.
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col lg="12" sm="12">
                          <ul className="tabList">
                            <li className="disc">
                              The Beneficiary must always and without exception
                              contact the Emergency Central, who in turn will
                              coordinate a virtual appointment by Telemedicine.
                            </li>
                            <li className="disc">
                              According to the opinion provided by the Medical
                              Department, if the Beneficiary presents symptoms
                              related to COVID-19, the Assistance Center will
                              coordinate the relevant medical consultation,
                              according to the safety and health protocols of
                              each country.
                            </li>
                            <li className="disc">
                              We will cover the expenses incurred up to the
                              coverage limit indicated in the voucher.
                            </li>
                          </ul>
                          <h3 className="p-3">
                            The following expenses will be covered under the
                            same limit:
                          </h3>
                          <ul className="tabList">
                            <li className="disc">
                              Hospital Expenses for COVID-19: In case of
                              requiring hospitalization to stabilize the
                              Beneficiary's condition.
                            </li>
                            <li className="disc">
                              Mechanical respirator fees: If the Medical
                              Department, together with the treating doctor,
                              considers the use of a mechanical respirator
                              necessary, the Central will authorize and cover
                              said expense.
                            </li>
                          </ul>
                          <div className="text-center bmi-bg">
                            <h3>Important Notice</h3>
                            <p>
                              Vouchers purchased after arrival are subject to a
                              5-day waiting period for new sickness coverage and
                              15-day waiting period for COVID-19 Coverage.
                            </p>
                            <p>
                              Vouchers must be extended before expiration to
                              avoid waiting period for new sickness coverage.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col lg="12" sm="12">
                          <h3 className="p-4">
                            The coverage provided for chronic and / or
                            pre-existing diseases includes the following
                            eventualities:
                          </h3>
                          <ul className="tabList">
                            <li className="disc">
                              Acute episode or unpredictable event
                            </li>
                            <li className="disc">A Chronic issue</li>
                            <li className="disc">
                              A Pre-existing diseases known
                            </li>
                            <li className="disc">
                              A previously asymptomatic pre-existing condition
                            </li>
                          </ul>
                          <div className="text-center bmi-bg">
                            <h3>Important Notice</h3>
                            <p>
                              Vouchers purchased after arrival are subject to a
                              5-day waiting period for new sickness coverage and
                              15-day waiting period for COVID-19 Coverage.
                            </p>
                            <p>
                              Vouchers must be extended before expiration to
                              avoid waiting period for new sickness coverage.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>

          <section id="plans-section-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="plan-container ">
                    <div className="row">
                      <h2 className="text-blue">Diplomat America</h2>
                      <div className="col-lg-12">
                        <h3>Diplomat America Plan Features:</h3>
                        <ul className="tabList">
                          <li className="">
                            Covers COVID-19 or Coronavirus like a New Sickness
                          </li>
                          <li>
                            Emergency Medical Evacuation and Repatriation:
                            $500,000
                          </li>
                          <li>Return of Mortal Remains: $50,000</li>
                          <li>Emergency Medical Reunion: $50,000</li>

                          <li>Return of Minor Child: $50,000</li>
                          <li>Interruption of Trip: $5,000</li>
                          <li>
                            Loss of Baggage: $50 per article; up to a maximum of
                            $250
                          </li>
                          <li>Emergency Dental Treatment: $100</li>
                          <li>
                            Accidental Death and Dismemberment: $25,000
                            (Enhanced Benefit Amounts available) with paralysis
                            and coma, seat belt and airbag, felonious assault
                            and home alteration and vehicle modification
                            benefits.
                          </li>
                          <li>
                            Athletic & Hazardous Activity Benefit Available
                            Political and Natural Disaster Evacuation: $50,000
                          </li>
                        </ul>
                        <h3 className="features-title">
                          This plan is designed for:
                        </h3>
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="tabList">
                              <li>
                                Non-U.S. Citizens visiting the U.S. and U.S.
                                Expats visiting the U.S.
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="tabList">
                              <li>Parents and relatives visiting the U.S.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutOne>
  );
};

export default InfPlan;

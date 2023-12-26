import React, { useState } from "react";
import planRighttImg from "../../../assets/imgs/plans/inf-logo.png";
import classnames from "classnames";
import LayoutOne from "../../../layouts/LayoutOne";
import step from "../../../assets/img/step.png";

import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  CustomInput,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
export default function ApplyList() {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  const [list, setList] = useState("1");
  const [date, setdate] = useState("");
  const [trip_startdate, setTrip_startdate] = useState("");
  const [trip_enddate, setTrip_enddate] = useState("");
  const [departure, setDeparture] = useState("");
  // const [date, setdate] = useState("");
  const toggle = tab => {
    // console.log(tab);
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const toggleList = tab => {
    console.log(tab);
    if (list !== tab) setList(tab);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(e);
    console.log(name, value);
  };
  return (
    <LayoutOne headerTop="visible">
      <section id="plans-section-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="plan-container ">
                <div className="row">
                  <div className="box"></div>

                  <div className="col-lg-12">
                    <h1 className="">Apply for INF Visitor Insurance</h1>
                    <div className="plans-logo">
                      <img src={planRighttImg} alt="right" />
                    </div>
                    <div id="headList">
                      <h4>
                        Insurance is offered to persons traveling on a limited
                        duration trip (364 days or less) to the US, Canada or
                        Mexico.
                      </h4>
                      <p>
                        Please note that INF Premier and Elite plans require
                        minimum 90 days enrollment; and Standard and Safe
                        Traveler USA require minimum 30 days enrollment.
                      </p>
                    </div>
                    <div className="container tabmain" id="centerDiv">
                      <div className=" bmi-apply-tab">
                        <div className="row">
                          <Nav tabs>
                            <NavItem>
                              <div className="toggle1">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "1",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => toggle("1")}
                                >
                                  <div
                                    style={{ justifyContent: "space-between" }}
                                    className="d-flex selectplan"
                                  >
                                    <span style={{ padding: "2.5rem" }}>
                                      Select Plan
                                    </span>
                                    <img src={step} alt="image" />
                                  </div>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "2",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("2");
                                  }}
                                >
                                  <div
                                    style={{ justifyContent: "space-between" }}
                                    className="d-flex selectplan"
                                  >
                                    <span style={{ padding: "2.5rem" }}>
                                      VISITOR INFORMATION
                                    </span>
                                    <img src={step} alt="image" />
                                  </div>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "3",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("3");
                                  }}
                                >
                                  <div
                                    style={{ justifyContent: "space-between" }}
                                    className="d-flex selectplan"
                                  >
                                    <span style={{ padding: "2.5rem" }}>
                                      {" "}
                                      DEPENTAND DETAILS
                                    </span>{" "}
                                    <img src={step} alt="image" />
                                  </div>
                                </NavLink>
                              </div>
                            </NavItem>
                            <NavItem>
                              <div className="">
                                <NavLink
                                  className={classnames({
                                    active: currentActiveTab === "4",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("4");
                                  }}
                                >
                                  {" "}
                                  <div
                                    style={{ justifyContent: "space-between" }}
                                    className="d-flex selectplan"
                                  >
                                    <span style={{ padding: "2.5rem" }}>
                                      {" "}
                                      PAYMENT DETAILS
                                    </span>{" "}
                                    <img src={step} alt="image" />
                                  </div>
                                </NavLink>
                              </div>
                            </NavItem>
                          </Nav>
                          <div className="container py-2">
                            <TabContent activeTab={currentActiveTab}>
                              <TabPane tabId="1">
                                <Row className="px-3">
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <label>Trip Start Time </label>
                                        <input
                                          className="form-control"
                                          type="date"
                                          name="trip_startdate"
                                          value={trip_startdate}
                                          onChange={handleChange}
                                        />
                                      </div>

                                      <div className="mt-2">
                                        <CustomInput
                                          type="select"
                                          name="departure"
                                          required
                                          defaultValue=""
                                          value={departure}
                                          onChange={e => {
                                            setDeparture(e.target.value);
                                          }}
                                        >
                                          <option value="" disabled>
                                            Departure
                                          </option>
                                          <option value="Pre-ex Coverage Included">
                                            Pre-ex Coverage Included
                                          </option>
                                          <option value="Pre-ex Coverage Not Included">
                                            Pre-ex Coverage Not Included
                                          </option>
                                          {/* {this.state.scriptN?.map(
                                            allScript => (
                                              <option
                                                value={allScript?._id}
                                                key={allScript?._id}
                                              >
                                                {allScript?.scriptName}
                                              </option>
                                            )
                                          )} */}
                                        </CustomInput>
                                      </div>
                                      <div>
                                        <h3>Additional Traveller Coverage</h3>

                                        <Input
                                          type="radio"
                                          id="html"
                                          name="additional_avg_cov"
                                          value="additional_avg_cov"
                                          className="m-2"
                                        />
                                        <label for="Yes">Yes</label>
                                        {/* <Label>Yes</Label> */}
                                        <Input
                                          type="radio"
                                          id="html"
                                          name="additional_avg_cov"
                                          value="additional_avg_cov"
                                          className="m-2"
                                        />
                                        <label for="No">No</label>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <label>Trip End Time</label>
                                        <input
                                          className="form-control"
                                          type="date"
                                          name="Trip End Time"
                                          onChange={handleChange}
                                        />
                                      </div>
                                      {/* <div className="my-2 mb-4">
                                        <label>Select Plan</label>

                                        <select
                                          name="Select Plan"
                                          onChange={handleChange}
                                          aria-label="Default select example"
                                        >
                                          <option selected>Select Plan</option>
                                          <option value="1">
                                            INF Standard
                                          </option>
                                          <option value="2">
                                            INF SAFE TRAVELLER USA 90
                                          </option>
                                          <option value="3">
                                            INF SAFE TRAVELLER USA
                                          </option>
                                          <option value="4">
                                            INF PREMIER PLUS
                                          </option>
                                          <option value="5">INF PREMIER</option>
                                          <option value="6">
                                            INF ELITE PLUS
                                          </option>
                                          <option value="7">
                                            INF ELITE 90
                                          </option>
                                          <option value="8">INF ELITE </option>
                                        </select>
                                      </div> */}
                                      {/* <div>
                                        <div className="my-2 mb-4">
                                          <h5 className="py">
                                            POLICY MAXIMUM:
                                          </h5>
                                          <select
                                            name="POLICY MAXIMUM"
                                            onChange={handleChange}
                                          >
                                            <option selected>
                                              Select Plan
                                            </option>
                                            <option value="1">
                                              INF Standard
                                            </option>
                                            <option value="2">
                                              INF SAFE TRAVELLER USA 90
                                            </option>
                                          </select>
                                        </div>
                                      </div> */}
                                      {/* <div>
                                        <div className="my-2 mb-4">
                                          <h5 className="py">
                                            PREEX DEDUCTIBLE/ MAX:
                                          </h5>
                                          <select
                                            name="PREEX DEDUCTIBLE/MAX"
                                            onChange={handleChange}
                                            aria-label="Default select example"
                                          >
                                            <option selected>
                                              Select Plan
                                            </option>
                                          </select>
                                        </div>
                                      </div> */}

                                      <div className="mt-2">
                                        <CustomInput
                                          type="select"
                                          name="departure"
                                          required
                                          defaultValue=""
                                          value={departure}
                                          onChange={e => {
                                            setDeparture(e.target.value);
                                          }}
                                        >
                                          <option value="" disabled>
                                            Destination
                                          </option>
                                          <option value="Pre-ex Coverage Included">
                                            Pre-ex Coverage Included
                                          </option>
                                          <option value="Pre-ex Coverage Not Included">
                                            Pre-ex Coverage Not Included
                                          </option>
                                          {/* {this.state.scriptN?.map(
                                            allScript => (
                                              <option
                                                value={allScript?._id}
                                                key={allScript?._id}
                                              >
                                                {allScript?.scriptName}
                                              </option>
                                            )
                                          )} */}
                                        </CustomInput>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    {/* <button className="btn get-btn">
                                      Previous
                                    </button> */}
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Next
                                    </button>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="2">
                                <Row>
                                  <Col lg="12" sm="12">
                                    <ul className="tabList">
                                      <li className="disc">
                                        The Beneficiary must always and without
                                        exception contact the Emergency Central,
                                        who in turn will coordinate a virtual
                                        appointment by Telemedicine.
                                      </li>
                                      <li className="disc">
                                        According to the opinion provided by the
                                        Medical Department, if the Beneficiary
                                        presents symptoms related to COVID-19,
                                        the Assistance Center will coordinate
                                        the relevant medical consultation,
                                        according to the safety and health
                                        protocols of each country.
                                      </li>
                                      <li className="disc">
                                        We will cover the expenses incurred up
                                        to the coverage limit indicated in the
                                        voucher.
                                      </li>
                                    </ul>
                                    <h3 className="p-3">
                                      The following expenses will be covered
                                      under the same limit:
                                    </h3>
                                    <ul className="tabList">
                                      <li className="disc">
                                        Hospital Expenses for COVID-19: In case
                                        of requiring hospitalization to
                                        stabilize the Beneficiary's condition.
                                      </li>
                                      <li className="disc">
                                        Mechanical respirator fees: If the
                                        Medical Department, together with the
                                        treating doctor, considers the use of a
                                        mechanical respirator necessary, the
                                        Central will authorize and cover said
                                        expense.
                                      </li>
                                    </ul>
                                    <div className="text-center bmi-bg">
                                      <h3>Important Notice</h3>
                                      <p>
                                        Vouchers purchased after arrival are
                                        subject to a 5-day waiting period for
                                        new sickness coverage and 15-day waiting
                                        period for COVID-19 Coverage.
                                      </p>
                                      <p>
                                        Vouchers must be extended before
                                        expiration to avoid waiting period for
                                        new sickness coverage.
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
                                      pre-existing diseases includes the
                                      following eventualities:
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
                                        A previously asymptomatic pre-existing
                                        condition
                                      </li>
                                    </ul>
                                    <div className="text-center bmi-bg">
                                      <h3>Important Notice</h3>
                                      <p>
                                        Vouchers purchased after arrival are
                                        subject to a 5-day waiting period for
                                        new sickness coverage and 15-day waiting
                                        period for COVID-19 Coverage.
                                      </p>
                                      <p>
                                        Vouchers must be extended before
                                        expiration to avoid waiting period for
                                        new sickness coverage.
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>
                        {/* <div className="container tabmain" id="centerDiv">
                          <div className="bmi-list-tab">
                            <div className="row">
                              <Nav tabs>
                                <NavItem className="w-50">
                                  <div className="">
                                    <NavLink
                                      className={classnames({
                                        active: list === "1",
                                        TabBmi: "TabBmi",
                                      })}
                                      onClick={() => toggleList("1")}
                                    >
                                      PLAN Description
                                    </NavLink>
                                  </div>
                                </NavItem>
                                <NavItem className="w-50">
                                  <div className="">
                                    <NavLink
                                      className={classnames({
                                        active: list === "2",
                                        TabBmi: "TabBmi",
                                      })}
                                      onClick={() => {
                                        toggleList("2");
                                      }}
                                    >
                                      Discount Services
                                    </NavLink>
                                  </div>
                                </NavItem>
                              </Nav>
                              <div className="container">
                                <TabContent activeTab={list}>
                                  <TabPane tabId="1">
                                    <Row>
                                      <Col lg="12" sm="12">
                                        <p>
                                          INF Elite 90% IVAS Plan is our
                                          flagship insurance program for INF
                                          Health Care for people visiting
                                          anywhere worldwide. INF Elite 90 IVAS
                                          provides coverage for pre-existing
                                          conditions as defined in the plan, as
                                          per policy limitations, exclusions and
                                          maximums, with no benefit waiting
                                          period.
                                        </p>
                                        <Row>
                                          <Col lg="6">
                                            <div>abc</div>
                                          </Col>
                                          <Col lg="6">
                                            <div>abc1222</div>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </TabPane>
                                  <TabPane tabId="2">
                                    <Row>
                                      <Col lg="12" sm="12">
                                        <ul className="tabList">
                                          <li className="disc">
                                            The Beneficiary must always and
                                            without exception contact the
                                            Emergency Central, who in turn will
                                            coordinate a virtual appointment by
                                            Telemedicine.
                                          </li>

                                          <li className="disc">
                                            We will cover the expenses incurred
                                            up to the coverage limit indicated
                                            in the voucher.
                                          </li>
                                        </ul>
                                      </Col>
                                    </Row>
                                  </TabPane>
                                </TabContent>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
}

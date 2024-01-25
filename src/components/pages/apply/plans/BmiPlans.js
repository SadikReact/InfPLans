import React, { useEffect, useState, useContext, useMemo } from "react";
import planRighttImg from "../../../../assets/imgs/plans/inf-logo.png";
import classnames from "classnames";
import { Routes, Route, useParams } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import countryList from "react-select-country-list";
import LayoutOne from "../../../../layouts/LayoutOne";
import step from "../../../../assets/img/step.png";
import "../../../../assets/scss/bmiplan.scss";
import {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [EmrContact, setEmrContact] = useState("");
  const [EmrPhone, setEmrPhone] = useState("");
  const [emrEmail, setEmrEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [gender, setGender] = useState("");
  const [date, setdate] = useState("");
  const [trip_startdate, setTrip_startdate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [trip_enddate, setTrip_enddate] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState({ label: "India" });
  const params = useParams();
  // const [date, setdate] = useState("");
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  const handleprevious = () => {
    alert("hello");
  };

  const options = useMemo(() => countryList().getData(), []);
  const options1 = useMemo(() => countryList().getData(), []);
  useEffect(() => {
    console.log(params);
  }, []);
  const changeHandler = value => {
    setCountry(value);
  };
  const handleDestination = value => {
    setDestination(value);
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
                                      VISITOR
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
                                      DEPENTAND DETAILS
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
                                    active: currentActiveTab === "4",
                                    TabBmiApply: "TabBmiApply",
                                  })}
                                  onClick={() => {
                                    toggle("4");
                                  }}
                                >
                                  <div
                                    style={{ justifyContent: "space-between" }}
                                    className="d-flex selectplan"
                                  >
                                    <span style={{ padding: "2.5rem" }}>
                                      PAYMENT DETAILS
                                    </span>
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
                                          className="form-control mt-1"
                                          type="date"
                                          name="trip_startdate"
                                          value={trip_startdate}
                                          onChange={e =>
                                            setTrip_startdate(e.target.value)
                                          }
                                        />
                                      </div>

                                      <div className="mt-2 select dobfield">
                                        <Select
                                          options={options}
                                          value={country}
                                          onChange={changeHandler}
                                        />
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
                                        <Input
                                          type="radio"
                                          id="html"
                                          name="additional_avg_cov"
                                          value="additional_avg_cov"
                                          className="m-2"
                                          checked
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
                                          name="TripEndTime"
                                          onChange={e =>
                                            setTrip_enddate(e.target.value)
                                          }
                                        />
                                      </div>

                                      <div className="mt-2 select dobfield">
                                        <Select
                                          options={options1}
                                          value={destination}
                                          onChange={handleDestination}
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="4" md="4" sm="4"></Col>
                                  <Col lg="4" md="4" sm="4">
                                    <button
                                      className="btn get-btn"
                                      onClick={() => {
                                        toggle("2");
                                      }}
                                    >
                                      Next
                                    </button>
                                  </Col>
                                  <Col lg="4" md="4" sm="4"></Col>
                                </Row>
                              </TabPane>

                              <TabPane tabId="2">
                                <h3 className="text-center my-3">
                                  Visitor Information
                                </h3>
                                <Row className="px-3">
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control"
                                          type="text"
                                          placeholder="FirstName"
                                          name="firstName"
                                          value={firstName}
                                          onChange={e =>
                                            setFirstName(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="dobfield d-flex">
                                        <div>
                                          <label className="lablesstyle">
                                            Date Of Birth &nbsp;&nbsp;
                                          </label>
                                        </div>
                                        <div className="yearfield">
                                          <select id="sel" name="sel">
                                            <option>Year</option>
                                            <option>1938</option>
                                            <option>1939</option>
                                            <option>1940</option>
                                            <option>1941</option>
                                            <option>1942</option>
                                            <option>1943</option>
                                            <option>1944</option>
                                            <option>1945</option>
                                            <option>1946</option>
                                            <option>1947</option>
                                            <option>1948</option>
                                            <option>1949</option>
                                            <option>1950</option>
                                            <option>1951</option>
                                            <option>1952</option>
                                            <option>1953</option>
                                            <option>1954</option>
                                            <option>1955</option>
                                            <option>1956</option>
                                            <option>1957</option>
                                            <option>1958</option>
                                            <option>1959</option>
                                            <option>1960</option>
                                            <option>1961</option>
                                            <option>1962</option>
                                            <option>1963</option>
                                            <option>1964</option>
                                            <option>1965</option>
                                            <option>1966</option>
                                            <option>1967</option>
                                            <option>1968</option>
                                            <option>1969</option>
                                            <option>1970</option>
                                            <option>1971</option>
                                            <option>1972</option>
                                            <option>1973</option>
                                            <option>1974</option>
                                            <option>1975</option>
                                            <option>1976</option>
                                            <option>1977</option>
                                            <option>1978</option>
                                            <option>1979</option>
                                            <option>1980</option>
                                            <option>1981</option>
                                            <option>1982</option>
                                            <option>1983</option>
                                            <option>1984</option>
                                            <option>1985</option>
                                            <option>1986</option>
                                            <option>1987</option>
                                            <option>1988</option>
                                            <option>1989</option>
                                            <option>1990</option>
                                            <option>1991</option>
                                            <option>1992</option>
                                            <option>1993</option>
                                            <option>1994</option>
                                            <option>1995</option>
                                            <option>1996</option>
                                            <option>1997</option>
                                            <option>1998</option>
                                            <option>1999</option>
                                            <option>2000</option>
                                            <option>2001</option>
                                            <option>2002</option>
                                            <option>2003</option>
                                            <option>2004</option>
                                            <option>2005</option>
                                            <option>2006</option>
                                            <option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                          </select>
                                        </div>
                                        <div>
                                          <select id="sel" name="sel">
                                            <option>Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </select>
                                        </div>
                                        <div>
                                          <select id="sel" name="sel">
                                            <option>&nbsp;&nbsp;Day</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div>
                                        <input
                                          className="form-control"
                                          type="number"
                                          placeholder="Passport Number"
                                          name="passport"
                                          value={passport}
                                          onChange={e =>
                                            setPassport(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control"
                                          placeholder="Last Name"
                                          type="text"
                                          name="lastName"
                                          value={lastName}
                                          onChange={e =>
                                            setLastName(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="select dobfield">
                                        <select id="sel" name="sel">
                                          <option>Male</option>
                                          <option>FeMale</option>
                                        </select>
                                      </div>
                                      <div>
                                        <input
                                          className="form-control"
                                          type="tel"
                                          placeholder="Contact No."
                                          name="contact"
                                          value={contact}
                                          onChange={e =>
                                            setContact(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="6"></Col>
                                  <Col lg="12" md="12" sm="6">
                                    <div className="my-2">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={trip_startdate}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="12" md="12" sm="6">
                                    <h3 className="text-center">
                                      Emergency Contact
                                    </h3>
                                  </Col>
                                  <Col lg="12" md="12" sm="6">
                                    <div className="my-2">
                                      <input
                                        className="input"
                                        type="tel"
                                        placeholder="Emergency Contact"
                                        name="EmrContact"
                                        value={EmrContact}
                                        onChange={e =>
                                          setEmrContact(e.target.value)
                                        }
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="12" md="12" sm="6">
                                    <div className="my-2">
                                      <input
                                        className="input"
                                        type="tel"
                                        placeholder="Emergency Contact Phone"
                                        name="EmrPhone"
                                        value={EmrPhone}
                                        onChange={e =>
                                          setEmrPhone(e.target.value)
                                        }
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="12" md="12" sm="6">
                                    <div className="my-2">
                                      <input
                                        className="input"
                                        type="text"
                                        placeholder="Emergency Contact Email"
                                        name="email"
                                        value={emrEmail}
                                        onChange={e =>
                                          setEmrEmail(e.target.value)
                                        }
                                      />
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Previous
                                    </button>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button
                                      className="btn get-btn"
                                      onClick={() => {
                                        toggle("3");
                                      }}
                                    >
                                      Next
                                    </button>
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
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Previous
                                    </button>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button
                                      className="btn get-btn"
                                      onClick={() => {
                                        toggle("4");
                                      }}
                                    >
                                      Next
                                    </button>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="4">
                                <Row>
                                  <Col lg="12" sm="12">
                                    <Row>
                                      <Col>
                                        <div className="bg-color">
                                          <h4 className="text-center pt-1">
                                            BMI CLASSICO
                                          </h4>
                                          <p className="text-center">
                                            <b>$21.9</b>
                                          </p>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="bg-color ">
                                          <h4 className="text-center pt-1">
                                            BMI ULTRA
                                          </h4>
                                          <p className="text-center">
                                            <b>$41.04</b>
                                          </p>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="bg-color">
                                          <h4 className="text-center pt-1">
                                            BMI ULTRA PLUS
                                          </h4>
                                          <p className="text-center">
                                            <b>$54.06</b>
                                          </p>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="bg-color">
                                          <h4 className="text-center pt-1">
                                            BMI VIP
                                          </h4>
                                          <p className="text-center">
                                            <b>$89.52</b>
                                          </p>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="bg-color text-center">
                                          <h4 className="text-center pt-1">
                                            BMI VIP PLUS
                                          </h4>
                                          <p className="text-center">
                                            <b>$108.66</b>
                                          </p>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row className="p-2">
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control mt-1"
                                          type="text"
                                          name="address"
                                          placeholder="Address"
                                          value={address}
                                          onChange={e =>
                                            setAddress(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="city"
                                          placeholder="City"
                                          onChange={e =>
                                            setCity(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="state"
                                          placeholder="State"
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="12">
                                    <div className="p-1">
                                      <div>
                                        <input
                                          className="form-control"
                                          type="number"
                                          placeholder="Postal Code"
                                          name="postalcode"
                                          onChange={e =>
                                            setPostalCode(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button className="btn get-btn">
                                      Previous
                                    </button>
                                  </Col>
                                  <Col lg="6" md="6" sm="6">
                                    <button
                                      className="btn get-btn"
                                      // onClick={() => {
                                      //   toggle("");
                                      // }}
                                    >
                                      Next
                                    </button>
                                  </Col>
                                </Row>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>
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

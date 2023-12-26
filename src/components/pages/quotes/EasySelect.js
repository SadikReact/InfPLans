import React, { useState, useContext } from "react";
import LayoutOne from "../../../layouts/LayoutOne";
import "../../../assets/scss/easySelect.scss";
import axiosConfig from "../../../axiosConfig";
import UserContext from "../../../Context/Context";
import { Form } from "reactstrap";
import Filters from "./FilterDataList";

export default function EasySelect() {
  // const [filter, setFilter] = useState("1");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maximum, setMaximum] = useState("");
  const [area, setArea] = useState("");
  const [obj, setobj] = useState({});
  const [email, setEmail] = useState("");
  const [isData, setIsData] = useState(false);
  const [Error, setError] = useState(false);
  const [PlanList, setPlanList] = useState([]);
  const user = useContext(UserContext);
  // console.log(user);
  // const toggle = ele => {
  //   if (filter !== ele) setFilter(ele);
  // };
  // const Senddata = {};
  const maxDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  // addition one day open
  const today = new Date();
  today.setDate(today.getDate() + 1); // Addition 1 days from the current date

  const minDate = today.toISOString().split("T")[0];
  // addition one day close

  // addition three day open
  const todayplus = new Date();
  todayplus.setDate(todayplus.getDate() + 5); // Addition 1 days from the current date

  const AddThreeDay = todayplus.toISOString().split("T")[0];
  // addition three day close
  // const OnHandleClick = () => {
  //   var ActiveBtn = document.getElementById("btnList");
  //   var btns = ActiveBtn.getElementsByClassName("btn");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       var current = document.getElementsByClassName("active");
  //       current[0].className = current[0].className.replace(" active", "");
  //       this.className += " active";
  //     });
  //   }
  // };
  const handleSubmit = e => {
    e.preventDefault();
    // setIsData(!isData);
    const payload = {
      fromDate,
      toDate,
      dateOfBirth,
      maximum,
      area,
      email,
    };
    localStorage.setItem("Search_get_admin_quote", JSON.stringify(payload));
    let Senddata = {
      fromDate: fromDate,
      toDate: toDate,
    };
    setobj(Senddata);
    if (!area && !maximum) {
      setError(true);
    }
    if (area && maximum) {
      axiosConfig
        .post(`/user/adminPlanlist`, Senddata)
        .then(response => {
          user.setProductList(response.data);
          setIsData(!isData);
          console.log(response.data);
          setPlanList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <LayoutOne headerTop="visible">
      {/* <section id="quote-section-1"> */}
      <section
        class="home-hero-section-bg"
        alt="Find the righ  t coverage for your trip"
        id="home-hero-section-background"
      >
        <div>
          <h1 className="text-center heading text-white">
            GET A VISITORS INSURANCE QUOTE FOR WORLDWIDE TRAVEL
          </h1>
          <p className="text-center ">
            The plans may cover medically necessary testing for COVID-19 in
            accordance with the plan terms, conditions and exclusions, while the
            person is in the US.
          </p>
          <p className="text-center ">
            INF and HOP Assist Plans are not available to US residents and are
            only available to non-US residents
          </p>
        </div>
      </section>
      <section style={{ padding: "0px" }}>
        <div className="container my-5">
          <div className="row">
            {isData === false ? (
              <>
                <div className="container">
                  <Form onSubmit={e => handleSubmit(e)}>
                    <div className="row">
                      <div className="get-a-quote-container row py-2">
                        <div className="form-group col-md-3 col-xs-12 qelement">
                          <div input-group input-daterange id="cFrom">
                            <div className="form-row">
                              <div className="row ">
                                <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                                  <lable className="dates">Start Date</lable>
                                  <input
                                    required
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    min={minDate}
                                    className="dropped"
                                    onChange={e => {
                                      debugger;
                                      setFromDate(e.target.value);
                                      setToDate(e.target.value + 5);
                                    }}
                                  />
                                </div>
                                <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                                  <lable className="dates">End Date</lable>
                                  <input
                                    type="date"
                                    required
                                    name="toDate"
                                    value={toDate}
                                    min={AddThreeDay}
                                    className="dropped "
                                    onChange={e => setToDate(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-5">
                          <div
                            style={{
                              display: `${Error && Error ? "block" : "none"}`,
                              color: "red",
                            }}
                            className="err"
                          >
                            Please Enter Details
                          </div>
                          <lable className="CoverageArea">Coverage Area</lable>
                          <details required className="DetailsDropdown">
                            <summary>
                              Coverage (for:International ,Below:)
                            </summary>
                            <div className="py-2">
                              <label>Area:</label>
                              <select
                                class="form-control form-select"
                                aria-label="Default select example"
                                defaultValue=""
                                type="select"
                                name="allPlan"
                                value={area}
                                onChange={e => setArea(e.target.value)}
                              >
                                <option value="" disabled>
                                  Coverage Area
                                </option>
                                <option value="USA/CANADA/Worldwide">
                                  USA/CANADA/Worldwide
                                </option>
                                <option value="Worldwide Travel">
                                  Worldwide Travel
                                </option>
                              </select>
                            </div>
                            <div className="py-2 mt-1">
                              <label>Maximum:</label>
                              <select
                                class="form-control form-select"
                                aria-label="Default select example"
                                type="select"
                                name="allPlan"
                                value={maximum}
                                onChange={e => setMaximum(e.target.value)}
                              >
                                <option value="Below $5,000,000">
                                  Below $5,000,000
                                </option>
                                <option value="Below $8,000,000">
                                  Below $8,000,000
                                </option>
                              </select>
                            </div>
                          </details>
                        </div>
                        <div className="col-md-4">
                          <lable className="dob">DOB</lable>
                          <input
                            required
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            // defaultValue="2013-01-08"
                            // max={maxDate()}
                            className="dropped "
                            onChange={e => setDateOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                      <div
                        className=" row py-4"
                        style={{
                          backgroundColor: "#252362",
                          justifyContent: "center",
                        }}
                      >
                        <div className="col-md-5 pt-2 col-xs-12 ">
                          <input
                            required
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            className="EmailInput"
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-md-3">
                          <button
                            className="custombtn2 text-white"
                            type="submit"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </>
            ) : (
              <>
                <Filters
                  PlanList={PlanList}
                  Senddata={obj}
                  setPlanList={setPlanList}
                  // handleSubmit={handleSubmit}
                />
              </>
            )}
            <div className="col-lg-12">
              {/* <ul className=" Btn-list" id="btnList">
                <li>
                  <a
                    className="filter-btn"
                    href=""
                    onClick={() => OnHandleClick()}
                  >
                    Filter
                  </a>
                </li>
                <li>
                  <a className="filter-btn" href="">
                    All
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    TRAVELASSIST
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    FIXED
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    NETWORK
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    BASIC
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    PRE-EX
                  </a>
                </li>
                <li>
                  <a href="" className="filter-btn">
                    EMAIL Quote
                  </a>
                </li>
              </ul> */}
              {/* <section> */}

              {/* <div className="container my-5 tableDesign">
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <div>
                      <h3 className="my-2">BMI CLASSICO</h3>
                      <hr />
                      <Row>
                        <Col lg="7" md="6" sm="12">
                          <ul className="center-block">
                            <li>
                              A Travel Assistance Plan for Visitors Traveling to
                              USA.
                            </li>
                            <li>Pre-Existing Conditions Coverage $300)</li>
                            <li>Covers COVID-19 Testing & Treatment</li>
                            <li>BMI Makes all Appointments</li>
                            <li>
                              Pays 100% of all Eligible Medical Expense directly
                              to provides
                            </li>
                            <li>Policy Maximums up to $10,000</li>
                            <li> Emergency Dental Benefits</li>
                            <li> Trip Interruption Benefit</li>
                            <li>
                              No Claims Hassle as BMI Handles all claims
                              directly
                            </li>
                            <li>
                              Quotes are based on 5 days min purchase and buying
                              more days get you reduced prices.
                            </li>
                          </ul>
                        </Col>
                        <Col lg="5" md="6" sm="12">
                          <Row>
                            <Col lg="6" md="12">
                              <h3> Plan Maximum:</h3>
                              <select
                                class="form-control"
                                aria-label="Default select example"
                              >
                                <option value="1000">1000</option>
                              </select>
                            </Col>
                            <Col lg="6" md="12">
                              <h3> Plan Deductible:</h3>
                              <select
                                class="form-control"
                                aria-label="Default select example"
                              >
                                <option value="0">0</option>
                              </select>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                              <div className="subheading">
                                <h3>Prex-Deductible: $0</h3>
                                <h3>Prex-Coverage Amt: $300</h3>
                              </div>
                            </Col>
                            <Col lg="6" md="12" sm="12" className="mt-2 ">
                              <button className="custombtn">
                                Add to Compare
                              </button>
                            </Col>
                            <Col lg="6" md="12" sm="12" className="mt-2  ">
                              <button className="custombtn">Purchase </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="5" md="6" sm="12" className="my-5 ">
                    <Row>
                      <Col lg="6" md="6" sm="12" className="">
                        <a href="#">
                          <button className="custombtn">Plan Details </button>
                        </a>
                      </Col>
                      <Col lg="6" md="6" sm="12" className=" ">
                        <a href="#">
                          <button className="custombtn">View Brochure </button>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="7" md="6" sm="12" className="">
                    <Row className="mt-5 productRow">
                      <Col lg="6" md="6" sm="12" className="my-5">
                        <h5>
                          <div className="form-group">
                            <Label> Coverage Period:</Label>
                            <p className="form-control-static">5</p>
                          </div>
                        </h5>
                      </Col>
                      <Col lg="6" md="6" sm="12" className="my-5 ">
                        <h5>
                          <div className="form-group">
                            <Label>Total</Label>
                            <p className="form-control-static">$55</p>
                          </div>{" "}
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div> */}
              <div className="container my-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="quote-container">
                      <h2 className="text-center text-blue py-3">
                        Direct billing via 24/7/365 Medical Concierge
                      </h2>
                      <p className="text-black">
                        <p className="text-black">
                          INF Plans come with 24/7/365 medical concierge via
                          INF-Robin Assist. INF-Robin Assist will arrange for
                          direct billing and provides 24/7 responsive claims,
                          emergency travel and medical assistance from any
                          device, any time, any place.
                        </p>
                        <p className="text-black">
                          INF-Robin Assist will process your claim, coordinate
                          with the medical providers around the globe, determine
                          eligibility,and even handle evacuation and
                          repatriation services.
                        </p>
                      </p>
                      <h2 className="text-center text-blue py-2">
                        Statement on COVID-19 Coverage
                      </h2>
                      <h3>Statement on COVID-19 Testing</h3>
                      <p className="text-black">
                        The plans may cover medically necessary testing for
                        COVID-19 in accordance with the plan terms, conditions
                        and exclusions, while the person is in the US. Medically
                        necessary COVID-19 testing and screening will be covered
                        without any cost-sharing (deductible / copay /
                        coinsurance).
                      </p>
                      <p className="text-black">
                        All cost-sharing for office, urgent care center,
                        laboratory, hospital and emergency room visits will be
                        waived when testing for COVID-19, but only to the extent
                        such items and services relate to the furnishing or
                        administration of such testing or to the evaluation of
                        such individual for purposes of determining the need of
                        such individual for such testing.
                      </p>
                      <h3 className="text-black">
                        Statement on COVID-19 Treatment
                      </h3>
                      <p className="text-black">
                        The plans may cover medically necessary treatment for
                        COVID-19 in accordance with the plan terms, conditions
                        and exclusions, while the person is in the US. COVID-19
                        treatment may be covered in the program as any other
                        eligible sickness.
                      </p>
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

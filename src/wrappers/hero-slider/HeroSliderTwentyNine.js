import React, { useEffect, useState } from "react";
import "../../assets/scss/_infPlan.scss";
import { Form } from "reactstrap";
// import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
import Filters from "../../components/pages/quotes/FilterDataList";
const HeroSliderTwentyNine = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maximum, setMaximum] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [isData, setIsData] = useState(false);

  const maxDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fromDate,
      toDate,
      dateOfBirth,
      maximum,
      area,
      email,
    };
    localStorage.setItem("user_searchquery", JSON.stringify(payload));
    axiosConfig
      .post(`/user/quote`, payload)
      .then((response) => {
        setIsData(!isData);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <section
          class="home-hero-section-bg"
          alt="Find the righ  t coverage for your trip"
          id="home-hero-section-background"
        >
          <div id="home-hero-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="text-white text-center">
                    FIND THE RIGHT COVERAGE <br />
                    FOR YOUR TRIP WORLDWIDE
                  </h1>
                </div>
              </div>
            </div>
            {isData === false ? (
              <>
                <div className="container">
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                      <div className="get-a-quote-container row py-2">
                        <div className="form-group col-md-3 col-xs-12 qelement">
                          <div input-group input-daterange id="cFrom">
                            <div className="form-row">
                              <div className="row ">
                                <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                                  <lable className="dates">Start Date</lable>
                                  <input
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    min={maxDate()}
                                    className="dropped"
                                    onChange={(e) =>
                                      setFromDate(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="col-md-6 col-lg-6 pl-0 start-date-title ">
                                  <lable className="dates">End Date</lable>
                                  <input
                                    type="date"
                                    name="toDate"
                                    value={toDate}
                                    min={maxDate()}
                                    className="dropped "
                                    onChange={(e) => setToDate(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-5">
                          <lable className="CoverageArea">Coverage Area</lable>

                          <details className="DetailsDropdown">
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
                                onChange={(e) => setArea(e.target.value)}
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
                                onChange={(e) => setMaximum(e.target.value)}
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
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            max={maxDate()}
                            className="dropped "
                            onChange={(e) => setDateOfBirth(e.target.value)}
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
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            className="EmailInput"
                            onChange={(e) => setEmail(e.target.value)}
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
              <Filters />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;

import React, { useEffect, useState } from "react";
import "../../assets/scss/_infPlan.scss";
import { Button, Form } from "reactstrap";
import { Stepper, Step } from "react-form-stepper";
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import "bootstrap/dist/css/bootstrap.min.css";
// import HeroSliderTwentyNineSingle from "../../components/hero-slider/HeroSliderTwentyNineSingle.js";
import axiosConfig from "../../axiosConfig";
import Filters from "../../components/pages/quotes/FilterDataList";
let totalstartDays;
let totalEndDays;
let totalDay;
let endDay;
const HeroSliderTwentyNine = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // const [minDate, setMinDate] = useState("");
  // const [maxDate, setMaxDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maximum, setMaximum] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [isData, setIsData] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [duration, setDuration] = useState(null);
  const [formValues, setFormValues] = useState([{ dob: "" }]);
  const [state, setState] = useState({
    basicPicker: new Date(),
    dateTimePicker: new Date(),
    humanFriendly: new Date(),
    minMax: new Date(),
    disabledRange: new Date(),
    multipleDates: new Date(),
    rangePicker: new Date(),
    weekNum: new Date(),
    inlinePicker: new Date(),
  });

  const handleTimeChange = e => {
    console.log(e.target.value);
    let mainDuration;
    if (fromDate && e.target.value) {
      const startDate = new Date(fromDate);
      const endDate = new Date(e.target.value);

      // Check if both dates are valid
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        // Calculate the difference in milliseconds
        const timeDifference = endDate.getTime() - startDate.getTime();

        // Convert the difference to days
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

        console.log("Difference in days:", daysDifference + 1);
        mainDuration = daysDifference + 1;
      } else {
        console.log("Invalid dates. Please select valid dates.");
      }
    }
    setDuration(mainDuration);
  };

  // useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     var dtToday = new Date();

  //     var month = dtToday.getMonth() + 1;
  //     var day = dtToday.getDate();
  //     var year = dtToday.getFullYear();

  //     if (month < 10) month = "0" + month.toString();
  //     if (day < 10) day = "0" + day.toString();

  //     var minDate = year + "-" + month + "-" + day;

  //     // Assuming 'txtDate' is the ID of the input element
  //     var txtDateInput = document.getElementById("txtDate");
  //     console.log(txtDateInput);
  //     if (txtDateInput) {
  //       txtDateInput.setAttribute("min", minDate);
  //     }
  //   });
  // }, []);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { dob: "" }]);
  };

  let removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  const handleNextStep = () => {
    setActiveStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handleBackStep = () => {
    setActiveStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };
  // function getDaysInMonth(date) {
  //   debugger;

  //   let yearr;
  //   let monthh;
  //   let lastDayOfMonth1;
  //   if (date.length > 1) {
  //     const secondDate = date[1];
  //     yearr = secondDate.getFullYear();
  //     monthh = secondDate.getMonth() + 1;
  //     lastDayOfMonth1 = new Date(yearr, monthh, 0);
  //     return lastDayOfMonth1.getDate();
  //   } else if (date.length === 1) {
  //     const year = date[0].getFullYear();
  //     const month = date[0].getMonth(); // Months are zero-based, so add 1
  //     const lastDayOfMonth = new Date(year, month, 0);
  //     return lastDayOfMonth.getDate();
  //   }

  //   // To get the last day of the month, set the date to 0 of the next month
  // }

  // const handleBothDates = date => {
  //   debugger;
  //   let daysInMonth = getDaysInMonth(date);
  //   console.log("totalmonth", daysInMonth);

  //   if (date.length > 1) {
  //     endDay = date[1].getDate();
  //     console.log("End Day:", endDay);
  //     totalEndDays = daysInMonth - endDay;
  //     totalDay = totalstartDays + totalEndDays;
  //   } else if (date.length === 1) {
  //     let startDay = date[0].getDate();
  //     console.log("Start Day:", startDay);
  //     totalstartDays = daysInMonth - startDay;
  //   }
  //   console.log(
  //     "totalDay",
  //     totalDay,
  //     "totalstartDays",
  //     totalstartDays,
  //     "totalEndDays",
  //     totalEndDays
  //   );
  //   if (totalDay) {
  //     setDuration(totalDay);
  //   } else {
  //     setDuration(totalstartDays);
  //   }
  // };
  const stepStyleConfig = {
    activeBgColor: "#4c5684",
    completedBgColor: "#00ee99",
  };
  const maxDate = () => {
    const today = new Date().toISOString().split("T")[0];
    console.log(today);
    return today;
  };
  const handleSubmit = e => {
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
      .then(response => {
        setIsData(!isData);
        console.log(response.data);
      })
      .catch(error => {
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
          {/* <div id="home-hero-section">
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
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    min={maxDate()}
                                    className="dropped"
                                    onChange={e => setFromDate(e.target.value)}
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
                                    onChange={e => setToDate(e.target.value)}
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
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            max={maxDate()}
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
              <Filters />
            )}
          </div> */}
          <h2 className="text-center">Travel Information</h2>
          <p className="text-center">
            Please provide required information so we can process your quote.
          </p>
          <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
            <Step label="Personal info" />
            <Step label="Career info" />
            <Step label="Clinic info" />
            <Step label="Clinic info" />
          </Stepper>
          {activeStep === 0 ? (
            <>
              <div className="row">
                <div className="col-lg-4 col-xs-12 "></div>
                <div className="col-lg-4 col-xs-12 ">
                  <div>
                    <h4>What's your country of residence?</h4>
                  </div>
                  <div className="py-2 mt-1">
                    <select
                      class="form-control form-select"
                      aria-label="Default select example"
                      type="select"
                      name="allPlan"
                      value={maximum}
                      onChange={e => setMaximum(e.target.value)}
                    >
                      <option value="Below $5,000,000">Below $5,000,000</option>
                      <option value="Below $8,000,000">Below $8,000,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12 "></div>
              </div>
            </>
          ) : (
            ""
          )}
          {activeStep === 1 ? (
            <div
              className="
            container"
            >
              <h1>What is your Date of birth?</h1>
              <p>
                Provide the following details of the traveler. **In adding a
                dependent, kindly click “Add another traveler”
              </p>
              <div
                className=" row py-4"
                style={{
                  // backgroundColor: "#252362",
                  justifyContent: "center",
                }}
              >
                {/* <div className=" col-md-2 py-2 col-xs-12 ">
                  <span>Traveler 1</span>
                </div>
                <div className=" col-md-7 py-2 col-xs-12 ">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    max={maxDate()}
                    className="dropped"
                    onChange={e => setDateOfBirth(e.target.value)}
                  />
                </div> */}

                {/* <form onSubmit={handleSubmit}> */}
                <div className="col-md-9 py-2 col-xs-12">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    // className="EmailInput"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                {formValues.map((element, index) => (
                  <div className="row" key={index}>
                    <div className=" col-md-2 py-2 col-xs-12 ">
                      <span
                        style={{
                          fontSize: "19px",
                          fontWeight: "600",
                        }}
                      >
                        Traveler {index + 1}
                      </span>
                    </div>
                    <div className="col-md-7 py-2 col-xs-12 ">
                      <input
                        type="date"
                        // name="dateOfBirth"
                        // value={dateOfBirth}
                        // max={maxDate()}
                        // className="dropped"
                        // onChange={e => setDateOfBirth(e.target.value)}
                        name="dob"
                        value={element.dob || ""}
                        onChange={e => handleChange(index, e)}
                      />
                    </div>

                    <div>
                      {index ? (
                        <span
                          // type="button"
                          // className="button remove btn btn-secondary"
                          style={{
                            color: "red",
                            cursor: "pointer",
                            fontSize: "19px",
                            fontWeight: "600",
                          }}
                          onClick={() => removeFormFields(index)}
                        >
                          Remove
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}

                <div className=" my-2">
                  <span
                    // className="add btn btn-secondary"
                    // type="button"
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      fontSize: "19px",
                      fontWeight: "600",
                    }}
                    onClick={() => addFormFields()}
                  >
                    Add another traveler
                  </span>
                </div>
                {/* </form> */}
              </div>
            </div>
          ) : (
            ""
          )}
          {activeStep === 2 ? (
            <div className="container">
              <div className="">
                <h1>Countries or regions travelling to?</h1>
                <div className="py-2 mt-1">
                  <select
                    class="form-control form-select"
                    aria-label="Default select example"
                    type="select"
                    name="allPlan"
                    value={maximum}
                    onChange={e => setMaximum(e.target.value)}
                  >
                    <option value="Below $5,000,000">Below $5,000,000</option>
                    <option value="Below $8,000,000">Below $8,000,000</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeStep === 3 ? (
            <div className="container">
              <Row>
                <h2>When are you Travelling?</h2>
                <Col className="mb-3" md="6" sm="12">
                  <h5 className="text-bold-500">StartDate and EndDate</h5>
                  {/* <Flatpickr
                    className="form-control"
                    id="txtDate"
                    options={{
                      mode: "range",
                      defaultDate: [
                        new Date().toISOString().split("T")[0], // Start date is the current date
                        new Date().toISOString().split("T")[0], // End date is also the current date
                      ],
                      minDate: new Date(
                        new Date().getTime() + 24 * 60 * 60 * 1000
                      ), // Disable dates before tomorrow
                    }}
                    onChange={date => handleBothDates(date)}
                  /> */}
                  <label htmlFor="startDate">Start Date:</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    min={maxDate()}
                    // min={minDate}
                    // max={maxDate}
                    onChange={e => setFromDate(e.target.value)}
                  ></input>
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    onChange={e => {
                      handleTimeChange(e);
                    }}
                  ></input>
                </Col>
                <Col className="mb-3" md="6" sm="12">
                  <b>Duration: {duration ? duration : 0} days</b> Start date and
                  end date included
                </Col>
              </Row>
              <Row>
                <Col>
                  <b>Duration: {duration ? duration : 0} days</b> Start date and
                  end date included
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}
          <div className="BothBtn d-flex justify-content-around my-2">
            <Button onClick={handleBackStep}>Back</Button>
            <Button onClick={handleNextStep}>Next</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSliderTwentyNine;

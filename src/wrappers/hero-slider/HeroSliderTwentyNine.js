import React, { useEffect, useState, useContext } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import swal from "sweetalert";
import { Stepper, Step } from "react-form-stepper";
import Multiselect from "multiselect-react-dropdown";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Form,
  Label,
} from "reactstrap";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosConfig from "../../axiosConfig";
import Filters from "../../components/pages/quotes/FilterDataList";
import "../../assets/scss/_infPlan.scss";
import UserContext from "../../Context/Context";
const HeroSliderTwentyNine = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maximum, setMaximum] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [country1, setCountry1] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [isData, setIsData] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [duration, setDuration] = useState(null);
  const [formValues, setFormValues] = useState([{ dob: "" }]);
  const user = useContext(UserContext);
  useEffect(() => {
    // console.log(user.myState);
    user.setmyState({ statDate: fromDate, endDate: toDate });
  }, [fromDate, toDate]);

  const handleTimeChange = e => {
    let mainDuration;
    if (fromDate && e.target.value) {
      const startDate = new Date(fromDate);
      setToDate(e.target.value);
      const endDate = new Date(e.target.value);
      // Check if both dates are valid
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        // Calculate the difference in milliseconds
        const timeDifference = endDate.getTime() - startDate.getTime();

        // Convert the difference to days
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        mainDuration = daysDifference + 1;
      } else {
        console.log("Invalid dates. Please select valid dates.");
      }
    }
    setDuration(mainDuration);
  };
  // addition one day open
  const today = new Date();
  today.setDate(today.getDate() + 1); // Addition 1 days from the current date

  const minDate = today.toISOString().split("T")[0];

  const todayplus = new Date();
  todayplus.setDate(todayplus.getDate() + 5); // Addition 1 days from the current date
  const maxDate = todayplus.toISOString().split("T")[0];
  const handleCountry = val => {
    setCountry(val);
  };
  const onSelect1 = (selectedList, selectedItem) => {
    setCountry1(selectedList);
  };
  const onRemove1 = (selectedList, selectedItem) => {
    setCountry1(selectedList);
  };
  const selectRegion = val => {
    setRegion(val);
  };
  // const AddThreeDay = todayplus.toISOString().split("T")[0];
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
    // if (country) {
    //   setActiveStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
    // }
    setActiveStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handleBackStep = () => {
    setActiveStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };
  const stepStyleConfig = {
    activeBgColor: "#4c5684",
    completedBgColor: "#00ee99",
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
    if (fromDate && toDate) {
      setIsData(!isData);
    } else {
      swal("Please Selcet StartDate And EndDate");
    }
  };
  return (
    <div className="slider-area">
      {isData === false ? (
        <div className="slider-active nav-style-1">
          <section
            class="home-hero-section-bg"
            alt="Find the righ  t coverage for your trip"
            id="home-hero-section-background"
          >
            <h2 className="text-center head">Travel Information</h2>
            <p className="text-center ">
              Please provide required information so we can process your quote.
            </p>
            <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
              <Step />
              <Step />
              <Step />
              <Step />
            </Stepper>
            {activeStep === 0 ? (
              <div className="row">
                <div className="col-lg-4 col-xs-12 "></div>
                <div className="col-lg-4 col-xs-12 ">
                  <div>
                    <h4 className="head">What's your country of residence?</h4>
                  </div>
                  <div className="countrySelect">
                    <CountryDropdown
                      value={country}
                      onChange={val => handleCountry(val)}
                    />
                    {/* <RegionDropdown
                      country={country}
                      value={region}
                      onChange={val => selectRegion(val)}
                    /> */}
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12 "></div>
              </div>
            ) : (
              ""
            )}
            {activeStep === 1 ? (
              <div key="1" className="container">
                <div
                  className=" row py-2"
                  style={
                    {
                      // backgroundColor: "#252362",
                      // justifyContent: "center",
                    }
                  }
                >
                  <h1>What is your Date of birth?</h1>
                  <p className="text-center">
                    Provide the following details of the traveler. **In adding a
                    dependent, kindly click “Add another traveler”
                  </p>
                  <div className="col-3"></div>
                  <div className="col-6">
                    {/* <form onSubmit={handleSubmit}> */}
                    <div className="col-md-12 py-2 col-xs-12">
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        // className="EmailInput"
                        onChange={e => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {formValues.map((element, index) => (
                      <>
                        <div className=" col-md-5 py-1 col-xs-12 ">
                          <div>
                            <span
                              style={{
                                fontSize: "19px",
                                fontWeight: "600",
                              }}
                            >
                              Traveler {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-7 py-1 col-xs-12">
                          <input
                            type="date"
                            required
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
                      </>
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
                  </div>
                  <div className="col-3"></div>
                </div>
              </div>
            ) : (
              ""
            )}
            {activeStep === 2 ? (
              <div className="container">
                <div className="row">
                  <h1>Countries or regions travelling to?</h1>
                  <div className="col-4"></div>
                  <div className="col-4">
                    <div className="py-2 mt-1">
                      <Label>Country</Label>
                      <Multiselect
                        required
                        isObject="false"
                        options={Country?.getAllCountries()} // Options to display in the dropdown
                        //   selectedValues={selectedValue} // Preselected value to persist in dropdown
                        onSelect={onSelect1} // Function will trigger on select event
                        onRemove={onRemove1} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                      />
                    </div>
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            ) : (
              ""
            )}
            {activeStep === 3 ? (
              <div className="container">
                <Row>
                  <h2>When are you Travelling?</h2>
                    <h5 className="text-bold-500">StartDate and EndDate</h5>
                  <Col className="mb-3" md="6" sm="12">
                    <div>
                      <label htmlFor="startDate">Start Date:</label>
                      <input
                        required
                        type="date"
                        id="startDate"
                        name="fromDate"
                        min={minDate}
                        onChange={e => setFromDate(e.target.value)}
                      ></input>
                    </div>
                   
                  </Col>
                  <Col> <div>
                      <label htmlFor="endDate">End Date:</label>
                      <input
                        type="date"
                        required
                        id="endDate"
                        name="endDate"
                        min={maxDate}
                        onChange={e => {
                          handleTimeChange(e);
                        }}
                      ></input>
                    </div></Col>
                 
                </Row>
                <Row>
                  <Col>
                    <b>Duration: {duration ? duration : 0} days</b> Start date
                    and end date included
                  </Col>
                </Row>
              </div>
            ) : (
              ""
            )}
            <div className="BothBtn d-flex justify-content-around my-4">
              {activeStep === 0 ? null : (
                <Button className="custombtn2" onClick={handleBackStep}>
                  Back
                </Button>
              )}

              <Button
                className="custombtn2"
                // color="primary"
                disabled={country ? false : true}
                onClick={
                  activeStep === 3
                    ? handleSubmit
                    : country
                    ? handleNextStep
                    : null
                }
              >
                {activeStep === 3 ? "Get Quote" : "Next"}
              </Button>
            </div>
          </section>
        </div>
      ) : (
        <Filters duration={duration} fromDate={fromDate} toDate={toDate} />
      )}
    </div>
  );
};

export default HeroSliderTwentyNine;

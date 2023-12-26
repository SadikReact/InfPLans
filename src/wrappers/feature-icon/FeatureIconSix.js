import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-six.json";
import FeatureIconSixSingle from "../../components/feature-icon/FeatureIconSixSingle.js";
import textbottom from "../../assets/img/textbottom.png";
import travel from "../../assets/imgs/travel-insurance-icon.png";
import greenCard from "../../assets/imgs/green-card-holder-icon.png";
import permanent from "../../assets/imgs/permanent-resident-icon.png";
import citizen from "../../assets/imgs/non-us-citizen-icon.png";
import student from "../../assets/imgs/student-or-scholar-icon.png";

const FeatureIconSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 bg-blue">
            <h2 className="text-white ">What best describes you?</h2>
            <h5 className="text-white subtitle">
              Select the plan that you are looking for
            </h5>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 bg-white bg-black">
                <a href="#">
                  <div className="what-describes-you-icon">
                    <img src={citizen} alt="citizen" />
                    <p className="text-center column-title">Non-US Residents</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 bg-lightgray">
                <a hre="#">
                  <div className="what-describes-you-icon">
                    <img src={greenCard} alt="greenCard" />
                    <p className="text-center column-title">
                      INF Visitor Insurance and Travel Assist Plans
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 bg-lightgray col-white">
                <a href="#">
                  <div className="what-describes-you-icon">
                    <img src={student} alt="student" />
                    {/* <p className="column-title">Non-US Residents</p> */}
                    <p className="text-center column-title">
                      Student or Scholar on J-1 F-1 M-1, Or Q-1 Visa
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 bg-white col-gray">
                <a hre="#">
                  <div className="what-describes-you-icon">
                    <img src={permanent} alt="permanent" />
                    <p className="text-center column-title">
                      Travel Assist Plans
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIconSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FeatureIconSix;

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
const OurWorkSlider = ({ data, sliderClass, sliderdemoClass }) => {
  const [bestAstrology, setBestAstrology] = useState(data);

  // const handleCalltogyta = data => {
  //   console.log(data);

  //   let mobileNo = localStorage.getItem("user_mobile_no");
  //   let userId = JSON.parse(localStorage.getItem("user_id"));

  //   let obj = {
  //     userid: userId,
  //     astroid: data._id,
  //     From: data.mobile, //astrologer no
  //     To: mobileNo, //parseInt(this.state.number) user no
  //   };
  //   axiosConfig
  //     .post(`/user/make_call`, obj)

  //     .then(response => {
  //       console.log(response);
  //       swal("Call Connected", "SuccessFully");
  //     })

  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  //   useEffect(() => {
  //     setBestAstrology(data);
  //   }, [data]);

  return (
    <div
      className={`${
        sliderdemoClass ? sliderdemoClass : " slider-demo"
      } text-center ${sliderClass ? sliderClass : ""} `}
    >
      <div className="image-flip">
        <div className="mainflip flip-0">
          <div className="frontside">
            <div className="SliderDav">
              <img src={data.img} alt="" className="SliderListImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SliderDemo.propTypes = {
//   data: PropTypes.object,
//   sliderClass: PropTypes.string,
// };

export default OurWorkSlider;

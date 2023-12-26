import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
//import testimonialData from "../../data/testimonial/testimonial-one.json";
// import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import textbottom from "../../assets/img/textbottom.png";
import SliderDemo from "./sliderdemo";
import axiosConfig from "../../axiosConfig";
import slide1 from "../../assets/imgs/slides/slide1.png";
import slide2 from "../../assets/imgs/slides/slide2.png";
import slide3 from "../../assets/imgs/slides/slide3.png";
import files from "../../assets/imgs/slides/files.png";

const SliderList = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  sliderdemoClass,
  backgroundImage,
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        direction: "horizontal",
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        direction: "horizontal",
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 2,
        direction: "horizontal",
        spaceBetween: 15,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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

  // const [testimonialData, setTestimonialData] = useState([]);

  // useEffect(() => {
  //   axiosConfig
  //     .get(`/admin/allAstro`)
  //     .then(response => {
  //       if (response.data.status === true) {
  //         setTestimonialData(response.data.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div
      className={` ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center demo ">
            {/* <div className="healthDiv1"> */}
            <img src={slide1} alt="Health" className="test" />
            {/* </div> */}
            <h3 className="firstHead">
              Extend Your <br />
              Plan
            </h3>
          </div>
          <div className="col text-center demo">
            {/* <div className="healthDiv1"> */}
            <img src={slide2} alt="Travel" className="test" />
            {/* </div> */}
            <h3 className="firstHead">Plan Docs & ID Cards</h3>
          </div>
          <div className="col text-center demo">
            {/* <div className="healthDiv1 flipcard-icon"> */}
            <img src={slide3} alt="cover" className="test" />
            {/* </div> */}
            <h3 className="firstHead">Doctor And Hospitals</h3>
          </div>
          <div className="col text-center demo">
            {/* <div className="healthDiv1"> */}
            <img src={files} alt="cover" className="files" />
            {/* </div> */}
            <h3 className="firstHead">File a Claim</h3>
          </div>
          {/* {blogData &&
            blogData.slice(0, 3).map((single, key) => {
              return (
                <BlogFeaturedSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide rtt"
                />
              );
            })} */}

          {/* <div className="col-lg-3 firstMainDiv">
            <div>
              <a href="#" alt="sss">
                <img src={slide1} alt="aaa" />
              </a>
              <p>Extend Your Plan</p>
            </div>
          </div> */}
          {/* <div className="col-lg-3 firstMainDiv">
            <div>
              <a href="#" alt="sss">
                <img src={slide2} alt="aaa" />
                <p>Plan Docs & ID Cards</p>
              </a>
            </div>
          </div> */}
          {/* <div className="col-lg-3 firstMainDiv">
            <div>
              <a href="#" alt="sss">
                <img src={slide2} alt="aaa" />
                <p>Plan Docs & ID Cards</p>
              </a>
            </div>
          </div> */}
          {/* <div className="col-lg-3 firstMainDiv">
            <div>
              <a href="#" alt="sss">
                <img src={slide2} alt="aaa" />
                <p>Plan Docs & ID Cards</p>
              </a>
            </div>
          </div> */}
          {/* <div className="heading">
              <h2>Best Astrologers</h2>
              <img src={textbottom} alt="" />
            </div> */}
          {/* <div className=" nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <SliderDemo
                        data={single}
                        key={key}
                        sliderClass="swiper-slide rtt"
                        sliderdemoClass={sliderdemoClass}
                      />
                    );
                  })}
              </Swiper>
            </div> */}
        </div>
      </div>
    </div>
  );
};

SliderList.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string,
};

export default SliderList;

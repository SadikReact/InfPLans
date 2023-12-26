import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import sldr1 from "../../assets/imgs/MainSlider/ITIJ-logo.png";
import sldr2 from "../../assets/imgs/MainSlider/cn-traveler-logo.png";
import sldr3 from "../../assets/imgs/MainSlider/considerable-logo.png";
import sldr4 from "../../assets/imgs/MainSlider/forbes-logo.png";
import sldr5 from "../../assets/imgs/MainSlider/seattle-logo.png";
import sldr6 from "../../assets/imgs/MainSlider/traveler-logo.png";
import sldr7 from "../../assets/imgs/MainSlider/washington-logo.png";
import SliderDemo from "./sliderdemo";
import axiosConfig from "../../axiosConfig";

const arr = [sldr1, sldr2, sldr3, sldr4, sldr5, sldr6, sldr7];
const MainSlider = ({
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
      disableOnInteraction: true,
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
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
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

  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    // axiosConfig
    //   .get(`/admin/allAstro`)
    //   .then(response => {
    //     if (response.data.status === true) {
    //       setTestimonialData(response.data.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    if (arr.length >= 0) setTestimonialData(arr);
  }, []);

  return (
    <div
      className={` ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <section id="sliderSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12  ml-auto mr-auto">
              <div className="heading">
                <h2 className="text-white">Featured In</h2>
              </div>
              <div className=" nav-style-1 nav-testi-style">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

MainSlider.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string,
};

export default MainSlider;

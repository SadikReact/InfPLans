import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Swiper from "react-id-swiper";
import textbottom from "../../assets/imgs/slides/unique-plans-bg.png";
import "../../assets/scss/workflow.css";
import sldr1 from "../../assets/imgs/MainSlider/ITIJ-logo.png";
import sldr2 from "../../assets/imgs/MainSlider/cn-traveler-logo.png";
import sldr3 from "../../assets/imgs/MainSlider/considerable-logo.png";
import OurWorkSlider from "./OurWorkSlider";
const list = [
  {
    img: sldr1,
    username: "abc",
    para: "this is first para",
  },
  {
    img: sldr2,
    username: "asss",
    para: "this is para graph",
  },
  {
    img: sldr3,
    username: "sda",
    para: "this is para graph 3rd",
  },
];
console.log(list);
function OurWorkFlow({ data, sliderClass, sliderdemoClass }) {
  const params = {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      768: {
        slidesPerView: 1,
        direction: "horizontal",
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 1,
        direction: "horizontal",
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1,
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
  const [scrollList, setScrollList] = useState([]);
  useEffect(() => {
    if (list.length >= 0) setScrollList(list);
  }, []);
  return (
    <section className=" " id="home-testimonial-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 text-right left-content myPlanImg"></div>
          <div className="col-lg-5 ManageImage">
            <h3 style={{ color: "#fff" }} className="my-2">
              Unique Plans For Your Travel
            </h3>
            <ul className="travelList">
              <li className="py-2 list">
                Coverage to non-US residents traveling to the US, Canada or
                Mexico
              </li>
              <li className="py-2 list">
                Plans may have pre-existing conditions coverage*
              </li>
              <li className="py-2 list">
                Emergency Medical Evacuation Benefits
              </li>
              <li className="py-2 list">
                Accidental Death and Dismemberment Benefits
              </li>
              <li className="py-2 list">
                COVID-19 treated as any other sickness
              </li>
            </ul>
            <button className="btn btn-main my-4">Get A Quote</button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="members-producers-column text-center">
              <h3 className="text-primary">Insureds</h3>
              <p>
                Access the Insured Portal to Download Plan ID cards, File
                Claims, and access other features
              </p>
              <a href="#">Click Here To View Member Portal </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="members-producers-column text-center">
              <h3 className="text-primary">Producers</h3>
              <p>
                Manage your producer profile, generate reports, and access other
                tools to build your business with INF
              </p>
              <a href="#">Click Here To View Member Portal </a>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 left-content">
            {/* <div className=" "> */}
            <h2 className="">What Our Clients Have To Say</h2>
            <p className="para-content">
              We pride ourselves on offering quality products and top notch
              service. See real reviews from clients.
            </p>
            {/* </div> */}
          </div>
          <div
            className="col-lg-8 ManageImage"
            style={{ borderRadius: "16px", height: "500px" }}
          >
            <div className="row ">
              <div className="col-lg-12 ">
                <Swiper {...params}>
                  {scrollList &&
                    scrollList.map((single, key) => {
                      return (
                        <OurWorkSlider
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
      </div>
    </section>
  );
}

export default OurWorkFlow;

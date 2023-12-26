import React from "react";
import { useHistory } from "react-router-dom";
import LayoutOne from "../../../layouts/LayoutOne";
import "../../../assets/scss/easySelect.scss";
export default function GetQuote() {
  let history = useHistory();
  const handleSubmit = () => {
    console.log("object");
    history.push("/inf-easy-select");
  };
  return (
    <LayoutOne headerTop="visible">
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
                      GET A VISITORS INSURANCE QUOTE
                    </h1>
                    <p className=" text-center">
                      INF has provided insurance options for millions of
                      travelers since 1988. Built during
                      <br /> the early-ages of the internet, INF has always been
                      a technology first company.
                    </p>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                      <button
                        className="custombtn2 text-white"
                        onClick={() => handleSubmit()}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="get-quote">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h2 className="text-blue text-center">
                    Why choose INF Insurance?
                  </h2>
                  <p className="text-black text-center para">
                    INF has provided insurance options for millions of travelers
                    since 1988. Built during the early-ages of the internet, INF
                    has always been a technology first company. INF was the
                    first company to allow insurance applications Online and
                    over fax, and the first company to incorporate technology
                    into their claims process. INF uses technology to bring
                    better products, services, and customer experience to
                    travelers across the globe.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutOne>
  );
}

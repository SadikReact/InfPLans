import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import logo from "../../assets/imgs/footer.png";
import axiosConfig from "../../axiosConfig";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  // const [categoryList, setCategoryList] = useState([]);

  // const [pages, setPages] = useState([]);

  // useEffect(() => {
  //   getPages();
  // }, []);

  // const getPages = () => {
  //   axiosConfig
  //     .get(`/admin/getPages`)
  //     .then(res => {
  //       // console.log(res.data.data);
  //       setPages(res.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   axiosConfig
  //     .get(`/admin/getallCategory`)
  //     .then(response => {
  //       setCategoryList(response.data.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  // useEffect(() => {
  //   setTop(100);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            <FooterCopyright footerLogo={logo} spaceBottomClass="mb-30" />
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Navigate Our Site</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      {/* {categoryList?.map(item => {
                        return (
                          <li className="" key={item._id}>
                            <Link to={process.env.PUBLIC_URL + "/zodicPage"}>
                              {item.title}
                            </Link>
                          </li>
                        );
                      })} */}
                      <li className="">
                        <Link>Home</Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/inf-plan"}>
                          Plans
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/apply"}>
                          Apply
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/extend"}>
                          Extend
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu"></ul>
                  </li>
                </ul>
              </div>
              <div className="footer-title">
                <h3>Our Plans</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/elite-network"}>
                          Elite Network
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/lalKitab"}
                        >
                          Elite Network Plus
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/lalkitabPlanets"}
                        >
                          Premier
                        </Link>
                      </li>

                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/bookEvent"}
                        >
                          Premier Plus
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/bookEvent"}
                        >
                          Standard
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/bookEvent"}
                        >
                          Safe Traveler USA
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/bookEvent"}
                        >
                          HOP Assist
                        </Link>
                      </li>
                      <li className="">
                        <Link
                        // to={process.env.PUBLIC_URL + "/bookEvent"}
                        >
                          BMI Assist
                        </Link>
                      </li>
                      {/* {pages[0]?.other === true ? (
                        <>
                          <div className="footer-title mt-3">
                            <h3>Others</h3>
                          </div>
                        </>
                      ) : null} */}

                      {/* <div className="footer-list">
                        <ul>
                          <li>
                            <ul className="submenu">
                              {pages.length > 0 ? (
                                <>
                                  {pages?.map(ele => {
                                    if (ele?.status === true) {
                                      return (
                                        <li key={ele?._id} className="">
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL +
                                              `/otherpage/${ele?._id}`
                                            }
                                          >
                                            {ele?.pageName}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  })}
                                </>
                              ) : null}
                            </ul>
                          </li>
                        </ul>
                      </div> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Panchanag</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/basicPanchang"}>
                          Basic Panchanag
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/todayPanchang"}>
                          Today Panchanag
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/shubhMuhurat"}>
                          Shubh Muhurat
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/todayFestival"}>
                          Today Festival
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="footer-title">
                <h3>Astrologer</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                 
                    <ul className="submenu">
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/pages/login"}>
                          Astrologer Login
                        </Link>
                      </li>
                      <li className="">
                        <Link to={process.env.PUBLIC_URL + "/astrologersignup"}>
                          Astrologer Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          > */}
          {/* <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                <h3>Useful Links</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/ourservice"}>
                        Our Services
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/freekundli"}>
                        Free Kundli
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/kundaliform"}>
                        Match Making
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/aboutdetail"}>
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}></Link>
                    </li>
                    <Link to={process.env.PUBLIC_URL + "/TermsOfUse"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacyPolicy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/Faq"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-3 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;

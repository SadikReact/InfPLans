import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import internationalHealth from "../../assets/imgs/international-health-protection-icon.png";
import travel from "../../assets/imgs/travel-insurance-icon.png";
import cover from "../../assets/imgs/covers-preexisting-conditions-icon.png";
// import SectionTitle from "../../components/section-title/SectionTitle";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  // const [blogData, setBlogData] = useState([]);

  // useEffect(() => {
  //   axiosConfig
  //     .get(`/user/active_blog_category`)
  //     .then(response => {
  //       if (response.data.status === true) {
  //         setBlogData(response.data.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container-fluid">
        <div className="heading mt-70">
          {/* <h2 id="blogs">Blogs </h2> */}
          {/* <img src={textbottom} alt="" /> */}
        </div>
        <div className="row">
          <div className="col text-center  firstMainDiv">
            <div className="healthDiv">
              <img src={internationalHealth} alt="Health" />
            </div>
            <h3 className="firstHead">International Accident & Sickness</h3>
            <div>
              We provide international visitor accident & sickness insurance for
              visiting parents, relatives, students, and temporary workers
              traveling outside of their home country to the United States,
              Canada or Mexico.
            </div>
          </div>
          <div className="col text-center firstMainDiv">
            <div className="healthDiv">
              <img src={travel} alt="Travel" />
            </div>
            <h3 className="firstHead">International Travel Assistance</h3>
            <div>
              You are able to access travel assistance benefits, find coverage
              options for pre-existing medical conditions, and help ease the
              possible financial burden due to unforeseen medical expenses
              during your stay in the United States, Canada, Mexico, Doha, Costa
              Rica, or any country Worldwide.
            </div>
          </div>
          <div className="col text-center firstMainDiv">
            <div className="healthDiv">
              <img src={cover} alt="cover" />
            </div>
            <h3 className="firstHead">We may cover Pre-Existing Conditions</h3>
            <div>
              Our A-rated underwriting partners provide the strong financial
              support needed from an insurance company to continue offering some
              International Visitor Accident and Sickness plans with
              pre-existing conditions coverage.
            </div>
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
        </div>
      </div>
    </div>
  );
};

// BlogFeatured.propTypes = {
//   spaceBottomClass: PropTypes.string,
//   spaceTopClass: PropTypes.string,
// };

export default BlogFeatured;

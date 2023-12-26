import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { Button } from "reactstrap";
import axiosConfig from "../../axiosConfig";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [category, setCategoryList] = useState([]);

  const getCategory = () => {
    axiosConfig
      .get(`/user/infPlanList`)
      .then(response => {
        console.log(response?.data);
        setCategoryList(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          </li>

          <li>
            <Link to="#">Quote</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/visitors-quote"}>
                  Get a Quote
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/inf-easy-select"}>
                  Premiums
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">Apply</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>
                  INF Plans
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  BMI Travel Assist
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  HOP Travel Assist
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Diplomet America
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Diplomet International
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/liveAstrologer">Extend</Link>
          </li>
          <li>
            <Link to="#">Plans</Link>
            <ul className="submenu">
              {category &&
                category?.map((ele, i) => (
                  <li key={i} className="">
                    <Link
                      to={process.env.PUBLIC_URL + `/elite-network/${ele._id}`}
                    >
                      {ele?.planName}
                    </Link>
                  </li>
                ))}
              {/* <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  INF Elite Plus
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  INF Safe Traveler USA
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  INF Premier
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  INF Premier Plus
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  INF Standard
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  HOP Assist
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  HOP Mindoro Assist
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  BMI Plan
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  Diplomat America
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  Dental Discount Card
                </Link>
              </li> */}
            </ul>
          </li>

          <li>
            <Link to="#">Support</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>Claims</Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Plan ID Card
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Request A Quote
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Provider Search
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  TeleMedicine
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Dental Discount Program
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">My Account</Link>
            <ul className="submenu">
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>
                  Members
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Button className="btn btn-primary">Show Plans</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);

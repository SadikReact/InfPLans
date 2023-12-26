import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { Button } from "reactstrap";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
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
              <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>Members</Link>
            </li>
          </ul>
        </li>
        <li>
          <Button className="btn btn-primary">Show Plans</Button>
        </li>
        {/* <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {strings["shop_layout"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {strings["shop_grid_standard"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {strings["shop_grid_filter"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {strings["shop_grid_two_column"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {strings["shop_grid_no_sidebar"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                      {strings["shop_grid_full_width"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    >
                      {strings["shop_grid_right_sidebar"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                      {strings["shop_list_standard"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                      {strings["shop_list_full_width"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                      {strings["shop_list_two_column"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_details"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_tab_bottom"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                      {strings["product_tab_left"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                      {strings["product_tab_right"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>
                      {strings["product_sticky"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>
                      {strings["product_slider"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/product-fixed-image/1"}
                    >
                      {strings["product_fixed_image"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/8"}>
                      {strings["product_simple"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {strings["product_variation"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/9"}>
                      {strings["product_affiliate"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}

        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
        </li>

        <li>
          <Link to="/kundaliform">Kundli Matching</Link>
        </li>

        <li>
          <Link to="/allastrochatlist">Chat Astrologer</Link>
        </li>

        <li>
          <Link to="/allastrologerlist">Talk Astrologer</Link>
        </li>

        <li>
          <Link>Horoscopes</Link>
          <ul className="submenu">
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Horoscope 2022</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Today's Horoscope</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Weekly Horoscope</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Monthly Horoscope</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Yearly Horoscope</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Daily Horoscope</Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>
                Tomorrow's Horoscope
              </Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>
                Yesterday's Horoscope
              </Link>
            </li>
            <li className="">
              <Link to={process.env.PUBLIC_URL + "/"}>Chinese Horoscope</Link>
            </li>
          </ul>
        </li>

        <li className="">
          <Link to={process.env.PUBLIC_URL + "/astromallList"}>Astromall</Link>
        </li> */}

        {/* <li>
              <Link to={process.env.PUBLIC_URL + "/aboutdetail"}>
                {strings["about_us"]}
              </Link>
            </li> */}
        {/* {sidebarMenu ? (
                <span>
                   <i className="fa fa-angle-right"></i> 
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )} */}

        {/* <ul className="mega-menu mega-menu-padding">
              <li>
                <ul> */}
        {/* <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["home_group_one"]}
                    </Link>
                  </li> */}
        {/* <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                      {strings["home_fashion"]}
                    </Link>
                  </li> */}
        {/* <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-two"}>
                      {strings["home_fashion_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-three"}>
                      {strings["home_fashion_three"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-four"}>
                      {strings["home_fashion_four"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-five"}>
                      {strings["home_fashion_five"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-six"}>
                      {strings["home_fashion_six"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-seven"}>
                      {strings["home_fashion_seven"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-fashion-eight"}>
                      {strings["home_fashion_eight"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-kids-fashion"}>
                      {strings["home_kids_fashion"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-cosmetics"}>
                      {strings["home_cosmetics"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture"}>
                      {strings["home_furniture"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-two"}>
                      {strings["home_furniture_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-three"}>
                      {strings["home_furniture_three"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-four"}>
                      {strings["home_furniture_four"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["home_group_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-five"}>
                      {strings["home_furniture_five"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-six"}>
                      {strings["home_furniture_six"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-furniture-seven"}>
                      {strings["home_furniture_seven"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-electronics"}>
                      {strings["home_electronics"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-electronics-two"}>
                      {strings["home_electronics_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/home-electronics-three"}
                    >
                      {strings["home_electronics_three"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-book-store"}>
                      {strings["home_book_store"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-book-store-two"}>
                      {strings["home_book_store_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-plants"}>
                      {strings["home_plants"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-flower-shop"}>
                      {strings["home_flower_shop"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-flower-shop-two"}>
                      {strings["home_flower_shop_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-organic-food"}>
                      {strings["home_organic_food"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/home-organic-food-two"}
                    >
                      {strings["home_organic_food_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-onepage-scroll"}>
                      {strings["home_onepage_scroll"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {strings["home_group_three"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-grid-banner"}>
                      {strings["home_grid_banner"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-auto-parts"}>
                      {strings["home_auto_parts"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-cake-shop"}>
                      {strings["home_cake_shop"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-handmade"}>
                      {strings["home_handmade"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-pet-food"}>
                      {strings["home_pet_food"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/home-medical-equipment"}
                    >
                      {strings["home_medical_equipment"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-christmas"}>
                      {strings["home_christmas"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-black-friday"}>
                      {strings["home_black_friday"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/home-black-friday-two"}
                    >
                      {strings["home_black_friday_two"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/home-valentines-day"}>
                      {strings["home_valentines_day"]}
                    </Link>
                  </li> */}
        {/* </ul>
              </li>
            </ul>*/}

        {/* <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {strings["collection"]}
            </Link>
          </li> */}

        {/* <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["pages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {strings["cart"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {strings["checkout"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {strings["compare"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {strings["contact_us"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {strings["404_page"]}
                </Link>
              </li>
            </ul>
          </li> */}
        {/* <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {strings["blog_no_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </Link>
              </li>
            </ul>
          </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);

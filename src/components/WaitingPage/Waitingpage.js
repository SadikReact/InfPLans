import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";

import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axiosConfig from "../../axiosConfig";
import { Button, Col, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Waitingpage = ({ location, args }) => {
  const { pathname } = location;
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [Refund, setRefund] = useState({});

  const toggle = () => setModal(!modal);
  const fetchOrder = async () => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    const { data } = await axiosConfig.get(`/user/myOrders/${userid}`);
    const order = data.data;
    setOrder(order);
    console.log(order);
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Waiting page
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <section>
          <div className="d-flex justify-content-center align-item-center">
            <h3>Wait Till Astrologer Accept Your Request...</h3>
          </div>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

Waitingpage.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Waitingpage);

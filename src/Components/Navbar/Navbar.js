import React from "react";
import { NavLink } from "react-router-dom";
import basketLogo from "../../icons/basket.png";
import store from "../../redux/store";
import "./Navbar.css";

const Navbar = () => {
  let classname = "clicked";

  return (
    <div className="navbar">
      <div className="head-nav">
        <div className="links">
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/products"
          >
            Products
          </NavLink>
          <a
            className="link"
            href="https://www.google.com/maps/place/251+Mustafa+Kamal+Atat%C3%BCrk,+G%C9%99nc%C9%99,+Az%C9%99rbaycan/@40.6812556,46.3574035,17z/data=!3m1!4b1!4m5!3m4!1s0x403f510d7845b7bd:0xc3c8cd1ae2673948!8m2!3d40.6812516!4d46.3595923"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locate Us
          </a>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
          <NavLink className="basket-button-nav" to="/basket">
            <button className="basket-button">
              <div className="count-div">{store.getState().basket.length}</div>
              <img
                className="basket"
                src={basketLogo}
                alt="Basket"
                title="Basket"
              />
            </button>
          </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

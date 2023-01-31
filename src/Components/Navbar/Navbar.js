import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
  let classname = "clicked";
  const basket = useSelector((state) => state.basket);

  return (
    <div className="navbar">
      <div className="head-nav">
        <div className="links">
          <NavLink
            name="nav"
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            name="nav"
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            name="nav"
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/products"
          >
            Products
          </NavLink>
          <a
            name="nav"
            className="link"
            href="https://www.google.com/maps/place/251+Mustafa+Kamal+Atat%C3%BCrk,+G%C9%99nc%C9%99,+Az%C9%99rbaycan/@40.6812556,46.3574035,17z/data=!3m1!4b1!4m5!3m4!1s0x403f510d7845b7bd:0xc3c8cd1ae2673948!8m2!3d40.6812516!4d46.3595923"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locate Us
          </a>
          <NavLink
            name="nav"
            className={({ isActive }) => (isActive ? classname : "link")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
        <NavLink className="basket-button-nav" to="/basket">
          <button className="basket-button">
            <div className="count-div">{basket.length}</div>
            <SlBasket className="basket" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

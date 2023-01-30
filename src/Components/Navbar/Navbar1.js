import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
  let classname = "clicked";
  const basket = useSelector((state) => state.basket);
  const [menuStyle, setMenuStyle] = useState(false);

  const changeDisplay = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "head-nav") {
      x.className += " responsive";
    } else {
      x.className = "head-nav";
    }
  };

  return (
    <div className="navbar" id="myTopnav">
      <div className="head-nav">
        <div className="links">
          <button className="icon" onClick={changeDisplay}>
            <FiMenu />
          </button>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            style={{ display: menuStyle ? "block" : "none" }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            style={{ display: menuStyle ? "block" : "none" }}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            style={{ display: menuStyle ? "block" : "none" }}
            to="/products"
          >
            Products
          </NavLink>
          <a
            style={{ display: menuStyle ? "block" : "none" }}
            className="link"
            href="https://www.google.com/maps/place/251+Mustafa+Kamal+Atat%C3%BCrk,+G%C9%99nc%C9%99,+Az%C9%99rbaycan/@40.6812556,46.3574035,17z/data=!3m1!4b1!4m5!3m4!1s0x403f510d7845b7bd:0xc3c8cd1ae2673948!8m2!3d40.6812516!4d46.3595923"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locate Us
          </a>
          <NavLink
            className={({ isActive }) => (isActive ? classname : "link")}
            style={{ display: menuStyle ? "block" : "none" }}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
        <NavLink className="link" to="/basket">
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

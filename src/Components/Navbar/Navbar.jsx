import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { TbDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle navBar

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navBar

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Hotel & Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home and
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <FaWindowClose className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import "./footer.css";
import { GrSend } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiTripadvisor } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import video2 from "../../Assets/video (2).mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Enjoy Your Stay</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />

            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <GrSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Book any hotel, receive the best treatmen.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <FaTwitter className="icon" />
              <IoLogoYoutube className="icon" />
              <BsInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Oceania
              </li>

              <li className="footerList flex">
                <HiOutlineChevronDoubleRight className="icon" />
                Payment
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small></small>
            <small>Hussain Jabbar</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

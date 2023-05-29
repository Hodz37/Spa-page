import React, { useEffect } from "react";
import "./main.css";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import img from "../../Assets/img (1).jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";
import img7 from "../../Assets/img (7).jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Brazil",
    location: "Rio de Janeiro",
    grade: "RELAX",
    fees: "£500",
    description: "Welcome To Brazil...",
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: "Zimbabwe",
    location: "Mutare",
    grade: "RELAX",
    fees: "£500",
    description: "Welcome to Zimbabwe...",
  },

  {
    id: 3,
    imgSrc: img3,
    desTitle: "Iran",
    location: "Tehran",
    grade: "RELAX",
    fees: "£445,000",
    description: "Welcome to Iran...",
  },

  {
    id: 4,
    imgSrc: img4,
    desTitle: "England",
    location: "London",
    grade: "RELAX",
    fees: "£1800",
    description: "Welcome to England...",
  },

  {
    id: 5,
    imgSrc: img5,
    desTitle: "Thailand",
    location: "Bangkok",
    grade: "RELAX",
    fees: "£30",
    description: "Welcome to Thailand...",
  },

  {
    id: 6,
    imgSrc: img6,
    desTitle: "Spain",
    location: "Barcelona",
    grade: "RELAX",
    fees: "£200",
    description: "Welcome to Spain...",
  },

  {
    id: 7,
    imgSrc: img7,
    desTitle: "France",
    location: "Paris",
    grade: "RELAX",
    fees: "£90",
    description: "Welcome to France...",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <div className="content">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        {""}
                        <span>
                          {grade}

                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                  </div>

                  <div className="button-container">
                    <button className="btn flex">
                      DETAILS <FaClipboardList className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

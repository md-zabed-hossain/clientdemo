import React from "react";
import { Footer } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
import "./myst.css";
import { Link } from "react-router-dom";
import myst1 from "../../assets/myst1.png";
import myst2 from "../../assets/myst2.png";
import myst3 from "../../assets/myst3.png";
import myst4 from "../../assets/myst4.png";
import myst5 from "../../assets/myst5.png";
import myst6 from "../../assets/myst6.png";

const Myst = () => {
  return (
    <>
      <div className="myst">
        <Link to={"/gallery"}>
          <BsArrowLeft />
          Go Back
        </Link>
       
        <div>
          <p>
            You peek into the myst. you begin to feel something strange. Visions
            Flood your mind. You see Asia, you see people. you see life.
          </p>
        </div>
        <div class="parent m-20 p-10">
          <div class="div1">
            <img src={myst1} alt="" />
          </div>
          <div class="div2">
            <img src={myst2} alt="" />
          </div>
          <div class="div3">
            <img src={myst3} alt="" />
          </div>
          <div class="div4">
            <img src={myst4} alt="" />
          </div>
          <div class="div5">
            <img src={myst5} alt="" />
          </div>
        </div>
        <div class="parent m-20 p-10">
          <div class="div1">
            <img src={myst6} alt="" />
          </div>
          <div class="div2">
            <img src={myst2} alt="" />
          </div>
          <div class="div3">
            <img src={myst3} alt="" />
          </div>
          <div class="div4">
            <img src={myst4} alt="" />
          </div>
          <div class="div5">
            <img src={myst5} alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Myst;

import React, { useEffect } from "react";

import { BsArrowLeft } from "react-icons/bs";
import "./myst.css";
import { Link } from "react-router-dom";
import myst1 from "../../assets/myst1.png";
import myst2 from "../../assets/myst2.png";
import myst3 from "../../assets/myst3.png";
import myst4 from "../../assets/myst4.png";
import myst5 from "../../assets/myst5.png";
import myst6 from "../../assets/myst6.png";
import mystSmoke1 from "../../assets/mystSmoke1.png";
import mystSmoke2 from "../../assets/mystSmoke2.png";
import mystSmoke3 from "../../assets/mystSmoke3.png";

import { useFilterContext } from "../../components/filter/filter_context";

const Myst = () => {
  const { handlePage } = useFilterContext();
  useEffect(() => {
    handlePage("myst");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="myst">
      <img src={mystSmoke1} alt='' className="myst__smoke-img1"/>
      <img src={mystSmoke2} alt='' className="myst__smoke-img2"/>
      <img src={mystSmoke3} alt='' className="myst__smoke-img3"/>
        <div className="myst__main  flex flex-col justify-center items-center  relative p-30 m-20">
          <Link
            to={"/gallery"}
            className="flex justify-center items-center gap-2 myst__btn "
          >
            <BsArrowLeft className="w-6 h-6" />{" "}
            <span className="font-SpaceMono font-[700] ">Go Back</span>
          </Link>

          <div className="flex justify-center items-center w-[70%] mt-10 p-8">
            <h2
              className=" text-[4vw] font-anton font-[400] tracking-[-0.02em] leading-[100%] text-white
            text-start uppercase"
            >
              You peek into the myst. you begin to feel something strange.
              Visions Flood your mind. You see Asia, you see people. you see
              life.
            </h2>
          </div>
          <div className="parent mx-20 p-10 ">
            <div className="div1">
              <img src={myst1} alt="" className="myst__img" />
              <div className="myst__overlay1 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div2">
              <img src={myst2} alt="" className="myst__img" />
                 <div className="myst__overlay2 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div3">
              <img src={myst3} alt="" className="myst__img" />
                 <div className="myst__overlay3 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div4">
              <img src={myst4} alt="" className="myst__img" />
                 <div className="myst__overlay4 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div5">
              <img src={myst5} alt="" className="myst__img" />
                 <div className="myst__overlay5 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
          </div>
          <div className="parent mx-20 px-10">
            <div className="div1">
              <img src={myst6} alt="" className="myst__img" />
                 <div className="myst__overlay1 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div2">
              <img src={myst2} alt="" className="myst__img" />
                 <div className="myst__overlay2 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div3">
              <img src={myst3} alt="" className="myst__img" />
                 <div className="myst__overlay3 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div4">
              <img src={myst4} alt="" className="myst__img" />
                 <div className="myst__overlay4 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
            <div className="div5">
              <img src={myst5} alt="" className="myst__img" />
                 <div className="myst__overlay5 flex flex-col justify-center items-center">
                <span className=" font-SpaceMono font-[400] text-white text-start uppercase"
                >
                  sea
                </span>
                <h5 className=" text-[3vw] font-anton font-[400]  text-white
            text-start uppercase"
                >
                  NO.0001
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myst;

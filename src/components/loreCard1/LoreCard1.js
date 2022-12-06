import React from "react";
import { Link } from "react-router-dom";
import "./lorecard1.css";
import { LoreCardData1 } from "./loreCardData1";

const LoreCard1 = () => {
  return (
    <div className="flex flex-col  lore__card1 justify-between items-center gap-10 px-10 py-[150px]">
      <div className="lore__card1-top flex justify-between items-center gap-[50px] mt-20">
        <h3
          className="lore__card1-top-title w-[50%] text-[4vw] font-anton font-[400] tracking-[-0.02em] text-white
            text-start uppercase"
        >
          Follow the Signs.
        </h3>
        <Link to={"/"} className="lore__card1-btn">
          View Roadmap
        </Link>
      </div>
      <div className="lore__card1-body flex justify-between items-center gap-6">
        {LoreCardData1.map((item, index) => (
          <div
            key={index}
            className="card1 flex flex-col justify-center items-center"
          >
            <img src={item.img} alt="" className="lore__card1-img" />
            <h4
              className="card1__lore-title w-full text-[2.5vw] font-anton font-[400] tracking-[-0.02em] leading-[100%]  text-white
            text-center uppercase"
            >
              {item.title}
            </h4>
            <p className="text-center card1__lore-text font-SpaceMono">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoreCard1;

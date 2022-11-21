import React from "react";
import "./lorecard2.css";
import { LoreCardData2 } from "./loreCardData2";

const LoreCard2 = () => {
  return (
    <div className="flex flex-col gap-5 p-5 lore__card2 justify-center items-center">
      <div className="lore__card2-top mb-2 ">
        <div className="flex flex-col justify-start items-start lore__card2-top_head ">
          <h2>Crafted from Culture, created in collaboration.</h2>
          <p>
            Meet the Village Elders, a group of crypto, marketing and design
            professionals who are leading the charge in building Project: SEA.
            Pro tip: Whatever you do, don't mention chocolate ice-cream to them.
          </p>
        </div>
      </div>
      <div className="lore__card2-body flex gap-2 mt-5 justify-center items-center">
        {LoreCardData2.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center  gap-5 items-center"
          >
            <img src={item.img} alt="" className="lore__card2-img" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoreCard2;

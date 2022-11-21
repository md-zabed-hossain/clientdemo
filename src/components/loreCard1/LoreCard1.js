import React from "react";
import "./lorecard1.css";
import { LoreCardData1 } from "./loreCardData1";

const LoreCard1 = () => {
  return (
    <div className="flex flex-col gap-1 lore__card1 justify-center items-center">
      <div className="lore__card1-top ">
        <div className="flex justify-around items-center lore__card1-top_head mt-20">
            <h3>Follow the Signs.</h3>
            <a href="/">View Roadmap</a>
        </div>
      </div>
      <div className="lore__card1-body flex  justify-center items-center">
      
        {LoreCardData1.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <img src={item.img} alt="" className="lore__card1-img" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoreCard1;

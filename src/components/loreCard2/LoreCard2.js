import React from "react";
import "./lorecard2.css";
import { LoreCardData2 } from "./loreCardData2";

const LoreCard2 = () => {
  return (
    <div className="flex flex-col lore__card2 justify-between items-center gap-10 px-10 py-[50px] pb-[150px]">
      <div className="lore__card2-top flex flex-col justify-start items-start gap-5">     
          <h2 className="lore__card2-top-title  text-[4vw] font-anton font-[400] tracking-[-0.02em] leading-[100%] text-white
            text-start uppercase">Crafted from Culture, created in collaboration.</h2>
          <p className="text-start card2__lore-text">
            Meet the Village Elders, a group of crypto, marketing and design
            professionals who are leading the charge in building Project: SEA.
            Pro tip: Whatever you do, don't mention chocolate ice-cream to them.
          </p>
        
      </div>
      <div className="lore__card2-body flex gap-10 mt-5 p-10 justify-center items-center">
        {LoreCardData2.map((item, index) => (
          <div
            key={index}
            className="card2 flex flex-col justify-items-stretch items-start"
          >
            <img src={item.img} alt="" className="lore__card2-img mb-3" />
            <h4 className="lore__card2-body-title  text-[2vw] font-anton font-[400] tracking-[-0.02em] text-white
            text-start uppercase my-2 py-2">{item.title}</h4>
            <span className="my-2 text-start card2__lore-text"><span className='text-[#FF4143] mr-1' >/ </span>  {item.tag}</span>
            <p className="text-start card2__lore-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoreCard2;

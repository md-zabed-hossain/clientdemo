import React from "react";
import "./wall.css";
import home3 from "../../assets/home3.png";
import lore2 from "../../assets/lore2.jpg";
import { Link } from "react-router-dom";
import useWindowSize from "../../useWindowSize";

const wallCardData = [
  {
    title: "Now until the future",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non convallis sodal.",
  },
  {
    title: "Now until the future",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non convallis sodal.",
  },
  {
    title: "Now until the future",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non convallis sodal.",
  },
];

const wallCard = wallCardData.map((item, index) => (
  <div key={index} className="wall__card flex flex-col justify-center items-center m-6 ">
    <h3 className="wall__card-title w-full text-[4vw] font-anton font-[400] leading-[100%]  text-white
            text-start uppercase">{item.title}</h3>
    <p className="wall__card-text w-full text-[14px] font-SpaceMono font-[400]  text-white
            text-start ">{item.desc}</p>
  </div>
));

const WallSec = (page) => {
  const windowSize = useWindowSize();
  let size = windowSize.width;
  return (
    <>
      <div className="wall">
        {page.page === "lore" ? (
          <>
          <img src={lore2} alt="" className="wall__img wall__lore-img" />
          <h3 className="wall__lore-title w-full text-[4vw] font-anton font-[400] leading-[100%]  text-white
            text-center uppercase">Something is brewing. Embrace the Myst,<br/> uncover your inner potential. ascend.</h3>
          </>
        ) : (
          <>
        <img src={home3} alt="" className="wall__img" />
        <>
            <div className="wall__text-top1 absolute">
              {wallCard}
            </div>
            {size >= 768 && <div className="wall__text-top2 absolute">
              {wallCard}
            </div>}
            
          </>
          <div className="wall__footer-heading  flex flex-col justify-center items-center  bg-black p-11  w-full h-auto text-white">
          <h2 className="w-full text-[8vw] font-anton font-[400] mt-6 text-white
            text-center uppercase">Inhale the MYst.</h2>
          <Link to={"/myst"} className="wall__footer-btn">Discover</Link>
          
        </div>
        </>
        )}     
      </div>      
    </>
  );
};

export default WallSec;


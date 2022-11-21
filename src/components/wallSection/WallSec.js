import React from "react";
import "./wall.css";
import home3 from "../../assets/home3.png";
import lore2 from "../../assets/lore2.jpg";
import { Link } from "react-router-dom";

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
  <div key={index} className="wall__card flex-col">
    <h2>{item.title}</h2>
    <p>{item.desc}</p>
  </div>
));

const WallSec = (page) => {
  return (
    <>
      <div className="wall">
        {page.page === "lore" ? (
          <img src={lore2} alt="" className="img" />
        ) : (
          <img src={home3} alt="" className="img" />
        )}
        {page.page === "lore" ? (
          undefined
        ) : (
          <div className="flex  flex-col">
            <div className="flex wall__text-top1 flex-col card1 mr-5">
              {wallCard}
            </div>
            <div className="flex wall__text-top2 flex-col card2">
              {wallCard}
            </div>
          </div>
        )}
      </div>

      {page.page === "lore" ? (
        <h3>Something is brewing. Embrace the Myst, uncover your inner potential. ascend.</h3>
      ) : <div className="wall__footer-heading flex flex-col">
          <h2 className=" mb-10">Inhale the MYst.</h2>
          <Link to={"/myst"}>Discover</Link>
          
        </div>}
    </>
  );
};

export default WallSec;


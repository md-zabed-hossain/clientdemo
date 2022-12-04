import React from "react";
import Marquee from "react-fast-marquee";
import "./explore.css";
import home2 from "../../assets/home2.png";
import lore1 from "../../assets/lore1.jpg";

import { images } from "../../assets";
import { Link } from "react-router-dom";

const expCardData = [
  {
    id: "0001",
    image: images.N0001,
  },
  {
    id: "0002",
    image: images.N0002,
  },
  {
    id: "0003",
    image: images.N0003,
  },
  {
    id: "0004",
    image: images.N0004,
  },
  {
    id: "0001",
    image: images.N0001,
  },
  {
    id: "0002",
    image: images.N0002,
  },
  {
    id: "0003",
    image: images.N0003,
  },
  {
    id: "0004",
    image: images.N0004,
  },
  {
    id: "0001",
    image: images.N0001,
  },
  {
    id: "0002",
    image: images.N0002,
  },
  {
    id: "0003",
    image: images.N0003,
  },
  {
    id: "0004",
    image: images.N0004,
  },
];

const ExploreSec = (page) => {
  return (
    <div className="explore">
      {page.page === "lore" ? (
        <img src={lore1} alt="" className="img" />
      ) : (
        <img src={home2} alt="" className="img" />
      )}
      {page.page === "lore" ? (
        <h2 className="exp__lore-title w-full text-[9vw] font-anton font-[400] tracking-[-0.02em] text-white
            text-center uppercase">Welcome to the island.</h2>
      ) : (
        <div className="explore__main flex flex-col">
          <div className="flex  explore__text-top ">
            <div className="explore__text-h">
              <h3 className=" text-[4vw] font-anton font-[400]  text-white
            text-start uppercase leading-[100%] exp__home-title">Explore the Soul of South East Asia</h3>
            </div>
            <div className="flex mt-4 flex-col  justify-start items-start explore__text-p">
              <p className="text-start exp__text font-SpaceMono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                facilisi mauris venenatis est auctor eu. Tellus diam eu ac, nec
                tortor porta lobortis aliquet. Ultrices lorem gravida ut lorem.
              </p>
              <Link to={"/gallery"} className="mt-50 exp__btn">
                Browse Collection
              </Link>
            </div>
          </div>
          <div className="flex explore__card ">
            <Marquee gradient={false} pauseOnHover="true" className="">
              {expCardData.map((item, index) => {
                return (
                  <img

                    src={item.image}
                    alt=""
                    key={index}
                    className="explore__card-img mx-5"
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreSec;

import React from "react";
import Marquee from "react-fast-marquee";
import "./explore.css";
import home2 from "../../assets/home2.png";
import lore1 from "../../assets/lore1.jpg";

import { images } from "../../assets";

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
        <h2>Welcome to the island.</h2>
      ) : (
        <div className="flex flex-col">
          <div className="flex explore__text-top">
            <div className="explore__text-h">
              <h2>Explore the Soul of South East Asia</h2>
            </div>
            <div className="explore__text-p gap-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                facilisi mauris venenatis est auctor eu. Tellus diam eu ac, nec
                tortor porta lobortis aliquet. Ultrices lorem gravida ut lorem.
              </p>
              <a href="/" className="mt-50">
                Browse Collection
              </a>
            </div>
          </div>
          <div className="flex explore__card">
            <Marquee gradient={false} pauseOnHover="true">
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

import React, { useState } from "react";
import "./galleryCard.css";
import GalleryCardData from "./galleryCardData.js";
// import {  Card } from "@material-tailwind/react";
import GalleryCardDialog from "./GalleryCardDialog";
import { useFilterContext } from "../filter/filter_context";

const CardUI = () => {
  const [open, setOpen] = useState(false);
  const { filter_data } = useFilterContext();

  const handleOpen = () => setOpen(!open);
  const [id, setID] = useState("");

  return (
    <div
      className={`flex bg-dark flex-wrap   justify-center items-center gap-10`}
    >
      {filter_data.length > 0
        ? filter_data.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer gallery__card "
                onClick={() => {
                  setOpen(true);
                  setID(item.id);
                }}
              >
                <img src={item.img} alt="" className="gallery__card-img" />
                <span className="gallery__card-text w-full text-[12px] font-SpaceMono font-[400] leading-[160%]  text-white text-center  uppercase">
                  sea
                </span>
                <h4 className="gallery__card-title w-full text-[2vw] font-anton font-[400] tracking-[-0.02em] leading-[100%]  text-white uppercase">
                  NO. {item.id}
                </h4>
              </div>
              <GalleryCardDialog open={open} handler={handleOpen} id={id} />
            </div>
          ))
        : GalleryCardData.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer gallery__card flex flex-col gap-5"
                onClick={() => {
                  setOpen(true);
                  setID(item.id);
                }}
              >
                <img src={item.img} alt="" className="gallery__card-img" />
                <span className="gallery__card-text w-full text-[12px] font-SpaceMono font-[400] leading-[160%]  text-white text-center uppercase">
                  sea
                </span>
                <h4 className="gallery__card-title w-full text-[2vw] font-anton font-[400] tracking-[-0.02em] leading-[100%]  text-white uppercase">
                  NO. {item.id}
                </h4>
              </div>
              <GalleryCardDialog open={open} handler={handleOpen} id={id} />
            </div>
          ))}
    </div>
  );
};
export default CardUI;

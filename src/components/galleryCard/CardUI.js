import React, { useState } from "react";
import "./galleryCard.css";
import GalleryCardData from "./galleryCardData.js";
import { useFilterContext } from "../filter/filter_context";
import Modal from "../modal/Modal";

const CardUI = () => {  
  const { filter_data, handleModal } = useFilterContext(); 
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
                  handleModal(true);                 
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
            </div>
          ))
        : GalleryCardData.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer gallery__card flex flex-col gap-5"
                onClick={() => {
                  handleModal(true);                  
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
            </div>
          ))}
              <Modal id={id}/>
    </div>
  );
};
export default CardUI;

import React, { useRef } from "react";
import { useFilterContext } from "../filter/filter_context";
import GalleryCardData from "../galleryCard/galleryCardData";
import icons from "../../assets/icons";
import "./modal.css";

const Modal = (props) => {
  const { modal_open, handleModal } = useFilterContext();
  for (var x = 0; x < GalleryCardData.length; x++) {
    if (props.id === GalleryCardData[x].id) {
      var dialogData = (
        <div className="flex">
          <div className="modal__left w-[50%]">
            <img
              src={GalleryCardData[x].img}
              alt=""
              className="modal__left-img"
            />
          </div>
          <div className="modal__right w-[50%]">
            <div className="p-[56px]">
              <div className="modal__right-top w-full flex flex-col justify-start items-start gap-5">
                <span className="modal__right-top-text w-full">sea</span>
                <h4 className="modal__right-top-id w-full">
                  NO. {GalleryCardData[x].id}
                </h4>
                <p className="modal__right-top-desc w-full">
                  {GalleryCardData[x].desc}
                </p>
                <span className="my-2 text-start modal__right-text">
                  <span className="text-[#FF4143] mr-1">/ </span> Properties
                </span>
              </div>
              <div className="modal__right-bottom w-full flex flex-wrap justify-start items-start p-4">
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.styleIcon}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">style</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].style.map((item, i) => (
                        <span  key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.special}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">special</p>
                      <div className="flex  gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].special.map((item, i) => (
                      <span  key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.clothing}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">clothing</p>
                   <div className=" flex gap-2 modal__right-bottom-item_items">
                   {GalleryCardData[x].clothing.map((item, i) => (                    
                      <span  key={i}>{item.toUpperCase()}</span>                    
                    ))}
                   </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.head}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">head</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].head.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.hand}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">hand</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].hand.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.neck}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">neck</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].neck.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.face}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">face</p>
                      <div className="flex  gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].face.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.eyes}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">eyes</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].eyes.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.ears}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">ears</p>
                    {GalleryCardData[x].ears.map((item, i) => (
                      <div key={i} className="flex gap-3">
                      <span className="modal__right-bottom-item_items">{item.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.mouth}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">mouth</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].mouth.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
                <div className="modal__right-bottom-item flex justify-start items-center gap-1">
                  <span className="modal__right-bottom-item_icon">{icons.background}</span>
                  <div className="flex flex-col  justify-start items-start">
                    <p className="modal__right-bottom-item_text">background</p>
                      <div className="flex gap-2 modal__right-bottom-item_items">
                    {GalleryCardData[x].background.map((item, i) => (
                      <span key={i} >{item.toUpperCase()}</span>
                    ))}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  const modal = useRef();
  const modalContent = useRef();

  if (modal_open) {
    modal.current.style.display = "block";
    modalContent.current.style.animation = "modalOpen 1s forwards";
  }

  const closeBtn = () => {
    handleModal(false);
    modalContent.current.style.animation = "modalClose 1s forwards";
    setTimeout(() => {
      modal.current.style.display = "none";
    }, 500);
  };
  window.onclick = function (event) {
    if (event.target === modal.current) {
      handleModal(false);
      modalContent.current.style.animation = "modalClose 1s forwards";
      setTimeout(() => {
        modal.current.style.display = "none";
      }, 500);
    }
  };
  return (
    <div>
      <div id="myModal" className="modal" ref={modal}>
        <div className="modal-content" ref={modalContent}>
          <span className="close" onClick={closeBtn}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 12L2.08301 20.917C1.94434 21.0557 1.77767 21.132 1.58301 21.146C1.38901 21.16 1.22234 21.0837 1.08301 20.917C0.916341 20.7777 0.833008 20.618 0.833008 20.438C0.833008 20.2573 0.916341 20.0837 1.08301 19.917L10 11L1.08301 2.08301C0.944341 1.94434 0.868008 1.77767 0.854008 1.58301C0.840008 1.38901 0.916341 1.22234 1.08301 1.08301C1.22234 0.916341 1.38201 0.833008 1.56201 0.833008C1.74267 0.833008 1.91634 0.916341 2.08301 1.08301L11 10L19.917 1.08301C20.0557 0.944341 20.2223 0.868008 20.417 0.854008C20.611 0.840008 20.7777 0.916341 20.917 1.08301C21.0837 1.22234 21.167 1.38234 21.167 1.56301C21.167 1.74301 21.0837 1.91634 20.917 2.08301L12 11L20.917 19.917C21.0557 20.0557 21.132 20.2223 21.146 20.417C21.16 20.611 21.0837 20.7777 20.917 20.917C20.7777 21.0837 20.618 21.167 20.438 21.167C20.2573 21.167 20.0837 21.0837 19.917 20.917L11 12Z"
                fill="white"
              />
            </svg>
          </span>
          {dialogData}
          <div className="modal__footer">
          <span>{icons.OpenSea}</span>
            <p>View on OpenSea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

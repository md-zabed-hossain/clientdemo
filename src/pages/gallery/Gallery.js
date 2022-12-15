import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter, GalleryCard } from "../../components";
import { useFilterContext } from "../../components/filter/filter_context";

import "./gallery.css";

const Gallery = () => {
  const { handlePage } = useFilterContext();
  useEffect(() => {
    handlePage("gallery");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="gallery ">
        <div className="gallery__main flex flex-row justify-between items-center   h-[100vh] gap-10 p-[130px]">
          <div className="gallery__left relative">
            <div className=" flex flex-col   gap-5 items-center  ">
              <h2 className="gallery__title  w-full text-[4vw] font-anton font-[400] tracking-[-0.02em] leading-[100%]  text-white uppercase">Gallery</h2>
              <div>
                <Filter />
              </div>
            </div>
          </div>
          <div className="gallery__right  relative">
            <div className="flex flex-col justify-between absolute items-center mt-50">
              <Link to={"/myst"} className='gallery__btn'>Peek the Myst</Link>
              <GalleryCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

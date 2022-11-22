import React from "react";
import { Link } from "react-router-dom";
import { GalleryCard } from "../../components";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="flex m-[185px] flex-col ">
          <div className="flex  justify-between items-center">
            <h2>Gallery</h2>
            <Link to={"/myst"}>Peek the Myst</Link>
          </div>
          <div className="flex  justify-between  items-center  mt-50">
            <GalleryCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter, GalleryCard } from "../../components";
import { useFilterContext} from "../../components/filter/filter_context"

import "./gallery.css";

const Gallery = () => {
  const {handlePage} = useFilterContext();
  useEffect(() => {
  handlePage('gallery')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="gallery ">
        <div className="flex gap-10 m-[150px]">
          <div className="flex flex-col fixed left-5 gap-20 items-center">
            <h2>Gallery</h2>
            <div>
              <Filter />
            </div>
          </div>
          <div className="flex flex-col justify-between  items-center  mt-50">
            <Link to={"/myst"}>Peek the Myst</Link>
            <GalleryCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

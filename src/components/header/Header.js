import React from "react";
import home1 from "../../assets/home1.png";
import logo from "../../assets/Logo.png";

import "./header.css";
import SocialIcon from "../socialIcon/SocialIcon";
import useWindowSize from "../../useWindowSize";

const Header = (page) => {
  const windowSize = useWindowSize();
  let size = windowSize.width;
  
  return (
    <div className="header h-auto">
    <img src={home1} alt="" className="w-[100%] h-auto  top-0 left-0 relative"/>
      <div className=" flex  justify-center">
        {page.page === "lore" ? (
          <div className="flex w-[100vw] flex-col items-center main p-0 gap-8">
            <h2 className="w-full text-[8vw] font-Anton font-[400] tracking-[-0.02em] text-white
            text-center uppercase">Explore the Myst</h2>
          </div>
        ) : (
          <div className="flex flex-col w-auto h-auto items-center main p-0 gap-8">
            <img  src={logo} className={`${size <768 ? "w-[15vw] h-auto": " w-auto h-auto" }`} alt=""/>
            {size >= 768 && <div className=" w-auto h-auto">
              <SocialIcon />
            </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import SocialIcon from "../socialIcon/SocialIcon";
import "./footer.css";
import Logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../useWindowSize";

const Footer = () => {
  const windowSize = useWindowSize();
  let size = windowSize.width;
  let activeStyle = {
    color: "#FF4143",
  };
  const navList = (
    <ul className="mb-4  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row md:flex-row md:items-center md:gap-6  lg:items-center lg:gap-6">
      {["lore", "gallery", "roadmap"].map((menu, i) => {
        return (
          <NavLink
            key={i}
            to={`/${menu}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="flex items-center capitalize"
          >
            {menu}
          </NavLink>
        );
      })}
    </ul>
  );
  return (
    <div className="footer">
      <div className={`${size < 768 ? "flex-col justify-start items-start":""}flex container justify-around items-center`}>
        {size < 768 ? (
          <>  <div className="flex flex-col justify-start items-start gap-5">
              <img src={Logo} alt="" className="h-auto w-[80px]" />
              <hr className="my-3 w-full h-[1px] opacity-50"/>
              <div className="flex flex-col justify-start items-start gap-2">
              <>{navList}</>
              <SocialIcon />
            </div>
             
            <hr className="my-3 w-full h-[1px] opacity-50"/>
            </div>
            <div className="flex flex-col justify-start items-start">
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Donec facilisi mauris.
                </p>
                <p className="text-start">© 2022 WOS Enterprise</p>
              </div>
           
            </>
        ) : (
          <>
            <div className="flex justify-center items-center gap-10">
              <img src={Logo} alt="" className="h-auto w-[125px]"/>
              <div className="flex flex-col justify-center items-start">
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Donec facilisi mauris.
                </p>
                <p className="text-start">© 2022 WOS Enterprise</p>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end gap-4">
              <>{navList}</>
              <SocialIcon />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;

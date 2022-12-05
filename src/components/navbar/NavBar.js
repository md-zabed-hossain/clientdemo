import React, { useState} from "react";
import { Navbar, MobileNav} from "@material-tailwind/react";
import styles from "./navbar.module.css";
import SocialIcon from "../socialIcon/SocialIcon";
import Logonav from "../../assets/Logonav.png";
import { Link, NavLink } from "react-router-dom";
import { useFilterContext } from "../filter/filter_context";
import useWindowSize from "../../useWindowSize";


const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const {page} = useFilterContext();
  const windowSize = useWindowSize();
  let size = windowSize.width;
  
  let activeStyle = {
    color: "#FF4143",
  };


  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row md:flex-row md:items-center md:gap-6  lg:items-center lg:gap-6">
      {["lore", "gallery", "roadmap"].map((menu, i) => {
        return (
          <NavLink
            key={i}
            to={`/${menu}`}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="flex items-center capitalize font-SpaceMono"
          >
            {menu}
          </NavLink>
        );
      })}
    </ul>
  );

  const homeIcon = (
    <div>
      <div className={`flex justify-center items-center ${styles.main__nav} p-0 gap-8`}>
        <Link to="/">
          <img
            src={Logonav}
            alt=""
            className={`${styles.logo__nav} ml-[3rem] md:ml-[3rem] lg:h-[55px] 
    lg:w-[55px]  md:h-[55px] md:w-[55px] sm:h-[35px] sm:w-[35px] h-[35px] w-[35px]`}
          />
        </Link>
        {size >= 768 && <SocialIcon />}
      </div>
    </div>
  );

  return (
    <Navbar className={`fixed lg:fixed md:fixed sm:fixed py-2 px-4 lg:py-4 ${styles.navbar} bg-transparent`}>
      <div className={`${page === 'home' ? "justify-end items-end mt-[15px]" : "items-center justify-between"} flex mr-auto   text-white bg-transparent`}>
        <>
          {page !== 'home' && homeIcon}
          <div className="hidden md:block lg:block mr-[6rem]">{navList}</div>
        </>

        <button
          className=" mr-[2.5rem] h-[35px] w-[35px]   relative bg-black rounded-[50%]   sm:visible  md:hidden lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-5 w-5 top-[20%] left-[20%] absolute"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 top-[15%] left-[15%] absolute"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default NavBar;

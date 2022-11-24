import React, { useState, useEffect } from "react";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import "./navbar.css";
import SocialIcon from "../socialIcon/SocialIcon";
import Logonav from "../../assets/Logonav.png";
import { Link } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigation();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // console.log(page);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/lore"} className="flex items-center">
        Lore
      </Link>
      <Link to={"/gallery"} className="flex items-center">
        Gallery
      </Link>

      <Link to={"/roadmap"} className="flex items-center">
        Roadmap
      </Link>
    </ul>
  );
  // if(page.page === "home"){
  //  var homeIcon = <div className="hidden lg:block">{navList}</div>
  // }else{
  //    homeIcon = (<div className="flex">
  //   <div className="flex items-center main__nav p-0 gap-8">
  //     <Link to="/"><img src={Logonav} alt="" className="logo__nav"/></Link>
  //     <SocialIcon />
  //   </div>
  // </div>)

  // }
  const homeIcon = (<div>
  <div className="flex justify-center items-center main__nav p-0 mb-5 gap-8">
    <Link to="/"><img src={Logonav} alt="" className="logo__nav"/></Link>
    <SocialIcon />
  </div>
</div>)

  return (
    <Navbar className="py-2 px-4 lg:py-4 navbar bg-transparent ">
      <div className=" flex  items-center justify-between text-blue-gray-900 bg-transparent ">
     {homeIcon}
     <div className="hidden lg:block">{navList}</div>
        

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
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
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default NavBar;

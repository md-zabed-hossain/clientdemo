import React from "react";
import SocialIcon from "../socialIcon/SocialIcon";
import "./footer.css";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="flex footer ">
    <div className='flex flex-row  justify-center items-center'>
    <div className='flex'>
        <img src={Logo} alt="" width="125px" height="104px" />
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisi mauris.</p>
            <p>© 2022 WOS Enterprise</p>
        </div>
      </div>
      <div className='flex flex-col m-4 p-4'>
      <div className='flex gap-2 mb-4'>
        <span>Lore</span>
        <span>Gallery</span>
        <span>Roadmap</span>
      </div>
        <SocialIcon/>
      </div>
    </div>
    </div>
  );
};

export default Footer;

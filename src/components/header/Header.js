import React from "react";

import "./header.css";
import SocialIcon from "../socialIcon/SocialIcon";

const Header = (page) => {
  // const [page,setPage] = useState("page");
  return (
    <div className="header">
      <div className="container flex  justify-center">
        {page.page === "lore" ? (
          <div className="flex flex-col items-center main p-0 gap-8">
            <h2>Explore the Myst</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center main p-0 gap-8">
            <div className="logo" />
            <SocialIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

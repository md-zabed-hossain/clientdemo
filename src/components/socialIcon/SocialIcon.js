import React from "react";
import icons from "../../assets/icons.js";

const SocialIcon = () => {
  return (
    <div className="flex justify-between items-baseline gap-8 p-0 social__icon">
      <div>
        <a href="/">{icons.Twitter}</a>
      </div>
      <div>
        <a href="/">{icons.Discord}</a>
      </div>
      <div>
        <a href="/">{icons.Instagram}</a>
      </div>
      <div>
        <a href="/">{icons.OpenSea}</a>
      </div>
    </div>
  );
};

export default SocialIcon;

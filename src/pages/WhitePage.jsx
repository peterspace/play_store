import React from "react";
import MobileWhite from "./MobileWhite";
import LaptopWhite from "./LaptopWhite";
import DesktopWhite from "./DesktopWhite";

const WhitePage = () => {
  return (
    <>
      <div className="flex tabletWhite:hidden">
        {" "}
        <MobileWhite />
      </div>
      <div className="hidden tabletWhite:flex desktopWhite:hidden">
        {" "}
        <LaptopWhite />
      </div>
      <div className="hidden tabletWhite:hidden desktopWhite:flex">
       
        <DesktopWhite />
      </div>
    </>
  );
};

export default WhitePage;

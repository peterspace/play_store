import React, { useState } from "react";
import PhoneWhite from "./PhoneWhite";
import LaptopWhite from "./LaptopWhite";
import TabletWhite from "./TabletWhite";

const WhitePage = () => {
  return (
    <>
      <>
        <div className="flex md:hidden">
          {" "}
          <PhoneWhite />
        </div>
        <div className="hidden md:flex lg:hidden">
          {" "}
          <TabletWhite />
        </div>
        <div className="hidden lg:flex">
          {" "}
          <LaptopWhite />
        </div>
      </>
    </>
  );
};

export default WhitePage;

import React from "react";
import PhonePopChrome from "./PhonePopChrome";
import TabletChrome from "./TabletChrome";
import Laptop from "./Laptop";

const BlackPage = () => {
  return (
    <>
      <div className="flex tabletBlack:hidden">
        {" "}
        <PhonePopChrome />
      </div>
      <div className="hidden tabletBlack:flex desktopBlack:hidden">
        {" "}
        <TabletChrome />
      </div>
      <div className="hidden tabletBlack:hidden desktopBlack:flex">
        <Laptop />
      </div>
    </>
  );
};

export default BlackPage;

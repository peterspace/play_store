import React, { useState } from "react";
import Phone from "./Phone";
import Tablet from "./Tablet";
import Laptop from "./Laptop";

const BlackPage = () => {
  return (
    <>
      <>
        <div className="flex md:hidden">
          {" "}
          <Phone />
        </div>
        <div className="hidden md:flex lg:hidden">
          {" "}
          <Tablet />
        </div>
        <div className="hidden lg:flex">
          {" "}
          <Laptop />
        </div>
      </>
    </>
  );
};

export default BlackPage;

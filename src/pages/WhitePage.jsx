import React from "react";
import TabletReviewPage from "./TabletReviewPage";
import DesktopReviewPage from "./DesktopReviewPage";

const WhitePage = () => {
  return (
    <>
      <div className="flex desktopBlack:hidden">
        {" "}
        <TabletReviewPage />
      </div>
      <div className="hidden desktopBlack:flex">
        <DesktopReviewPage />
      </div>
    </>
  );
};

export default WhitePage;

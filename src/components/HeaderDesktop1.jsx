import { useMemo } from "react";
import PropTypes from "prop-types";

const HeaderDesktop1 = ({
  className = "",
  frameDivTextDecoration,
  frameDivMargin,
  headerItemsTextDecoration,
  headerItemsMargin,
  propTextDecoration,
}) => {
  const dStyle = useMemo(() => {
    return {
      textDecoration: frameDivTextDecoration,
      margin: frameDivMargin,
    };
  }, [frameDivTextDecoration, frameDivMargin]);

  const storeStyle = useMemo(() => {
    return {
      textDecoration: headerItemsTextDecoration,
      margin: headerItemsMargin,
    };
  }, [headerItemsTextDecoration, headerItemsMargin]);

  const homeStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <header
      className={`self-stretch bg-gray-400 flex flex-row items-start justify-between py-2.5 pl-5 pr-10 top-[0] z-[99] sticky gap-5 text-center text-11xl text-white font-inter ${className}`}
    >
      <div className="w-[170px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
          <div className="w-10 rounded-8xs bg-steelblue-100 border-darkslategray-400 border-[2.5px] border-solid box-border flex flex-row items-start justify-start pt-0 pb-1 pl-[7px] pr-[3px]">
            <a
              className="[text-decoration:none] h-[30px] w-[25px] relative font-semibold text-[inherit] inline-block shrink-0 [text-shadow:1.3px_0_0_#136ba6,_0_1.3px_0_#136ba6,_-1.3px_0_0_#136ba6,_0_-1.3px_0_#136ba6] whitespace-nowrap"
              style={dStyle}
            >
              D
            </a>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 text-left text-3xl font-roboto">
            <a
              className="[text-decoration:none] self-stretch relative leading-[24px] font-medium text-[inherit] whitespace-nowrap"
              style={storeStyle}
            >
              Store
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end py-3.5 px-0 text-left text-sm font-roboto">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <a
              className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[39px]"
              style={homeStyle}
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderDesktop1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivTextDecoration: PropTypes.any,
  frameDivMargin: PropTypes.any,
  headerItemsTextDecoration: PropTypes.any,
  headerItemsMargin: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default HeaderDesktop1;

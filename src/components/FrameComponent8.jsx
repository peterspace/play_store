import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "", propTextDecoration }) => {
  const addressStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`w-[284px] flex flex-row items-start justify-start gap-5 text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-10">
        <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-0.5 box-border w-6 h-6">
          <img className="w-5 h-4 relative" alt="" src="/vector-192.svg" />
        </div>
        <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-1.5">
          <img className="h-4 w-[11px] relative" alt="" src="/group-11.svg" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-5">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[141px] relative tracking-[0.25px] leading-[20px] inline-block">
            Support email
          </div>
          <div className="relative tracking-[0.2px] leading-[20px] text-dimgray whitespace-nowrap z-[1]">
            CoDMobile@activision.com
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
          <div className="flex-1 flex flex-col items-start justify-start">
            <a
              className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block"
              style={addressStyle}
            >
              Address
            </a>
            <div className="relative tracking-[0.2px] leading-[20px] text-dimgray z-[1]">
              <p className="m-0">3100 Ocean park Blvd. Santa Monica,</p>
              <p className="m-0">California, 90405</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default FrameComponent8;

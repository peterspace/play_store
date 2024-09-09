import { useMemo } from "react";
import PropTypes from "prop-types";

const ContactInfo = ({ className = "", propTextDecoration }) => {
  const websiteStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-10 text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-5">
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="overflow-hidden flex flex-row items-center justify-start p-0.5 box-border w-6 h-6">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/vector-20.svg"
            />
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-0.5 box-border w-6 h-6">
            <img className="w-5 h-4 relative" alt="" src="/vector-211.svg" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <a
            className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block"
            style={websiteStyle}
          >
            Website
          </a>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[141px] relative tracking-[0.25px] leading-[20px] inline-block">
              Support email
            </div>
            <div className="relative tracking-[0.2px] leading-[20px] text-dimgray whitespace-nowrap z-[1]">
              support@plinsters.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default ContactInfo;

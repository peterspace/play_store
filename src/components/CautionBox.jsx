import PropTypes from "prop-types";

const CautionBox = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-2.5 text-left text-sm text-darkgray font-roboto ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-5">
        <div className="overflow-hidden flex flex-col items-start justify-start pt-[3.3px] px-0 pb-[3.4px]">
          <img
            className="w-5 h-[13.3px] relative"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative tracking-[0.2px] leading-[20px]">
            This app is not available for your device
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-[3px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[63px]">
          <div className="w-5 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5px] px-0 box-border">
            <img
              className="w-[18.3px] h-[15px] relative"
              loading="lazy"
              alt=""
              src="/vector-23.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="flex-1 relative tracking-[0.2px] leading-[20px]">
              You can share this with your family.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start min-w-[63px] ml-[-2px]">
          <div className="flex-1 relative tracking-[0.2px] leading-[20px]">
            Learn more about Family Library
          </div>
        </div>
      </div>
    </div>
  );
};

CautionBox.propTypes = {
  className: PropTypes.string,
};

export default CautionBox;

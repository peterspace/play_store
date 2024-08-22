import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  vector,
  iconStartSmall,
  iconStartSmall1,
  iconStartSmall2,
  iconStartSmall3,
  iconStartSmall4,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 text-left text-base text-white font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative gap-[9px]">
        <div className="h-8 w-8 rounded-341xl bg-lightcoral overflow-hidden shrink-0 flex flex-row items-start justify-start py-1.5 px-2.5 box-border">
          <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[11px]">
            A
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-sm text-gray-100">
          <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
            Anket Verma
          </div>
        </div>
        <div className="!m-[0] absolute top-[calc(50%_-_12px)] right-[20px] overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
          <img className="h-4 w-1 relative" alt="" src={vector} />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-2xs text-dimgray">
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0"
          alt=""
          src={iconStartSmall}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src={iconStartSmall1}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
          alt=""
          src={iconStartSmall2}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
          alt=""
          src={iconStartSmall3}
        />
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
          <img
            className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
            alt=""
            src={iconStartSmall4}
          />
        </div>
        <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[66px]">
          29 July 2024
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  iconStartSmall: PropTypes.string,
  iconStartSmall1: PropTypes.string,
  iconStartSmall2: PropTypes.string,
  iconStartSmall3: PropTypes.string,
  iconStartSmall4: PropTypes.string,
};

export default FrameComponent3;

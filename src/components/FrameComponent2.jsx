import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  reviewerInitial,
  vector,
  iconStartSmall,
  iconStartSmall1,
  iconStartSmall2,
  iconStartSmall3,
  iconStartSmall4,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5">
        <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[49px] gap-[9px]">
          <img
            className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={reviewerInitial}
          />
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[103px]">
              Mir Nowman Ali
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
          <img className="h-4 w-1 relative" alt="" src={vector} />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-2xs text-dimgray">
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={iconStartSmall}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={iconStartSmall1}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src={iconStartSmall2}
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src={iconStartSmall3}
        />
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
          <img
            className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
            loading="lazy"
            alt=""
            src={iconStartSmall4}
          />
        </div>
        <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[82px]">
          14 August 2024
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  reviewerInitial: PropTypes.string,
  vector: PropTypes.string,
  iconStartSmall: PropTypes.string,
  iconStartSmall1: PropTypes.string,
  iconStartSmall2: PropTypes.string,
  iconStartSmall3: PropTypes.string,
  iconStartSmall4: PropTypes.string,
};

export default FrameComponent2;

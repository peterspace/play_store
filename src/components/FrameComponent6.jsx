import QualityFeedback from "./QualityFeedback";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 text-left text-base text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-5 gap-5 text-white">
        <div className="flex flex-row items-start justify-start gap-[9px]">
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
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
            <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-2xs">
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0"
          alt=""
          src="/iconstartsmall-1.svg"
        />
        <div className="h-3 w-[54px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-3 h-3 overflow-hidden z-[1]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="absolute top-[0px] left-[12px] w-3 h-3 overflow-hidden z-[2]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="absolute top-[0px] left-[24px] w-3 h-3 overflow-hidden z-[3]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="absolute top-[0px] left-[36px] w-3 h-3 overflow-hidden z-[4]"
            alt=""
            src="/iconstartsmall.svg"
          />
        </div>
        <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[66px]">
          29 July 2024
        </div>
      </div>
      <div className="self-stretch relative text-sm tracking-[0.2px] leading-[20px]">
        As a matter of fact, this game is quite good when it comes to gameplay
        and smoothness. I am talking about the smoothness felt between the
        hands, eyes and mind. It's quite an abstract thing. But nevertheless,
        its good and not headache and chaos inducing as in some other shooting
        games. The only flaw in the game is the apparent non difficulty when it
        comes to single player battle royale. Another is the time it takes to
        start some non popular modes, but to one his own preference. Overall
        good!
      </div>
      <QualityFeedback />
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

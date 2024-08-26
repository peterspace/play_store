import SessionSafety from "./SessionSafety";
import ReviewSummary from "./ReviewSummary";
import ReviewFeedbackOne from "./ReviewFeedbackOne";
import PropTypes from "prop-types";

const GameDetails = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-5 max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <SessionSafety />
      <div className="self-stretch flex flex-row items-start justify-start relative text-lg text-gray-100">
        <div className="relative leading-[24px]">Ratings and reviews</div>
        <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6">
          <img
            className="w-4 h-3.5 relative"
            loading="lazy"
            alt=""
            src="/vector-5.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[7px] text-2xs">
        <div className="relative tracking-[0.3px] leading-[16px]">
          Ratings and reviews are verified
        </div>
        <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.3px] px-px box-border h-[15px]">
          <img
            className="h-[12.5px] w-[12.5px] relative"
            loading="lazy"
            alt=""
            src="/vector-12.svg"
          />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-3">
        <button className="cursor-pointer [border:none] py-1.5 px-3 bg-mintcream rounded-9980xl flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
              <img
                className="h-[13.8px] w-[8.8px] relative"
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-darkslategray-100 text-left inline-block min-w-[41px]">
                Phone
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[65px] rounded-9980xl box-border flex flex-col items-center justify-center shrink-0">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-[15px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.9px] px-0 pb-[1.8px] box-border">
              <img
                className="w-[13.8px] h-[11.3px] relative"
                alt=""
                src="/vector-14.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[18px]">
                TV
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white rounded-9980xl flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <img
                className="h-[15px] w-[15px] relative"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[83px]">
                Chromebook
              </div>
            </div>
          </div>
        </button>
        <div className="h-[30px] w-[87px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
          <div className="w-[63px] flex-1 flex flex-row items-center justify-start gap-2">
            <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.6px] px-px box-border h-[15px]">
              <img
                className="h-[13.8px] w-[11.3px] relative"
                alt=""
                src="/vector-15.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Tablet
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewSummary />
      <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
        <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[68px] gap-2.5">
          <img
            className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-121@2x.png"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
              parth patidar
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
          <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-2xs">
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0"
          alt=""
          src="/iconstartsmall-1.svg"
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/iconstartsmall-1.svg"
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
          alt=""
          src="/iconstartsmall-1.svg"
        />
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
          alt=""
          src="/iconstartsmall-1.svg"
        />
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
          <img
            className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
        </div>
        <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[75px]">
          7 August 2024
        </div>
      </div>
      <div className="w-[325px] relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
        "I've been playing this playground game for a few months now, and it's
        been an absolute delight! The graphics are vibrant and engaging, the
        gameplay is smooth and intuitive, and there are plenty of challenges to
        keep things interesting. However, I've occasionally experienced some
        issues with network connection even with good wifi connection. It's bit
        laggy due to this something but overall experience is amazing.
      </div>
      <ReviewFeedbackOne reviewFeedback="1,678" />
    </div>
  );
};

GameDetails.propTypes = {
  className: PropTypes.string,
};

export default GameDetails;

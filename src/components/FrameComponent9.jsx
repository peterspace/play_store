import SessionSafety1 from "./SessionSafety1";
import ReviewsContent from "./ReviewsContent";
import ReviewFeedbackOne from "./ReviewFeedbackOne";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-lg text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="w-[520px] overflow-x-auto flex flex-row items-start justify-start gap-10 max-w-full mq450:gap-5 mq600:gap-5">
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            loading="lazy"
            alt=""
            src="/slideritem2@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-12@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-22@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-32@2x.png"
          />
        </div>
        <SessionSafety1 />
        <div className="flex flex-col items-start justify-start gap-5 text-gray-100">
          <div className="flex flex-row items-start justify-start gap-5">
            <div className="relative leading-[24px]">Ratings and reviews</div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6 h-6">
              <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[7px] text-2xs text-dimgray">
            <div className="relative tracking-[0.3px] leading-[16px]">
              Ratings and reviews are verified
            </div>
            <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.3px] px-px box-border h-[15px]">
              <img
                className="h-[12.5px] w-[12.5px] relative"
                alt=""
                src="/vector-101.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pl-0 pr-[114px] gap-3 mq450:pr-5 mq450:box-border mq600:flex-wrap mq600:pr-[57px] mq600:box-border">
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-mintcream rounded-9980xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
                <img
                  className="h-[13.8px] w-[8.8px] relative"
                  alt=""
                  src="/vector-111.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-darkslategray-100 text-left inline-block min-w-[41px]">
                  Phone
                </div>
              </div>
            </div>
          </button>
          <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[65px] rounded-9980xl box-border flex flex-col items-center justify-center">
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
                  src="/group1.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[83px]">
                  Chromebook
                </div>
              </div>
            </div>
          </button>
          <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[87px] rounded-9980xl box-border flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.6px] px-px box-border h-[15px]">
                <img
                  className="h-[13.8px] w-[11.3px] relative"
                  alt=""
                  src="/vector-15.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[40px]">
                  Tablet
                </div>
              </div>
            </div>
          </button>
        </div>
        <ReviewsContent />
        <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-sm text-gray-100">
          <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[68px] gap-2.5">
            <img
              className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-122@2x.png"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
                parth patidar
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
            <img className="h-4 w-1 relative" alt="" src="/vector-141.svg" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-2xs">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            alt=""
            src="/iconstartsmall-11.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/iconstartsmall-11.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/iconstartsmall-11.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/iconstartsmall-11.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
              alt=""
              src="/iconstartsmall-11.svg"
            />
          </div>
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[75px]">
            7 August 2024
          </div>
        </div>
        <div className="self-stretch relative text-sm tracking-[0.2px] leading-[20px]">
          "I've been playing this playground game for a few months now, and it's
          been an absolute delight! The graphics are vibrant and engaging, the
          gameplay is smooth and intuitive, and there are plenty of challenges
          to keep things interesting. However, I've occasionally experienced
          some issues with network connection even with good wifi connection.
          It's bit laggy due to this something but overall experience is
          amazing.
        </div>
        <ReviewFeedbackOne
          propGap="6px"
          reviewFeedback="1,678"
          propMinWidth="31px"
        />
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;

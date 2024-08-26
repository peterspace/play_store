import SessionSafety1 from "./SessionSafety1";
import ReviewsContent from "./ReviewsContent";
import ReviewFeedbackOne from "./ReviewFeedbackOne";
import PropTypes from "prop-types";

const GameDetails1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <SessionSafety1
          propAlignSelf="stretch"
          propFlex="unset"
          propPadding="unset"
          propPadding1="unset"
          propHeight="120px"
          propMinHeight="110px"
          propFlex1="unset"
          propMinWidth="unset"
          propWidth="100px"
          propFlex2="unset"
          propMinWidth1="unset"
          propAlignSelf1="unset"
          propWidth1="326px"
          propPadding2="unset"
          propPadding3="unset"
          propFlexWrap="unset"
          propFlex3="unset"
          propMinWidth2="unset"
          propWidth2="258px"
          propAlignSelf2="unset"
          propWidth3="unset"
          propAlignSelf3="stretch"
          propAlignSelf4="stretch"
        />
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
          <div className="rounded-9980xl bg-mintcream flex flex-col items-center justify-center py-1.5 px-3 text-darkslategray-100">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
                <img
                  className="h-[13.8px] w-[8.8px] relative"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[41px]">
                  Phone
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px] shrink-0">
            <div className="flex flex-row items-center justify-start gap-2">
              <input
                className="m-0 h-[15px] w-[15px] overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[18px]">
                  TV
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-col items-center justify-center py-1 px-[11px]">
            <div className="flex flex-row items-center justify-start gap-2">
              <input
                className="m-0 h-[15px] w-[15px] overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[83px]">
                  Chromebook
                </div>
              </div>
            </div>
          </div>
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
        <ReviewsContent
          propMinWidth="unset"
          propMinWidth1="unset"
          reviewsContentWidth="327px"
          reviewsContentFlex="unset"
          reviewsContentHeight="unset"
          ratingScoreAlignSelf="unset"
          ratingScoreFlex="unset"
          scoreValueDisplay="inline-block"
          scoreValueMinWidth="78px"
          scoreValueAlignSelf="unset"
          scoreValueFlex="unset"
          reviewsInfoAlignSelf="unset"
          reviewsInfoHeight="unset"
          reviewsCountAlignSelf="unset"
          reviewsCountWidth="unset"
          mDisplay="inline-block"
          mMinWidth="33px"
          mAlignSelf="unset"
          mFlex="unset"
          reviewsTextAlignSelf="unset"
          reviewsTextFlex="unset"
          reviewsDisplay="inline-block"
          reviewsMinWidth="43px"
          reviewsAlignSelf="unset"
          reviewsFlex="unset"
          emptyBarsMinWidth="8px"
          emptyBarsWidth="unset"
          divMinWidth="8px"
          divWidth="unset"
          divMinWidth1="8px"
          divWidth1="unset"
          divMinWidth2="8px"
          divWidth2="unset"
          ratingMinWidth="8px"
          ratingWidth="unset"
        />
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
            src="/iconstartsmall-12.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/iconstartsmall-12.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/iconstartsmall-12.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/iconstartsmall-12.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
              alt=""
              src="/iconstartsmall-12.svg"
            />
          </div>
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[75px]">
            7 August 2024
          </div>
        </div>
        <div className="w-[325px] relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
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

GameDetails1.propTypes = {
  className: PropTypes.string,
};

export default GameDetails1;

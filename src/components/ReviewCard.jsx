import { useMemo } from "react";
import PropTypes from "prop-types";

const ReviewCard = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  propHeight,
  propWidth1,
  propAlignSelf,
  propFlex1,
  propAlignSelf1,
  propFlex2,
  propWidth2,
  mirNowmanAli,
  propAlignSelf2,
  propFlex3,
  propDisplay,
  propMinWidth1,
  propHeight1,
  iconStartSmall2,
  iconStartSmall3,
  iconStartSmall4,
  propWidth3,
  propHeight2,
  august2024,
  propHeight3,
  propFlex4,
  propMinWidth2,
  propDisplay1,
  propAlignSelf3,
  propHeight4,
  callOfDutyMobileBringingFamili,
  propHeight5,
  propDisplay2,
  propWidth4,
  propHeight6,
  propAlignSelf4,
  propFlex5,
  propDisplay3,
  propMinWidth3,
}) => {
  const reviewCardStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const reviwerProfileStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  const reviewerRatingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex1,
    };
  }, [propAlignSelf, propFlex1]);

  const reviewerNameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      flex: propFlex2,
      width: propWidth2,
    };
  }, [propAlignSelf1, propFlex2, propWidth2]);

  const mirNowmanAliStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex3,
      display: propDisplay,
      minWidth: propMinWidth1,
      height: propHeight1,
    };
  }, [propAlignSelf2, propFlex3, propDisplay, propMinWidth1, propHeight1]);

  const reviewStartDateStyle = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight2,
    };
  }, [propWidth3, propHeight2]);

  const august2024Style = useMemo(() => {
    return {
      height: propHeight3,
      flex: propFlex4,
      minWidth: propMinWidth2,
      display: propDisplay1,
      alignSelf: propAlignSelf3,
    };
  }, [propHeight3, propFlex4, propMinWidth2, propDisplay1, propAlignSelf3]);

  const reviewContentStyle = useMemo(() => {
    return {
      height: propHeight4,
    };
  }, [propHeight4]);

  const callOfDutyStyle = useMemo(() => {
    return {
      height: propHeight5,
      display: propDisplay2,
    };
  }, [propHeight5, propDisplay2]);

  const buttonMoreStyle = useMemo(() => {
    return {
      width: propWidth4,
      height: propHeight6,
    };
  }, [propWidth4, propHeight6]);

  const moreStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf4,
      flex: propFlex5,
      display: propDisplay3,
      minWidth: propMinWidth3,
    };
  }, [propAlignSelf4, propFlex5, propDisplay3, propMinWidth3]);

  return (
    <div
      className={`w-[300px] shadow-[0px_7px_27px_rgba(0,_0,_0,_0.11)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-5 box-border gap-[9px] text-left text-sm text-gray-100 font-roboto mq450:pt-[26px] mq450:pb-[26px] mq450:box-border ${className}`}
      // style={reviewCardStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-2.5 px-0 gap-5 mq450:flex-wrap">
        <div
          className="h-8 w-[81px] flex flex-row items-center justify-start"
          style={reviwerProfileStyle}
        >
          <div
            className="self-stretch flex-1 flex flex-col items-start justify-center"
            style={reviewerRatingStyle}
          >
            <div
              className="self-stretch flex-1 flex flex-row items-center justify-center"
              style={reviewerNameStyle}
            >
              <div
                className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]"
                style={mirNowmanAliStyle}
              >
                {mirNowmanAli}
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={iconStartSmall2}
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={iconStartSmall3}
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={iconStartSmall4}
              />
            </div>
          </div>
        </div>
        <div
          className="w-[91px] flex flex-row items-start justify-start text-2xs text-dimgray"
          style={reviewStartDateStyle}
        >
          <div
            className="h-4 flex-1 relative tracking-[0.3px] leading-[16px] inline-block"
            style={august2024Style}
          >
            {august2024}
          </div>
        </div>
      </div>
      <div
        className="self-stretch h-[200px] overflow-hidden shrink-0 flex flex-row items-start justify-start text-dimgray"
        style={reviewContentStyle}
      >
        <div
          className="h-[460px] flex-1 relative tracking-[0.2px] leading-[20px] inline-block"
          style={callOfDutyStyle}
        >
          {callOfDutyMobileBringingFamili}
        </div>
      </div>
      <div
        className="w-[33px] h-5 flex flex-row items-start justify-start text-seagreen-300"
        style={buttonMoreStyle}
      >
        <div
          className="self-stretch flex-1 relative tracking-[0.15px] leading-[20px]"
          style={moreStyle}
        >
          More
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  mirNowmanAli: PropTypes.string,
  iconStartSmall2: PropTypes.string,
  iconStartSmall3: PropTypes.string,
  iconStartSmall4: PropTypes.string,
  august2024: PropTypes.string,
  callOfDutyMobileBringingFamili: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propFlex2: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propFlex3: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth3: PropTypes.any,
  propHeight2: PropTypes.any,
  propHeight3: PropTypes.any,
  propFlex4: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propDisplay1: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propHeight4: PropTypes.any,
  propHeight5: PropTypes.any,
  propDisplay2: PropTypes.any,
  propWidth4: PropTypes.any,
  propHeight6: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propFlex5: PropTypes.any,
  propDisplay3: PropTypes.any,
  propMinWidth3: PropTypes.any,
};

export default ReviewCard;

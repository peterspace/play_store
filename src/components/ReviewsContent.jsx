import { useMemo } from "react";
import PropTypes from "prop-types";

const ReviewsContent = ({
  className = "",
  propMinWidth,
  propMinWidth1,
  reviewsContentWidth,
  reviewsContentFlex,
  reviewsContentHeight,
  ratingScoreAlignSelf,
  ratingScoreFlex,
  scoreValueDisplay,
  scoreValueMinWidth,
  scoreValueAlignSelf,
  scoreValueFlex,
  reviewsInfoAlignSelf,
  reviewsInfoHeight,
  reviewsCountAlignSelf,
  reviewsCountWidth,
  mDisplay,
  mMinWidth,
  mAlignSelf,
  mFlex,
  reviewsTextAlignSelf,
  reviewsTextFlex,
  reviewsDisplay,
  reviewsMinWidth,
  reviewsAlignSelf,
  reviewsFlex,
  emptyBarsMinWidth,
  emptyBarsWidth,
  divMinWidth,
  divWidth,
  divMinWidth1,
  divWidth1,
  divMinWidth2,
  divWidth2,
  ratingMinWidth,
  ratingWidth,
}) => {
  const reviewsContent1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: reviewsContentHeight,
    };
  }, [propMinWidth, reviewsContentHeight]);

  const ratingVisualsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const reviewsContent2Style = useMemo(() => {
    return {
      width: reviewsContentWidth,
      flex: reviewsContentFlex,
    };
  }, [reviewsContentWidth, reviewsContentFlex]);

  const ratingScoreStyle = useMemo(() => {
    return {
      alignSelf: ratingScoreAlignSelf,
      flex: ratingScoreFlex,
    };
  }, [ratingScoreAlignSelf, ratingScoreFlex]);

  const scoreValueStyle = useMemo(() => {
    return {
      display: scoreValueDisplay,
      minWidth: scoreValueMinWidth,
      alignSelf: scoreValueAlignSelf,
      flex: scoreValueFlex,
    };
  }, [
    scoreValueDisplay,
    scoreValueMinWidth,
    scoreValueAlignSelf,
    scoreValueFlex,
  ]);

  const reviewsInfoStyle = useMemo(() => {
    return {
      alignSelf: reviewsInfoAlignSelf,
      height: reviewsInfoHeight,
    };
  }, [reviewsInfoAlignSelf, reviewsInfoHeight]);

  const reviewsCountStyle = useMemo(() => {
    return {
      alignSelf: reviewsCountAlignSelf,
      width: reviewsCountWidth,
    };
  }, [reviewsCountAlignSelf, reviewsCountWidth]);

  const mStyle = useMemo(() => {
    return {
      display: mDisplay,
      minWidth: mMinWidth,
      alignSelf: mAlignSelf,
      flex: mFlex,
    };
  }, [mDisplay, mMinWidth, mAlignSelf, mFlex]);

  const reviewsTextStyle = useMemo(() => {
    return {
      alignSelf: reviewsTextAlignSelf,
      flex: reviewsTextFlex,
    };
  }, [reviewsTextAlignSelf, reviewsTextFlex]);

  const reviewsStyle = useMemo(() => {
    return {
      display: reviewsDisplay,
      minWidth: reviewsMinWidth,
      alignSelf: reviewsAlignSelf,
      flex: reviewsFlex,
    };
  }, [reviewsDisplay, reviewsMinWidth, reviewsAlignSelf, reviewsFlex]);

  const emptyBarsStyle = useMemo(() => {
    return {
      minWidth: emptyBarsMinWidth,
      width: emptyBarsWidth,
    };
  }, [emptyBarsMinWidth, emptyBarsWidth]);

  const div1Style = useMemo(() => {
    return {
      minWidth: divMinWidth,
      width: divWidth,
    };
  }, [divMinWidth, divWidth]);

  const div2Style = useMemo(() => {
    return {
      minWidth: divMinWidth1,
      width: divWidth1,
    };
  }, [divMinWidth1, divWidth1]);

  const div3Style = useMemo(() => {
    return {
      minWidth: divMinWidth2,
      width: divWidth2,
    };
  }, [divMinWidth2, divWidth2]);

  const ratingStyle = useMemo(() => {
    return {
      minWidth: ratingMinWidth,
      width: ratingWidth,
    };
  }, [ratingMinWidth, ratingWidth]);

  return (
    <div
      className={`w-[327px] flex flex-row items-start justify-start gap-[23px] max-w-full text-left text-37xl text-gray-100 font-roboto mq450:flex-wrap ${className}`}
      style={reviewsContent2Style}
    >
      <div
        className="w-[82px] flex flex-col items-start justify-start gap-2 min-w-[82px] mq450:flex-1"
        style={reviewsContent1Style}
      >
        <div
          className="flex flex-row items-start justify-start py-0 pl-0 pr-1"
          style={ratingScoreStyle}
        >
          <div
            className="relative leading-[64px] inline-block min-w-[78px]"
            style={scoreValueStyle}
          >
            4.0
          </div>
        </div>
        <img
          className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/fivestar1.svg"
        />
        <div
          className="flex flex-row items-start justify-start py-0 pl-0 pr-1 gap-0.5 text-2xs text-dimgray"
          style={reviewsInfoStyle}
        >
          <div
            className="flex flex-row items-start justify-start"
            style={reviewsCountStyle}
          >
            <div
              className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[33px]"
              style={mStyle}
            >
              15.5M
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-center text-xs"
            style={reviewsTextStyle}
          >
            <div
              className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[43px]"
              style={reviewsStyle}
            >
              reviews
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[144px] text-xs text-dimgray"
        style={ratingVisualsStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div
                className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px]"
                style={emptyBarsStyle}
              >
                5
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[129px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div
                className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[1]"
                style={div1Style}
              >
                4
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[17px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div
                className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[2]"
                style={div2Style}
              >
                3
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[11px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div
                className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[3]"
                style={div3Style}
              >
                2
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[7px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
            <div
              className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[4]"
              style={ratingStyle}
            >
              1
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[34px] h-2.5 z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewsContent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  reviewsContentWidth: PropTypes.any,
  reviewsContentFlex: PropTypes.any,
  reviewsContentHeight: PropTypes.any,
  ratingScoreAlignSelf: PropTypes.any,
  ratingScoreFlex: PropTypes.any,
  scoreValueDisplay: PropTypes.any,
  scoreValueMinWidth: PropTypes.any,
  scoreValueAlignSelf: PropTypes.any,
  scoreValueFlex: PropTypes.any,
  reviewsInfoAlignSelf: PropTypes.any,
  reviewsInfoHeight: PropTypes.any,
  reviewsCountAlignSelf: PropTypes.any,
  reviewsCountWidth: PropTypes.any,
  mDisplay: PropTypes.any,
  mMinWidth: PropTypes.any,
  mAlignSelf: PropTypes.any,
  mFlex: PropTypes.any,
  reviewsTextAlignSelf: PropTypes.any,
  reviewsTextFlex: PropTypes.any,
  reviewsDisplay: PropTypes.any,
  reviewsMinWidth: PropTypes.any,
  reviewsAlignSelf: PropTypes.any,
  reviewsFlex: PropTypes.any,
  emptyBarsMinWidth: PropTypes.any,
  emptyBarsWidth: PropTypes.any,
  divMinWidth: PropTypes.any,
  divWidth: PropTypes.any,
  divMinWidth1: PropTypes.any,
  divWidth1: PropTypes.any,
  divMinWidth2: PropTypes.any,
  divWidth2: PropTypes.any,
  ratingMinWidth: PropTypes.any,
  ratingWidth: PropTypes.any,
};

export default ReviewsContent;

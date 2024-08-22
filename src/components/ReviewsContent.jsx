import { useMemo } from "react";
import PropTypes from "prop-types";

const ReviewsContent = ({ className = "", propMinWidth, propMinWidth1 }) => {
  const reviewsContent1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const ratingVisualsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`w-[327px] flex flex-row items-start justify-start gap-[23px] max-w-full text-left text-37xl text-gray-100 font-roboto mq450:flex-wrap ${className}`}
    >
      <div
        className="w-[82px] flex flex-col items-start justify-start gap-2 min-w-[82px] mq450:flex-1"
        style={reviewsContent1Style}
      >
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1">
          <div className="relative leading-[64px] inline-block min-w-[78px]">
            4.0
          </div>
        </div>
        <img
          className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/fivestar1.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1 gap-0.5 text-2xs text-dimgray">
          <div className="flex flex-row items-start justify-start">
            <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[33px]">
              15.5M
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-xs">
            <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[43px]">
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
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px]">
                5
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[129px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[1]">
                4
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[17px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[2]">
                3
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[11px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[3]">
                2
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke">
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke w-full h-full hidden" />
                  <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[7px] h-2.5 z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
            <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[4]">
              1
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke">
                <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke w-full h-full hidden" />
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
};

export default ReviewsContent;

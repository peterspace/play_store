import { useMemo } from "react";
import PropTypes from "prop-types";

const ReviewFeedbackOne = ({
  className = "",
  propGap,
  reviewFeedback,
  propMinWidth,
}) => {
  const helpfulInfoStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const reviewFeedbackStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-5 text-left text-xs text-dimgray font-roboto ${className}`}
    >
      <div
        className="flex flex-row items-start justify-start gap-1.5"
        style={helpfulInfoStyle}
      >
        <div
          className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[31px]"
          style={reviewFeedbackStyle}
        >
          {reviewFeedback}
        </div>
        <div className="relative tracking-[0.3px] leading-[16px]">
          people found this review helpful
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[23px]">
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="relative tracking-[0.3px] leading-[16px]">
            Did you find this helpful?
          </div>
        </div>
        <div className="w-[122px] flex flex-row items-start justify-start gap-3 text-sm">
          <div className="flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-px pl-4 pr-[15px]">
            <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[24px]">
              Yes
            </div>
          </div>
          <div className="flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-px px-4">
            <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[19px]">
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewFeedbackOne.propTypes = {
  className: PropTypes.string,
  reviewFeedback: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ReviewFeedbackOne;

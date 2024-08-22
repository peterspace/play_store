import PropTypes from "prop-types";

const QualityFeedback = ({ className = "" }) => {
  return (
    <div
      className={`w-[284px] flex flex-row items-start justify-start gap-3 text-left text-xs text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5">
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[22px]">
            523
          </div>
          <div className="relative tracking-[0.3px] leading-[16px]">
            people found this review helpful
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-6">
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-10">
              <div className="relative tracking-[0.3px] leading-[16px] whitespace-nowrap">
                Did you find this helpful?
              </div>
              <div className="flex flex-col items-start justify-start gap-5 text-sm text-seagreen-300">
                <div className="flex flex-row items-start justify-start py-0 pl-[11px] pr-0">
                  <div className="relative tracking-[0.15px] leading-[20px] inline-block min-w-[95px]">
                    See all reviews
                  </div>
                </div>
                <div className="relative text-lg leading-[24px] text-gray-100 inline-block min-w-[91px]">
                  What’s new
                </div>
              </div>
            </div>
          </div>
          <div className="w-[57px] rounded-9980xl border-gainsboro border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-px pl-4 pr-[15px] text-sm">
            <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[24px]">
              Yes
            </div>
          </div>
        </div>
      </div>
      <div className="w-[53px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border text-sm">
        <div className="self-stretch rounded-9980xl border-gainsboro border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-px px-4">
          <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[19px]">
            No
          </div>
        </div>
      </div>
    </div>
  );
};

QualityFeedback.propTypes = {
  className: PropTypes.string,
};

export default QualityFeedback;

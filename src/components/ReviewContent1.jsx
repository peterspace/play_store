import PropTypes from "prop-types";

const ReviewContent1 = ({ className = "" }) => {
  return (
    <section
      className={`w-[324px] h-[184px] shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-xs text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-3 shrink-0">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5">
          <div className="self-stretch h-4 flex flex-row items-start justify-start gap-[15px]">
            <div className="self-stretch w-[22px] relative tracking-[0.3px] leading-[16px] inline-block">
              523
            </div>
            <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[16px]">
              people found this review helpful
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-6">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-10">
                <div className="self-stretch h-4 relative tracking-[0.3px] leading-[16px] inline-block whitespace-nowrap">
                  Did you find this helpful?
                </div>
                <div className="w-[106px] flex-1 flex flex-col items-start justify-start gap-5 text-sm text-seagreen-300">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[11px] pr-0">
                    <div className="self-stretch flex-1 relative tracking-[0.15px] leading-[20px]">
                      See all reviews
                    </div>
                  </div>
                  <div className="w-[91px] h-6 relative text-lg leading-[24px] text-gray-100 inline-block">
                    What’s new
                  </div>
                </div>
              </div>
            </div>
            <div className="h-6 w-[57px] rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[3px] pl-4 pr-[15px] text-sm">
              <div className="self-stretch w-6 relative tracking-[0.25px] leading-[18px] inline-block">
                Yes
              </div>
            </div>
          </div>
        </div>
        <div className="w-[53px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border text-sm">
          <div className="self-stretch h-6 rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[3px] px-4">
            <div className="self-stretch w-[19px] relative tracking-[0.25px] leading-[18px] inline-block">
              No
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewContent1.propTypes = {
  className: PropTypes.string,
};

export default ReviewContent1;

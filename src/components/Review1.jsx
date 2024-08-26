import PropTypes from "prop-types";

const Review1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-6 box-border max-w-full text-left text-base text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[9px] text-white">
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
          <div className="!m-[0] absolute top-[calc(50%_-_12px)] right-[20px] overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
            <img className="h-4 w-1 relative" alt="" />
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
          games. The only flaw in the game is the apparent non difficulty when
          it comes to single player battle royale. Another is the time it takes
          to start some non popular modes, but to one his own preference.
          Overall good!
        </div>
        <div className="w-[284px] flex flex-row items-start justify-start gap-3 text-xs">
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
              <div className="w-[57px] rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-px pl-4 pr-[15px] text-sm">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[24px]">
                  Yes
                </div>
              </div>
            </div>
          </div>
          <div className="w-[53px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border text-sm">
            <div className="self-stretch rounded-9980xl border-gainsboro-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-px px-4">
              <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[19px]">
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Review1.propTypes = {
  className: PropTypes.string,
};

export default Review1;

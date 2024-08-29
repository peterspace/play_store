import ReviewsContent1 from "./ReviewsContent1";
import PropTypes from "prop-types";

const RatingsWrapper = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-5xl text-gray-100 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-3 text-sm text-seagreen-300">
          <div className="relative tracking-[0.15px] leading-[20px] inline-block min-w-[33px]">
            More
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[82px]">
                Ratings
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-5 text-lg">
          <div className="relative leading-[24px] inline-block min-w-[89px]">
            Play stores
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[27px] text-37xl">
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[13.4px]">
            <div className="w-[93.3px] flex flex-col items-start justify-start gap-10">
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <ReviewsContent1 playStoreScore="4.6" k="484K" />
                <img
                  className="self-stretch h-7 relative rounded-[2.99px] max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/playstore-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-5 text-lg">
                <div className="relative leading-[24px] inline-block min-w-[92px]">
                  Apple store
                </div>
                <ReviewsContent1
                  playStoreScore="4.5"
                  propPadding="unset"
                  k="280.8K"
                  propMinWidth="37px"
                />
                <img
                  className="self-stretch h-7 relative rounded-[2.99px] max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/appstore@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-xs text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[164px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px]">
                    5
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[1]">
                    4
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[2]">
                    3
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[3]">
                    2
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[4]">
                    1
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px]">
                    5
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[1]">
                    4
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[2]">
                    3
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[3]">
                    2
                  </div>
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[8px] z-[4]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[104px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[170px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[135px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-20 h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[11px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[7px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[34px] h-2.5 z-[1]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[129px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[70px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[50px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[7px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[50px] h-2.5 z-[1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[90px]">
                Reviews
              </h2>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 text-lg">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[24px]">Play store reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RatingsWrapper.propTypes = {
  className: PropTypes.string,
};

export default RatingsWrapper;

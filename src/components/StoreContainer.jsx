import { useMemo } from "react";

const StoreContainer = (props) => {
  const {
    className = "",
    playStores,
    ratingValue,
    propPadding,
    k,
    propMinWidth,
    propWidth,
    propWidth1,
    propWidth2,
    propWidth3,
    playstore,
    onClick,
  } = props;
  const reviewsInfo2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const k1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const filledSegmentStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const filledSegment1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const filledSegment2Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const filledSegment3Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div
      className={`w-[327px] flex flex-col items-start justify-start gap-5 max-w-full text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="relative leading-[24px] inline-block min-w-[89px]">
        {playStores}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-5 text-37xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-[23px] mq450:flex-wrap">
          <div className="w-[82px] flex flex-col items-start justify-start gap-2 min-w-[82px] mq450:flex-1">
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1">
              <div className="relative leading-[64px] inline-block min-w-[78px] mq450:text-15xl mq450:leading-[38px] mq1000:text-26xl mq1000:leading-[51px]">
                {ratingValue}
              </div>
            </div>
            <img
              className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/fivestar.svg"
            />
            <div
              className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5 gap-0.5 text-2xs text-dimgray"
              style={reviewsInfo2Style}
            >
              <div className="flex flex-row items-start justify-start">
                <div
                  className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[27px]"
                  style={k1Style}
                >
                  {k}
                </div>
              </div>
              <div className="flex flex-row items-center justify-center text-xs">
                <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[43px]">
                  reviews
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[144px] text-xs text-dimgray">
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
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
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div
                      className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-40 h-2.5 z-[1]"
                      style={filledSegmentStyle}
                    />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div
                      className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[90px] h-2.5 z-[1]"
                      style={filledSegment1Style}
                    />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div
                      className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[11px] h-2.5 z-[1]"
                      style={filledSegment2Style}
                    />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[7px] h-2.5 z-[1]" />
                  </div>
                  <div className="self-stretch h-2.5 relative rounded-9980xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div
                      className="absolute top-[0px] left-[0px] rounded-9980xl bg-seagreen-300 w-[34px] h-2.5 z-[1]"
                      style={filledSegment3Style}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="cursor-pointer hover:opacity-80 w-[93.3px] h-7 relative rounded-[2.99px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={playstore}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default StoreContainer;

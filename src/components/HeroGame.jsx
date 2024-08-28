import { useMemo } from "react";
import PropTypes from "prop-types";

const HeroGame = ({
  className = "",
  heroGameAlignSelf,
  heroGameBackgroundImage,
  heroGameFlex,
}) => {
  const heroGameStyle = useMemo(() => {
    return {
      alignSelf: heroGameAlignSelf,
      backgroundImage: heroGameBackgroundImage,
      flex: heroGameFlex,
    };
  }, [heroGameAlignSelf, heroGameBackgroundImage, heroGameFlex]);

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-row items-start justify-start bg-[url('/hero-game@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-sm text-whitesmoke-200 font-roboto ${className}`}
      style={heroGameStyle}
    >
      <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_31.77%,_#202124_40.56%)] overflow-hidden flex flex-col items-start justify-start pt-[109px] pb-[30px] pl-[23px] pr-0 box-border gap-16 max-w-full">
        <div className="w-[314px] flex flex-row items-start justify-center py-0 px-5 box-border">
          <button className="cursor-pointer [border:none] py-2 pl-[23px] pr-4 bg-gray-200 w-[110px] rounded-29xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[5px] px-[7px]">
              <img
                className="h-3.5 w-[11px] relative"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-whitesmoke-200 text-left">
                Trailer
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8.5px] max-w-full">
          <div className="w-[327px] flex flex-col items-start justify-start gap-[32.7px] shrink-0 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-[9px]">
              <div className="flex-1 flex flex-row items-end justify-start py-0 pl-0 pr-[7px] relative">
                <div className="flex flex-col items-end justify-start gap-[69.2px]">
                  <div className="flex flex-row items-start justify-end py-0 pl-[11px] pr-2">
                    <img
                      className="h-14 w-14 relative rounded-xl overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/similar-image@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 px-5">
                      <div className="flex flex-row items-start justify-start gap-px">
                        <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[22px]">
                          4.0
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <img
                            className="w-3 h-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/iconstartsmall.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative text-xs tracking-[0.3px] leading-[16px] text-darkgray inline-block min-w-[75px] z-[1]">
                      16M reviews
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-7 text-5xl">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.5px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-0">
                      <div className="h-16 flex-1 relative">
                        <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[32px] font-normal font-[inherit] inline-block w-full h-full">
                          Plisnters
                        </h2>
                        <img
                          className="absolute top-[39px] left-[103px] w-5 h-5 overflow-hidden z-[1]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="relative text-base tracking-[0.1px] leading-[24px] text-seagreen-200">
                      Activision Publishing, Inc.
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-[9px] text-xs text-darkgray">
                      <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[74px]">
                        Contains ads
                      </div>
                      <div className="relative text-2xs tracking-[0.3px] leading-[16px] inline-block min-w-[96px]">
                        In-app purchases
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-3 text-sm">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[18px]">
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.1px]">
                        <div className="w-[0.5px] h-5 relative bg-darkgray" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start py-0 px-2">
                          <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[45px]">
                            100M+
                          </div>
                        </div>
                        <div className="relative text-2xs tracking-[0.3px] leading-[16px] text-darkgray inline-block min-w-[62px] z-[1]">
                          Downloads
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.1px]">
                        <div className="w-[0.5px] h-5 relative bg-darkgray" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start text-xs text-darkgray">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[30px] pr-[31px]">
                          <div className="overflow-hidden flex flex-row items-center justify-start py-px px-0.5">
                            <img
                              className="h-[18.3px] w-[16.7px] relative"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                        <div className="relative tracking-[0.29px] leading-[16px] inline-block min-w-[82px] z-[1]">
                          Editors' choice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-5 w-[0.5px] absolute !m-[0] right-[0.5px] bottom-[8.1px] bg-darkgray" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-seagreen-200">
              <button className="cursor-pointer [border:none] py-2 pl-[21px] pr-5 bg-seagreen-100 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center">
                <div className="relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-gray-100 text-left inline-block min-w-[40px]">
                  Install
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[18px]">
                <div className="flex-1 flex flex-row items-end justify-start gap-2.5">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-4">
                    <div className="flex flex-col items-start justify-start gap-1.5">
                      <div className="overflow-hidden flex flex-col items-start justify-start py-1 pl-0 pr-px">
                        <img
                          className="w-6 h-4 relative"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                        <div className="overflow-hidden flex flex-col items-start justify-start py-[3px] px-px box-border w-6 h-6">
                          <img
                            className="w-[22px] h-[18px] relative"
                            alt=""
                            src="/vector-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                    <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-[23px]">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/frame-1.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                          <div className="relative tracking-[0.15px] leading-[14px] inline-block min-w-[38px]">
                            Share
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/frame-2.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                          <div className="relative tracking-[0.15px] leading-[14px] inline-block min-w-[98px]">
                            Add to wishlist
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-0 text-darkgray">
                      <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
                        <div className="relative tracking-[0.2px] leading-[20px]">
                          This app is not available for your device
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[9px]">
                          <div className="flex-1 flex flex-row items-start justify-start">
                            <div className="w-32 flex flex-col items-start justify-start py-0 px-0 box-border">
                              <div className="mr-[-20px] w-[148px] relative tracking-[0.2px] leading-[20px] inline-block shrink-0">
                                You can share this with your family.
                              </div>
                            </div>
                            <div className="w-[115px] relative tracking-[0.2px] leading-[20px] inline-block shrink-0 z-[1]">
                              Learn more about Family Library
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[76px] flex flex-col items-start justify-start pt-[133px] px-0 pb-0 box-border shrink-0 text-xs text-darkgray">
            <div className="self-stretch flex flex-col items-start justify-start shrink-0">
              <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-7">
                <div className="overflow-hidden flex flex-row items-center justify-start py-px px-0.5">
                  <img
                    className="h-[18.3px] w-[16.7px] relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative tracking-[0.28px] leading-[16px] z-[1]">
                Rated for 16+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroGame.propTypes = {
  className: PropTypes.string,

  /** Style props */
  heroGameAlignSelf: PropTypes.any,
  heroGameBackgroundImage: PropTypes.any,
  heroGameFlex: PropTypes.any,
};

export default HeroGame;

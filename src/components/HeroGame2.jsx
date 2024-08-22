import { useMemo } from "react";
import PropTypes from "prop-types";

const HeroGame2 = ({
  className = "",
  heroGameMobileBackgroundImage,
  vector,
  similarImage,
  iconStartSmall,
  actionIconContainers,
  vector1,
}) => {
  const heroGameMobileStyle = useMemo(() => {
    return {
      backgroundImage: heroGameMobileBackgroundImage,
    };
  }, [heroGameMobileBackgroundImage]);

  async function redirectUser() {
    window.location.replace("https://pwa-plinsters.onrender.com");
  }

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-sm text-whitesmoke font-roboto ${className}`}
    >
      <div
        className="flex-1 overflow-hidden flex flex-row items-start justify-start bg-[url('/hero-game@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"
        style={heroGameMobileStyle}
      >
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_31.77%,_#202124_40.56%)] overflow-hidden flex flex-col items-start justify-start pt-[89px] px-[30px] pb-8 box-border gap-16 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center">
            <button className="cursor-pointer [border:none] py-2 pl-[23px] pr-4 bg-gray-200 w-[110px] rounded-29xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[5px] px-[7px]">
                <img className="h-3.5 w-[11px] relative" alt="" src={vector} />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <a className="[text-decoration:none] self-stretch relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-whitesmoke text-left">
                  Trailer
                </a>
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="w-[282px] flex flex-row items-start justify-start relative gap-2 text-5xl">
              <img
                className="h-14 w-14 relative rounded-xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={similarImage}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-px">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start">
                  <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit]">
                    Call of Duty: Mobile Season 7
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-start text-base text-seagreen-200">
                  <div className="relative tracking-[0.1px] leading-[24px]">
                    Activision Publishing, Inc.
                  </div>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-start gap-x-[9px] gap-y-[7px] text-xs text-darkgray">
                  <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[74px]">
                    Contains ads
                  </div>
                  <div className="relative text-2xs tracking-[0.3px] leading-[16px] inline-block min-w-[96px]">
                    In-app purchases
                  </div>
                </div>
              </div>
              <img
                className="h-5 w-5 absolute !m-[0] top-[39px] right-[73px] overflow-hidden shrink-0 z-[1]"
                alt=""
              />
            </div>
            <div className="w-[286px] flex flex-row items-start justify-start gap-[18px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex flex-row items-start justify-start gap-px">
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[22px]">
                      4.0
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-3 h-3 relative overflow-hidden shrink-0"
                        alt=""
                        src={iconStartSmall}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs tracking-[0.3px] leading-[16px] text-darkgray inline-block min-w-[75px]">
                  16M reviews
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-[0.5px] h-5 relative bg-darkgray" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start py-0 px-2">
                  <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[45px]">
                    100M+
                  </div>
                </div>
                <div className="relative text-2xs tracking-[0.3px] leading-[16px] text-darkgray inline-block min-w-[62px]">
                  Downloads
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-[0.5px] h-5 relative bg-darkgray" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start text-2xs-5 text-orange">
                <div className="w-[55px] flex flex-row items-center justify-center py-[2.5px] px-5 box-border">
                  <div className="flex-1 rounded-251xl border-orange border-[0.8px] border-solid overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.19px] leading-[15px] inline-block min-w-[13px]">
                        16
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs tracking-[0.28px] leading-[16px] text-darkgray inline-block min-w-[76px]">
                  Rated for 16+
                </div>
              </div>
            </div>
            <button className="cursor-pointer hover:opacity-80 [border:none] py-2 pl-[21px] pr-5 bg-seagreen-100 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center"  onClick={redirectUser}>
              <div className="relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-gray-100 text-left inline-block min-w-[40px]">
                Install
              </div>
            </button>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[46px] text-seagreen-200">
              <div className="self-stretch flex flex-row items-start justify-center gap-[23px]">
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={actionIconContainers}
                  />
                  <div className="relative tracking-[0.15px] leading-[14px] inline-block min-w-[38px]">
                    Share
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className="relative tracking-[0.15px] leading-[14px] inline-block min-w-[98px]">
                    Add to wishlist
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-darkgray">
              <div className="flex flex-row items-start justify-start gap-5">
                <div className="overflow-hidden flex flex-col items-start justify-start pt-[3.3px] px-0 pb-[3.4px]">
                  <img
                    className="w-5 h-[13.3px] relative"
                    alt=""
                    src={vector1}
                  />
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[0.2px] leading-[20px]">
                    This app is not available for your device
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[3px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[63px]">
                  <div className="w-5 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5px] px-0 box-border">
                    <img
                      className="w-[18.3px] h-[15px] relative"
                      alt=""
                      src="/vector-23.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.2px] leading-[20px]">
                      You can share this with your family.
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[63px] ml-[-2px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[20px]">
                    Learn more about Family Library
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroGame2.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  similarImage: PropTypes.string,
  iconStartSmall: PropTypes.string,
  actionIconContainers: PropTypes.string,
  vector1: PropTypes.string,

  /** Style props */
  heroGameMobileBackgroundImage: PropTypes.any,
};

export default HeroGame2;

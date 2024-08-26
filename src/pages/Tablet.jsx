import HeaderTablet from "../components/HeaderTablet";
import DescriptionTag from "../components/DescriptionTag";
import FrameComponent9 from "../components/FrameComponent9";
import ReviewFeedbackOne from "../components/ReviewFeedbackOne";
import FrameComponent10 from "../components/FrameComponent10";

const Tablet = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderTablet
        materialSymbolssearch="/materialsymbolssearch1.svg"
        appsTextDecoration="none"
      />
      <main className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-10 max-w-full mq450:gap-5">
        <section className="self-stretch overflow-hidden flex flex-row items-start justify-start bg-[url('/public/hero-game-tablet1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-sm text-whitesmoke-200 font-roboto">
          <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_31.77%,_#202124_40.56%)] overflow-hidden flex flex-col items-start justify-start pt-[157px] px-[30px] pb-8 box-border gap-10 max-w-full mq450:gap-5">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-6">
              <button className="cursor-pointer [border:none] py-2 pl-[23px] pr-4 bg-gray-200 w-[110px] rounded-29xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
                <div className="overflow-hidden flex flex-row items-center justify-start py-[5px] px-[7px]">
                  <img
                    className="h-3.5 w-[11px] relative"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a className="[text-decoration:none] self-stretch relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-whitesmoke-200 text-left">
                    Trailer
                  </a>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-10 mq600:gap-5">
              <DescriptionTag similarImage="/similar-image1@2x.png" />
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
                          src="/iconstartsmall1.svg"
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
              <button className="cursor-pointer [border:none] py-2 px-5 bg-seagreen-100 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center hover:bg-seagreen-400">
                <div className="relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-gray-100 text-left inline-block min-w-[40px]">
                  Install
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-seagreen-200">
              <div className="flex flex-row items-start justify-start gap-[23px]">
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-11.svg"
                  />
                  <div className="relative tracking-[0.15px] leading-[14px] inline-block min-w-[38px]">
                    Share
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
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
                    src="/vector-17.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[0.2px] leading-[20px]">
                    This app is not available for your device
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5">
                <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[108px]">
                  <div className="w-5 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5px] px-0 box-border">
                    <img
                      className="w-[18.3px] h-[15px] relative"
                      alt=""
                      src="/vector-23.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.2px] leading-[20px]">
                      You can share this with your family.
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[108px] ml-[-2px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[20px]">
                    Learn more about Family Library
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent9 />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-sm text-dimgray font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[49px] gap-[9px]">
                <img
                  className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-12-12@2x.png"
                />
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[103px]">
                    Mir Nowman Ali
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
                <img
                  className="h-4 w-1 relative"
                  alt=""
                  src="/vector-141.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-2xs">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                alt=""
                src="/iconstartsmall-11.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/iconstartsmall-11.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/iconstartsmall-11.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/iconstartsmall-11.svg"
              />
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                <img
                  className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
                  alt=""
                  src="/iconstartsmall-11.svg"
                />
              </div>
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[82px]">
                14 August 2024
              </div>
            </div>
            <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
              Call Of Duty Mobile bringing familiar gameplay to mobile devices.
              The controls take some getting used to, but the game runs smoothly
              and the graphics are impressive. The multiplayer mode is
              fast-paced and fun, with a good selection of maps and modes.
              However, the game can feel a bit repetitive and the
              microtransactions can be aggressive. Overall, it's a good option
              for fans of first-person shooters and CoD enthusiasts, but may not
              offer anything new for a more innovative experience.
            </div>
            <ReviewFeedbackOne
              propGap="15px"
              reviewFeedback="547"
              propMinWidth="22px"
            />
          </div>
        </section>
        <FrameComponent10 />
      </main>
      <div className="self-stretch h-px relative bg-whitesmoke-200" />
    </div>
  );
};

export default Tablet;

import Helpfulness from "./Helpfulness";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", propGap, prop, propMinWidth }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-5 pl-6 pr-[23px] box-border max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-lg">
          <div className="self-stretch flex flex-row items-center justify-between gap-5 text-gray-100">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[24px]">About this game</div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
              <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
            </div>
          </div>
          <div className="self-stretch h-[120px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-smi">
            <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
              Join your friends in Mobile Legends: Bang Bang, the brand new 5v5
              MOBA showdown, and fight against real players! Choose your
              favorite heroes and build the perfect team with your
              comrades-in-arms! 10-second matchmaking, 10-minute battles.
              Laning, jungling, pushing, and teamfighting, all the fun of PC
              MOBA and action games in the palm of your hand! Feed your eSports
              spirit!
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 text-sm text-gray-100">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[74px] whitespace-nowrap">
                Updated on
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-smi text-dimgray">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[74px]">
                20 Jun 2024
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5 text-sm">
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-2.5">
              <button className="cursor-pointer border-gainsboro border-[1px] border-solid py-1 px-[11px] bg-white w-[78px] rounded-9980xl box-border flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[54px]">
                      Strategy
                    </div>
                  </div>
                </div>
              </button>
              <div className="w-[65px] rounded-9980xl bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[41px]">
                      MOBA
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-9980xl bg-white border-gainsboro border-[1px] border-solid flex flex-col items-center justify-center py-1 px-[11px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[83px]">
                      Single player
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] flex flex-row items-center justify-start gap-2.5">
              <div className="flex-1 rounded-9980xl bg-white border-gainsboro border-[1px] border-solid flex flex-col items-center justify-center py-1 px-[11px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[76px]">
                      Multi-player
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[75px] rounded-9980xl bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[51px]">
                      Stylised
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[65px] rounded-9980xl bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-2.5">
                <div className="w-[43px] flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[42px]">
                      Anime
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[74px] flex flex-row items-center justify-start">
              <div className="flex-1 rounded-9980xl bg-white border-gainsboro border-[1px] border-solid flex flex-col items-center justify-center py-1 px-[11px]">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[50px]">
                      Battling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 text-gray-100">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] inline-block min-w-[91px]">
                  Data safety
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
                <img
                  className="w-4 h-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full text-smi">
              <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
                Safety starts with understanding how developers collect and
                share your data. Data privacy and security practices may vary
                based on your use, region and age The developer provided this
                information and may update it over time.
              </div>
            </div>
            <div className="self-stretch rounded-lg border-gainsboro border-[1px] border-solid flex flex-col items-start justify-start py-[18px] px-[19px] gap-5 text-sm">
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-5">
                  <div className="overflow-hidden flex flex-row items-center justify-start p-0.5">
                    <img
                      className="h-5 w-[18px] relative"
                      loading="lazy"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                  <div className="w-[258px] flex flex-col items-start justify-start gap-[5px] shrink-0">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[20px]">
                        No data shared with third parties
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start text-2xs">
                      <div className="relative tracking-[0.3px] leading-[16px]">
                        <a
                          className="text-[inherit]"
                          href={`https://support.google.com/googleplay?p=data-safety&hl=en`}
                          target="_blank"
                        >
                          <span className="[text-decoration:underline]">
                            Learn more
                          </span>
                        </a>
                         about how developers declare sharing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-5">
                  <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-px">
                    <img
                      className="w-[22px] h-4 relative"
                      loading="lazy"
                      alt=""
                      src="/vector-8.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[20px]">
                        This app may collect these data types
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-2xs">
                      <div className="relative tracking-[0.3px] leading-[16px]">
                        Location, Personal info and 6 others
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                  <div className="overflow-hidden flex flex-row items-center justify-start py-px px-1">
                    <img
                      className="h-[21px] w-4 relative"
                      loading="lazy"
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[20px]">
                        Data is encrypted in transit
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                  <div className="overflow-hidden flex flex-row items-center justify-start py-[3px] px-1 box-border w-6 h-6">
                    <img
                      className="h-[18px] w-4 relative"
                      loading="lazy"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[20px]">
                        You can request that data be deleted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-seagreen-300">
                <div className="relative tracking-[0.15px] leading-[20px] inline-block min-w-[70px]">
                  See details
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative text-lg text-gray-100">
          <div className="relative leading-[24px]">Ratings and reviews</div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6">
            <img
              className="w-4 h-3.5 relative"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[7px] text-2xs">
          <div className="relative tracking-[0.3px] leading-[16px]">
            Ratings and reviews are verified
          </div>
          <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.3px] px-px box-border h-[15px]">
            <img
              className="h-[12.5px] w-[12.5px] relative"
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-3">
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-mintcream rounded-9980xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
                <img
                  className="h-[13.8px] w-[8.8px] relative"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-darkslategray text-left inline-block min-w-[41px]">
                  Phone
                </div>
              </div>
            </div>
          </button>
          <button className="cursor-pointer border-gainsboro border-[1px] border-solid py-1 px-[11px] bg-white w-[65px] rounded-9980xl box-border flex flex-col items-center justify-center shrink-0">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.9px] px-0 pb-[1.8px] box-border">
                <img
                  className="w-[13.8px] h-[11.3px] relative"
                  alt=""
                  src="/vector-14.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[18px]">
                  TV
                </div>
              </div>
            </div>
          </button>
          <button className="cursor-pointer border-gainsboro border-[1px] border-solid py-1 px-[11px] bg-white rounded-9980xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <img
                  className="h-[15px] w-[15px] relative"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[83px]">
                  Chromebook
                </div>
              </div>
            </div>
          </button>
          <div className="self-stretch w-[87px] rounded-9980xl bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
            <div className="w-[63px] flex-1 flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.6px] px-px box-border h-[15px]">
                <img
                  className="h-[13.8px] w-[11.3px] relative"
                  alt=""
                  src="/vector-15.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                  Tablet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-37xl text-gray-100">
          <div className="w-[82px] flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1">
              <div className="relative leading-[64px] inline-block min-w-[78px]">
                4.0
              </div>
            </div>
            <img
              className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/fivestar.svg"
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
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 text-xs text-dimgray">
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
        <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
          <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[68px] gap-2.5">
            <img
              className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-12@2x.png"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
                parth patidar
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
            <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-2xs">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
              alt=""
              src="/iconstartsmall-1.svg"
            />
          </div>
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[75px]">
            7 August 2024
          </div>
        </div>
        <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
          "I've been playing this playground game for a few months now, and it's
          been an absolute delight! The graphics are vibrant and engaging, the
          gameplay is smooth and intuitive, and there are plenty of challenges
          to keep things interesting. However, I've occasionally experienced
          some issues with network connection even with good wifi connection.
          It's bit laggy due to this something but overall experience is
          amazing.
        </div>
        <Helpfulness
          propGap={propGap}
          prop={prop}
          propMinWidth={propMinWidth}
        />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  propGap: PropTypes.string,
  prop: PropTypes.string,
  propMinWidth: PropTypes.string,
};

export default FrameComponent;

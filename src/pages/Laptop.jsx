import { useState } from "react";
import SessionSafety1 from "../components/SessionSafety1";
import ReviewsContent from "../components/ReviewsContent";
import ReviewFeedbackOne from "../components/ReviewFeedbackOne";
import HelpfulReviewThree from "../components/HelpfulReviewThree";
import SupportAndPolicy from "../components/SupportAndPolicy";
import FrameComponent8 from "../components/FrameComponent8";
import SupportAndPolicy1 from "../components/SupportAndPolicy1";

const redirectUrl = import.meta.env.VITE_PWA_URL;
const Laptop = () => {
  const [isAppSupport, setIsAppSupport] = useState(false);
  async function redirectUser() {
    window.location.replace(redirectUrl);
  }

  return (
    <div
      className={`w-full bg-white max-w-full flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-lg text-gray-100 font-roboto`}
    >
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-sm text-whitesmoke-200 font-roboto">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start bg-[url('/selected_2.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <div className="flex-1 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_41%,_#202124_71.5%)] overflow-hidden flex flex-col items-start justify-start pt-[277px] px-[30px] pb-8 box-border gap-[39px] max-w-full mq725:gap-[19px] mq725:pt-[180px] mq725:pb-[21px] mq725:box-border">
            <div className="w-[282px] flex flex-row items-start justify-start gap-2 text-5xl">
              <img
                className="h-14 w-14 relative rounded-xl overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/similar-image1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-px">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start">
                  <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit] mq450:text-lgi mq450:leading-[26px]">
                    Plisnters
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
            </div>
            <div className="flex flex-row items-end justify-start gap-[18px]">
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
                        src="/iconstartsmall1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs tracking-[0.3px] leading-[16px] text-darkgray inline-block min-w-[75px]">
                  16M reviews
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="w-[0.5px] h-5 relative bg-darkgray" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
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
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="w-[0.5px] h-5 relative bg-darkgray" />
              </div>
              <div className="flex flex-col items-center justify-start text-2xs-5 text-rose-500">
                <div className="w-[55px] flex flex-row items-center justify-center py-[2.5px] px-5 box-border">
                  <div className="flex-1 rounded-251xl border-rose-500 border-[0.8px] border-solid overflow-hidden flex flex-row items-center justify-center">
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
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="w-[241px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-2.5">
                  <button
                    className="cursor-pointer hover:opacity-80 [border:none] py-2 px-[60px] bg-seagreen-100 rounded-lg overflow-hidden flex flex-row items-start justify-start hover:bg-seagreen-400"
                    onClick={redirectUser}
                  >
                    <div className="relative text-sm tracking-[0.25px] leading-[20px] font-roboto text-gray-100 text-left inline-block min-w-[40px]">
                      Install
                    </div>
                  </button>
                  <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-[13px]">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-11.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[110px] rounded-29xl bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 pl-[23px] pr-4 box-border">
                <div className="overflow-hidden flex flex-row items-center justify-start py-[5px] px-[7px]">
                  <img
                    className="h-3.5 w-[11px] relative"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative tracking-[0.25px] leading-[20px]">
                    Trailer
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-darkgray">
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
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[335px] max-w-full mq725:flex-wrap">
                  <div className="w-5 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5px] px-0 box-border">
                    <img
                      className="w-[18.3px] h-[15px] relative"
                      alt=""
                      src="/vector-23.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[315px] max-w-full">
                    <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
                      You can share this with your family.
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[335px] max-w-full ml-[-2px]">
                  <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
                    Learn more about Family Library
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-start justify-start pt-0 px-10 pb-5 box-border max-w-full">
        <div className="w-full overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-10 max-w-full mq725:gap-5">
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            loading="lazy"
            alt=""
            src="/slideritem2@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-12@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-22@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px] max-w-full"
            alt=""
            src="/slideritem-32@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-5 box-border max-w-full">
        <SessionSafety1
          propAlignSelf="unset"
          propFlex="1"
          propPadding="0px 854px 0px 0px"
          propPadding1="0px 0px 60px"
          propHeight="unset"
          propMinHeight="unset"
          propFlex1="1"
          propMinWidth="43px"
          propWidth="unset"
          propFlex2="1"
          propMinWidth1="40px"
          propAlignSelf1="stretch"
          propWidth1="unset"
          propPadding2="0px 895px 0px 0px"
          propPadding3="0px 0px 60px"
          propFlexWrap="wrap"
          propFlex3="1"
          propMinWidth2="168px"
          propWidth2="unset"
          propAlignSelf2="stretch"
          propWidth3="286px"
          propAlignSelf3="unset"
          propAlignSelf4="unset"
        />
      </section>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq725:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-5">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[24px]">Ratings and reviews</div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
              <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[7px] text-2xs text-dimgray">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.3px] leading-[16px]">
                Ratings and reviews are verified
              </div>
            </div>
            <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-[1.3px] px-px pb-[1.2px] box-border h-[15px]">
              <img
                className="h-[12.5px] w-[12.5px] relative"
                alt=""
                src="/vector-101.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-5 box-border max-w-full text-left text-sm text-dimgray font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pl-0 pr-[624px] gap-3 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq1050:pr-[312px] mq1050:box-border mq725:pr-[156px] mq725:box-border">
              <button className="cursor-pointer [border:none] py-1.5 px-3 bg-mintcream rounded-9980xl flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
                    <img
                      className="h-[13.8px] w-[8.8px] relative"
                      alt=""
                      src="/vector-111.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-darkslategray-100 text-left inline-block min-w-[41px]">
                      Phone
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[65px] rounded-9980xl box-border flex flex-col items-center justify-center">
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
              <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white rounded-9980xl flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/group1.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[83px]">
                      Chromebook
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[87px] rounded-9980xl box-border flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.6px] px-px box-border h-[15px]">
                    <img
                      className="h-[13.8px] w-[11.3px] relative"
                      alt=""
                      src="/vector-15.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[40px]">
                      Tablet
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <ReviewsContent propMinWidth="82px" propMinWidth1="144px" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-5">
            <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[68px] gap-2.5">
                <img
                  className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame-122@2x.png"
                />
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
                    parth patidar
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
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[75px]">
                7 August 2024
              </div>
            </div>
            <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
              "I've been playing this playground game for a few months now, and
              it's been an absolute delight! The graphics are vibrant and
              engaging, the gameplay is smooth and intuitive, and there are
              plenty of challenges to keep things interesting. However, I've
              occasionally experienced some issues with network connection even
              with good wifi connection. It's bit laggy due to this something
              but overall experience is amazing.
            </div>
            <ReviewFeedbackOne
              propGap="6px"
              reviewFeedback="1,678"
              propMinWidth="31px"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-5">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-5 gap-5 text-base text-white">
              <div className="flex flex-row items-start justify-start gap-[9px]">
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
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
                  <img
                    className="h-4 w-1 relative"
                    alt=""
                    src="/vector-141.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-2xs">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                alt=""
                src="/iconstartsmall-11.svg"
              />
              <div className="h-3 w-[54px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-3 h-3 overflow-hidden z-[1]"
                  alt=""
                  src="/iconstartsmall-11.svg"
                />
                <img
                  className="absolute top-[0px] left-[12px] w-3 h-3 overflow-hidden z-[2]"
                  alt=""
                  src="/iconstartsmall-11.svg"
                />
                <img
                  className="absolute top-[0px] left-[24px] w-3 h-3 overflow-hidden z-[3]"
                  alt=""
                  src="/iconstartsmall-11.svg"
                />
                <img
                  className="absolute top-[0px] left-[36px] w-3 h-3 overflow-hidden z-[4]"
                  alt=""
                  src="/iconstartsmall1.svg"
                />
              </div>
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[66px]">
                29 July 2024
              </div>
            </div>
            <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
              As a matter of fact, this game is quite good when it comes to
              gameplay and smoothness. I am talking about the smoothness felt
              between the hands, eyes and mind. It's quite an abstract thing.
              But nevertheless, its good and not headache and chaos inducing as
              in some other shooting games. The only flaw in the game is the
              apparent non difficulty when it comes to single player battle
              royale. Another is the time it takes to start some non popular
              modes, but to one his own preference. Overall good!
            </div>
            <HelpfulReviewThree />
            <div className="w-full relative tracking-[0.2px] leading-[20px] inline-block max-w-full">{`Score first in Plinsters: Eternal battle! Neyo returns as a Myth - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the first Season Premium Battle Pass now!`}</div>
            <SupportAndPolicy
              isAppSupport={isAppSupport}
              setIsAppSupport={setIsAppSupport}
            />
            {isAppSupport && (
              <>
                <FrameComponent8 propTextDecoration="unset" />
                <SupportAndPolicy1 isAppSupport={isAppSupport} />
              </>
            )}

            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-6 mt-[40px] mb-[80px]">
              <div className="self-stretch h-px relative bg-whitesmoke-200" />
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch h-px relative bg-whitesmoke-200" />
    </div>
  );
};

export default Laptop;

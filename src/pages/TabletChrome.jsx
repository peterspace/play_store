import { useState } from "react";
import CautionBox from "../components/CautionBox";
import FeaturesContainer from "../components/FeaturesContainer";
import SessionSafety2 from "../components/SessionSafety2";
import ReviewsContent from "../components/ReviewsContent";
import ReviewContent1 from "../components/ReviewContent1";
import ReviewContent2 from "../components/ReviewContent2";
import PopUpInstall1 from "../components/PopUpInstall1";
import PopUpInstall from "../components/PopUpInstall";
import FrameComponent5 from "../components/FrameComponent5";
const redirectUrl = import.meta.env.VITE_PWA_URL;

const TabletChrome = () => {
  const [isAppSupport, setIsAppSupport] = useState(false);
  const [isInstall, setIsInstall] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);

  async function installApp() {
    setIsPopUp(true);
    setIsInstall(true);
    setIsHome(false);
  }

  async function addToScreen() {
    setIsPopUp(true);
    setIsInstall(false);
    setIsHome(false);
    window.location.replace(redirectUrl);
    //redirect to pwa app here
  }

  async function installingApp() {
    setIsPopUp(true);
    setIsInstall(false);
    setIsHome(false);
    window.location.replace(redirectUrl);
  }

  async function cancelInstall() {
    setIsPopUp(false);
    setIsInstall(false);
    setIsHome(true);
  }

  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main
        className={`${
          isPopUp
            ? "h-screen flex-1 bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[195px] box-border relative max-w-full text-left text-2xs text-dimgray font-roboto"
            : "h-screen flex-1 bg-white overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[195px] box-border relative max-w-full text-left text-2xs text-dimgray font-roboto"
        }`}
      >
        <FrameComponent5 installApp={installApp} />

        <section className="flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0">
          <div className="w-full overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-10 max-w-full">
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              alt=""
              src="/slideritem4@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-13@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-23@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-34@2x.png"
            />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0 text-left text-lg text-gray-100 font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 shrink-0 max-w-full">
            <div className="self-stretch h-6 flex flex-row items-center justify-between gap-5">
              <div className="self-stretch w-[132px] flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative leading-[24px]">
                  About this game
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
                <img
                  className="w-4 h-3.5 relative"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-fit overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-smi text-dimgray">
              <div className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
                Join your friends in Mobile Legends: Bang Bang, the brand new
                5v5 MOBA showdown, and fight against real players! Choose your
                favorite heroes and build the perfect team with your
                comrades-in-arms! 10-second matchmaking, 10-minute battles.
                Laning, jungling, pushing, and teamfighting, all the fun of PC
                MOBA and action games in the palm of your hand! Feed your
                eSports spirit!
              </div>
            </div>
            <div className="w-[74px] h-fit flex flex-col items-start justify-start gap-1 text-sm">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[20px] whitespace-nowrap">
                  Updated on
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start text-smi text-dimgray">
                <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]">
                  20 Jun 2024
                </div>
              </div>
            </div>
            <FeaturesContainer />
            <SessionSafety2 />
          </div>
        </section>
        <div className="self-stretch h-11 shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-lg text-gray-100">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start relative shrink-0 max-w-full">
            <div className="self-stretch w-[161px] relative leading-[24px] inline-block">
              Ratings and reviews
            </div>
            <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6">
              <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
            </div>
          </div>
        </div>
        <div className="w-[227px] flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border shrink-0">
          <div className="flex-1 flex flex-row items-start justify-start gap-[7px] shrink-0">
            <div className="h-4 flex-1 relative tracking-[0.3px] leading-[16px] inline-block">
              Ratings and reviews are verified
            </div>
            <div className="w-[15px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.3px] px-px box-border h-[15px]">
              <img
                className="h-[12.5px] w-[12.5px] relative"
                alt=""
                src="/vector-12.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0 text-sm">
          <div className="w-[335px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-3 max-w-full">
            <div className="h-[30px] w-[88px] rounded-9980xl bg-mintcream flex flex-col items-center justify-center py-1.5 px-3 box-border shrink-0 text-darkslategray-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-2">
                <div className="overflow-hidden flex flex-row items-center justify-start py-[0.6px] px-[3px] box-border w-[15px] h-[15px]">
                  <img
                    className="h-[13.8px] w-[8.8px] relative"
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                    Phone
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[30px] w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
              <div className="w-[41px] flex-1 flex flex-row items-center justify-start gap-2">
                <div className="w-[15px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.9px] px-0 pb-[1.8px] box-border">
                  <img
                    className="w-[13.8px] h-[11.3px] relative"
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                    TV
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[30px] w-[130px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-2">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <img
                    className="h-[15px] w-[15px] relative"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                    Chromebook
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[30px] w-[87px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
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
        </div>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-7 box-border max-w-full shrink-0">
          <ReviewsContent
            propMinWidth="82px"
            propMinWidth1="144px"
            reviewsContentWidth="unset"
            reviewsContentFlex="1"
            reviewsContentHeight="112px"
            ratingScoreAlignSelf="stretch"
            ratingScoreFlex="1"
            scoreValueDisplay="unset"
            scoreValueMinWidth="unset"
            scoreValueAlignSelf="stretch"
            scoreValueFlex="1"
            reviewsInfoAlignSelf="stretch"
            reviewsInfoHeight="16px"
            reviewsCountAlignSelf="stretch"
            reviewsCountWidth="33px"
            mDisplay="unset"
            mMinWidth="unset"
            mAlignSelf="stretch"
            mFlex="1"
            reviewsTextAlignSelf="stretch"
            reviewsTextFlex="1"
            reviewsDisplay="unset"
            reviewsMinWidth="unset"
            reviewsAlignSelf="stretch"
            reviewsFlex="1"
            emptyBarsMinWidth="unset"
            emptyBarsWidth="8px"
            divMinWidth="unset"
            divWidth="8px"
            divMinWidth1="unset"
            divWidth1="8px"
            divMinWidth2="unset"
            divWidth2="8px"
            ratingMinWidth="unset"
            ratingWidth="8px"
          />
        </section>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0 text-sm text-gray-100">
          <div className="flex-1 flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border shrink-0 max-w-full gap-5">
            <div className="w-[193px] flex flex-row items-center justify-start py-0 pl-0 pr-[68px] box-border gap-2.5">
              <img
                className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-121@2x.png"
              />
              <div className="h-5 flex-1 flex flex-row items-center justify-center">
                <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]">
                  parth patidar
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
              <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
            </div>
          </div>
        </div>
        <div className="w-[181px] h-9 shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start shrink-0">
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
            <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[16px]">
              7 August 2024
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-[30px] box-border max-w-full shrink-0 text-left text-sm text-dimgray font-roboto">
          <div
            // className="h-[180px] flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
            className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
          >
            "I've been playing this playground game for a few months now, and
            it's been an absolute delight! The graphics are vibrant and
            engaging, the gameplay is smooth and intuitive, and there are plenty
            of challenges to keep things interesting. However, I've occasionally
            experienced some issues with network connection even with good wifi
            connection. It's bit laggy due to this something but overall
            experience is amazing.
          </div>
        </section>
        <section className="w-[324px] h-[100px] shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border max-w-full text-left text-xs text-dimgray font-roboto">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5 shrink-0">
            <div className="w-[216px] flex-1 flex flex-row items-start justify-start gap-1.5">
              <div className="self-stretch w-[31px] relative tracking-[0.3px] leading-[16px] inline-block">
                1,678
              </div>
              <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[16px]">
                people found this review helpful
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="self-stretch h-4 relative tracking-[0.3px] leading-[16px] inline-block">
                  Did you find this helpful?
                </div>
              </div>
              <div className="w-[122px] flex flex-row items-start justify-start gap-3 text-sm">
                <div className="h-6 flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[3px] pl-4 pr-[15px]">
                  <div className="self-stretch w-6 relative tracking-[0.25px] leading-[18px] inline-block">
                    Yes
                  </div>
                </div>
                <div className="h-6 flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[3px] px-4">
                  <div className="self-stretch w-[19px] relative tracking-[0.25px] leading-[18px] inline-block">
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0 text-sm text-gray-100">
          <div className="flex-1 flex flex-row items-center justify-between py-0 pl-0 pr-5 box-border shrink-0 max-w-full gap-5">
            <div className="w-[193px] flex flex-row items-center justify-start py-0 pl-0 pr-[49px] box-border gap-[9px]">
              <img
                className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-12-11@2x.png"
              />
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="h-5 flex-1 relative tracking-[0.2px] leading-[20px] inline-block">
                  Mir Nowman Ali
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
              <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
            </div>
          </div>
        </div>
        <div className="w-[188px] h-9 shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start shrink-0">
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
            <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[16px]">
              14 August 2024
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-[30px] box-border max-w-full shrink-0 text-left text-sm text-dimgray font-roboto">
          <div
            // className="h-[220px] flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
            className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
          >
            Call Of Duty Mobile bringing familiar gameplay to mobile devices.
            The controls take some getting used to, but the game runs smoothly
            and the graphics are impressive. The multiplayer mode is fast-paced
            and fun, with a good selection of maps and modes. However, the game
            can feel a bit repetitive and the microtransactions can be
            aggressive. Overall, it's a good option for fans of first-person
            shooters and CoD enthusiasts, but may not offer anything new for a
            more innovative experience.
          </div>
        </section>
        <section className="w-[324px] h-[100px] shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border max-w-full text-left text-xs text-dimgray font-roboto">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5 shrink-0">
            <div className="w-[216px] flex-1 flex flex-row items-start justify-start gap-[15px]">
              <div className="self-stretch w-[22px] relative tracking-[0.3px] leading-[16px] inline-block">
                547
              </div>
              <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[16px]">
                people found this review helpful
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="self-stretch h-4 relative tracking-[0.3px] leading-[16px] inline-block">
                  Did you find this helpful?
                </div>
              </div>
              <div className="w-[122px] flex flex-row items-start justify-start gap-3 text-sm">
                <div className="h-6 flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[3px] pl-4 pr-[15px]">
                  <div className="self-stretch w-6 relative tracking-[0.25px] leading-[18px] inline-block">
                    Yes
                  </div>
                </div>
                <div className="h-6 flex-1 rounded-9980xl border-gainsboro-200 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[3px] px-4">
                  <div className="self-stretch w-[19px] relative tracking-[0.25px] leading-[18px] inline-block">
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full shrink-0 text-base text-white">
          <div className="flex-1 flex flex-row items-start justify-start relative gap-[9px] shrink-0 max-w-full">
            <div className="h-8 w-8 rounded-341xl bg-lightcoral overflow-hidden shrink-0 flex flex-row items-start justify-start py-1.5 px-2.5 box-border">
              <div className="self-stretch w-[11px] relative tracking-[0.2px] leading-[20px] inline-block">
                A
              </div>
            </div>
            <div className="w-[83px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-sm text-gray-100">
              <div className="self-stretch h-5 relative tracking-[0.2px] leading-[20px] inline-block">
                Anket Verma
              </div>
            </div>
            <div className="!m-[0] absolute top-[calc(50%_-_12px)] right-[20px] overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
              <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-5 pb-5 shrink-0">
          <div className="flex flex-row items-start justify-start shrink-0">
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
                src="/iconstartsmall.svg"
              />
            </div>
            <div className="h-4 w-[66px] relative tracking-[0.3px] leading-[16px] inline-block">
              29 July 2024
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-[30px] box-border max-w-full shrink-0 text-left text-sm text-dimgray font-roboto">
          <div
            // className="h-[220px] flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
            className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
          >
            As a matter of fact, this game is quite good when it comes to
            gameplay and smoothness. I am talking about the smoothness felt
            between the hands, eyes and mind. It's quite an abstract thing. But
            nevertheless, its good and not headache and chaos inducing as in
            some other shooting games. The only flaw in the game is the apparent
            non difficulty when it comes to single player battle royale. Another
            is the time it takes to start some non popular modes, but to one his
            own preference. Overall good!
          </div>
        </section>
        <ReviewContent1 />
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-[30px] box-border max-w-full shrink-0 text-left text-sm text-dimgray font-roboto">
          <div
            // className="h-[180px] flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
            className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block shrink-0 max-w-full"
          >{`Score first in Plinsters: Eternal battle! Neyo returns as a Myth - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the first Season Premium Battle Pass now!`}</div>
        </section>
        <footer className="self-stretch h-11 shrink-0 flex flex-row items-start justify-start pt-0 pb-5 pl-5 pr-[29px] box-border max-w-full text-left text-lg text-gray-100 font-roboto">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start relative shrink-0 max-w-full">
            <div className="self-stretch w-[99px] relative leading-[24px] inline-block">
              App support
            </div>
            {isAppSupport ? (
              <div
                className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6"
                onClick={() => setIsAppSupport(false)}
              >
                <img
                  className="w-3.5 h-1.5 relative"
                  alt=""
                  src="/vector-191.svg"
                />
              </div>
            ) : (
              <div
                className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6"
                onClick={() => setIsAppSupport(true)}
              >
                <img
                  className="w-3.5 h-1.5 relative"
                  alt=""
                  src="/vector-19.svg"
                />
              </div>
            )}
          </div>
        </footer>
        {isAppSupport && (
          <>
            <ReviewContent2 />
            <div className="w-[225px] flex flex-row items-start justify-start py-0 px-5 box-border shrink-0 text-sm text-gray-100">
              <div className="flex-1 flex flex-row items-start justify-start gap-5 shrink-0">
                <div className="overflow-hidden flex flex-row items-center justify-start py-0.5 px-1 box-border w-6 h-6">
                  <img
                    className="h-5 w-4 relative"
                    alt=""
                    src="/vector-22.svg"
                  />
                </div>
                <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-[inherit]">
                  Privacy Policy
                </a>
              </div>
            </div>
          </>
        )}

        <div className="self-stretch h-px shrink-0 flex flex-row items-start justify-start py-0 px-5 box-border max-w-full mt-[20px]">
          <div className="self-stretch flex-1 relative bg-whitesmoke-200 shrink-0 max-w-full z-[1]" />
        </div>
        {/* Popover session */}
        {isInstall && (
          <section className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200 overflow-hidden shrink-0 flex flex-col items-center justify-center px-[7px] box-border min-h-[800px] z-[5]">
            <PopUpInstall
              installingApp={installingApp}
              cancelInstall={cancelInstall}
              popUpInstallFlex="unset"
              popUpInstallAlignSelf="stretch"
            />
          </section>
        )}
      </main>
    </div>
  );
};

export default TabletChrome;

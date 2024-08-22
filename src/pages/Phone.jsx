import HeroGame2 from "../components/HeroGame2";
import SessionSafety1 from "../components/SessionSafety1";
import SessionSafetyPhone from "../components/SessionSafetyPhone";
import ReviewsContent from "../components/ReviewsContent";
import ReviewFeedbackOne from "../components/ReviewFeedbackOne";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import GoodGame from "../components/GoodGame";
import FrameComponent4 from "../components/FrameComponent4";
import SimilarGamesItem from "../components/SimilarGamesItem";
import ChildrenGroup from "../components/ChildrenGroup";

const Phone = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row items-start justify-start py-1 px-5 gap-[45px] top-[0] z-[99] sticky text-left text-3xl text-dimgray font-roboto">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconplaystore.svg"
          />
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[119px] whitespace-nowrap">
              Google Play
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-base text-white">
          <div className="flex flex-row items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/materialsymbolssearch1.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/codiconquestion.svg"
              />
            </div>
            <div className="rounded-341xl bg-steelblue overflow-hidden flex flex-row items-start justify-start py-1.5 px-2.5">
              <a className="[text-decoration:none] relative tracking-[0.2px] leading-[20px] text-[inherit] inline-block min-w-[12px]">
                O
              </a>
            </div>
          </div>
        </div>
      </header>
      <HeroGame2
        heroGameMobileBackgroundImage="url('/hero-game-mobile@3x.png')"
        vector="/vector1.svg"
        similarImage="/similar-image1@2x.png"
        iconStartSmall="/iconstartsmall1.svg"
        actionIconContainers="/frame-11.svg"
        vector1="/vector-17.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-sm text-dimgray font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="w-[335px] overflow-x-auto flex flex-row items-start justify-start gap-10 max-w-full">
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem2@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-12@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-22@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-32@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-5 max-w-full">
            <SessionSafetyPhone
              propAlignSelf="stretch"
              propFlex="unset"
              propPadding="unset"
              propPadding1="unset"
              propHeight="120px"
              propMinHeight="110px"
              propFlex1="unset"
              propMinWidth="unset"
              propWidth="100px"
              propFlex2="unset"
              propMinWidth1="unset"
              propAlignSelf1="unset"
              propWidth1="326px"
              propPadding2="unset"
              propPadding3="unset"
              propFlexWrap="unset"
              propFlex3="unset"
              propMinWidth2="unset"
              propWidth2="258px"
              propAlignSelf2="unset"
              propWidth3="unset"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
            />
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
                  src="/vector-101.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-3">
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
              <div className="h-[30px] w-[87px] rounded-9980xl bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px] shrink-0">
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
            <ReviewsContent propMinWidth="unset" propMinWidth1="unset" />
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
            <div className="w-[325px] relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
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
          <FrameComponent2
            reviewerInitial="/frame-12-12@2x.png"
            vector="/vector-141.svg"
            iconStartSmall="/iconstartsmall-11.svg"
            iconStartSmall1="/iconstartsmall-11.svg"
            iconStartSmall2="/iconstartsmall-11.svg"
            iconStartSmall3="/iconstartsmall-11.svg"
            iconStartSmall4="/iconstartsmall-11.svg"
          />
          <div className="w-[325px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-5 max-w-full">
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
          <FrameComponent3
            vector="/vector-141.svg"
            iconStartSmall="/iconstartsmall-11.svg"
            iconStartSmall1="/iconstartsmall-11.svg"
            iconStartSmall2="/iconstartsmall-11.svg"
            iconStartSmall3="/iconstartsmall-11.svg"
            iconStartSmall4="/iconstartsmall1.svg"
          />
          <GoodGame />
          <FrameComponent4
            globeEmail="/vector-18.svg"
            vector1="/vector-192.svg"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full">
        <div className="flex-1 bg-white flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-12@2x.png"
              eASPORTSFC="CRYSIS SAGA"
              propHeight="18px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-2@2x.png"
              eASPORTSFC="MARIO"
              propHeight="18px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="none"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-32@2x.png"
              eASPORTSFC="FREE FIRE"
              propHeight="18px"
              edkonGamesGmbH="Level Infinity"
              propDisplay="inline-block"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="32px"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-4@2x.png"
              eASPORTSFC="GUN RAVE"
              propHeight="18px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-52@2x.png"
              eASPORTSFC="THE WITCHER"
              propHeight="18px"
              edkonGamesGmbH="Innersloth LLC"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-6@2x.png"
              eASPORTSFC="HYPER SCAPE"
              propHeight="18px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="109px"
              similarFrameGap="20px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="stretch"
              edkonGamesGmbHFlex="1"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="18px"
              similarSubheadingPadding="unset"
            />
          </div>
        </div>
      </section>
      <div className="w-[335px] h-px relative bg-whitesmoke hidden max-w-full" />
      <section className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-sm text-dimgray font-helvetica">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-gray-100 font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="flex flex-row items-start justify-start gap-5">
              <div className="overflow-hidden flex flex-row items-center justify-start py-[2.3px] px-[3px] box-border w-[18px] h-[18px]">
                <img
                  className="h-[13.3px] w-[11.7px] relative"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <div className="relative tracking-[0.25px] leading-[20px]">
                Flag as inappropriate
              </div>
            </div>
            <div className="self-stretch h-px relative bg-whitesmoke" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-5">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-[0.25px] leading-[32px] inline-block min-w-[79px]">
              Google Play
            </div>
            <div className="relative text-xs tracking-[0.2px] leading-[32px] inline-block min-w-[55px] z-[1]">
              Play Pass
            </div>
            <div className="relative text-smi tracking-[0.2px] leading-[32px] inline-block min-w-[68px] z-[2]">
              Play Points
            </div>
            <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[62px] z-[3]">
              Gift cards
            </div>
            <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[55px] z-[4]">
              Redeem
            </div>
            <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[88px] z-[5]">
              Refund policy
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-5">
          <ChildrenGroup />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-px max-w-full text-xs">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-5 pl-0 pr-[23px] box-border gap-5 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="flex flex-row items-start justify-start gap-5">
                  <div className="relative leading-[20px] inline-block min-w-[93px]">
                    Terms of service
                  </div>
                  <a className="[text-decoration:none] w-[46px] relative leading-[20px] text-[inherit] inline-block shrink-0">
                    Privacy
                  </a>
                  <div className="relative leading-[20px] inline-block min-w-[104px]">
                    About Google Play
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-5">
                  <div className="relative leading-[20px] inline-block min-w-[80px]">
                    Google Store
                  </div>
                  <div className="relative leading-[20px] inline-block min-w-[70px]">
                    Developers
                  </div>
                  <div className="relative leading-[20px] inline-block min-w-[122px]">
                    All prices include VAT.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-px gap-0.5">
                <div className="relative leading-[20px] inline-block min-w-[37px]">
                  Russia
                </div>
                <div className="relative leading-[20px]">
                  (English(United Kingdom))
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch bg-white flex flex-row items-center justify-between p-2.5 gap-5 z-[2] text-left text-sm text-dimgray font-roboto">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/group-12.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[46px]">
                  Games
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/group-21.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[33px]">
                  Apps
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[47px]">
                Movies
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="w-[41px] flex flex-row items-start justify-start py-0 px-2 box-border">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/group-41.svg"
                />
              </div>
              <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[41px]">
                Books
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-row items-center justify-start py-0 px-[15px]">
                <img className="h-6 w-6 relative" alt="" src="/group-51.svg" />
              </div>
              <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[54px]">
                Children
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Phone;

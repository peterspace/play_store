import SimilarGamesItem from "./SimilarGamesItem";
import PropTypes from "prop-types";

const GameInfo = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-[34px] box-border max-w-full text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch relative tracking-[0.2px] leading-[20px] text-dimgray">{`Score first in Plinsters: Eternal battle! Neyo returns as a Myth - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the first Season Premium Battle Pass now!`}</div>
        <div className="self-stretch flex flex-row items-start justify-start relative text-lg">
          <div className="relative leading-[24px] inline-block min-w-[99px]">
            App support
          </div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6">
            <img
              className="w-3.5 h-1.5 relative"
              alt=""
              src="/vector-191.svg"
            />
          </div>
        </div>
        <div className="w-[284px] flex flex-row items-start justify-start gap-5">
          <div className="flex flex-col items-end justify-start gap-10">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="overflow-hidden flex flex-row items-center justify-start p-0.5 box-border w-6 h-6">
                <img
                  className="h-5 w-5 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-20.svg"
                />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-0.5 box-border w-6 h-6">
                <img
                  className="w-5 h-4 relative"
                  alt=""
                  src="/vector-211.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-1.5">
              <img
                className="h-4 w-[11px] relative"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
            <a className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
              Website
            </a>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[141px] relative tracking-[0.25px] leading-[20px] inline-block">
                Support email
              </div>
              <div className="relative tracking-[0.2px] leading-[20px] text-dimgray whitespace-nowrap z-[1]">
                CoDMobile@activision.com
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
              <div className="flex-1 flex flex-col items-start justify-start">
                <a className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
                  Address
                </a>
                <div className="relative tracking-[0.2px] leading-[20px] text-dimgray z-[1]">
                  <p className="m-0">3100 Ocean park Blvd. Santa Monica,</p>
                  <p className="m-0">California, 90405</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[185px] flex flex-row items-start justify-start gap-5">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0.5 px-1 box-border w-6 h-6">
            <img className="h-5 w-4 relative" alt="" src="/vector-22.svg" />
          </div>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-[inherit]">
            Privacy Policy
          </a>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative text-lg">
          <div className="relative leading-[24px] inline-block min-w-[115px]">
            Similar games
          </div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6">
            <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex flex-row items-start justify-start">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-1@2x.png"
              eASPORTSFC="CRYSIS SAGA"
              propHeight="16px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="-26px"
              similarImage="/similar-image-2@2x.png"
              eASPORTSFC="MARIO"
              propHeight="16px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-3@2x.png"
              eASPORTSFC="FREE FIRE"
              propHeight="unset"
              edkonGamesGmbH="Level Infinity"
              propDisplay="inline-block"
              propMinWidth="79.5px"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="-26px"
              similarImage="/similar-image-4@2x.png"
              eASPORTSFC="GUN RAVE"
              propHeight="16px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <SimilarGamesItem
              propMarginLeft="unset"
              similarImage="/similar-image-5@2x.png"
              eASPORTSFC="THE WITCHER"
              propHeight="unset"
              edkonGamesGmbH="Innersloth LLC"
              propDisplay="inline-block"
              propMinWidth="79.5px"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
            <SimilarGamesItem
              propMarginLeft="-26px"
              similarImage="/similar-image-6@2x.png"
              eASPORTSFC="HYPER SCAPE"
              propHeight="16px"
              edkonGamesGmbH="Edkon Games GmbH"
              propDisplay="unset"
              propMinWidth="unset"
              similarGamesItemMinWidth="unset"
              similarFrameGap="16.5px"
              similarHeadingPadding="0px 0px 0px 0px"
              eASPORTSFCTextDecoration="unset"
              similarSubheadingAlignSelf="unset"
              edkonGamesGmbHFlex="unset"
              edkonGamesGmbHMinHeight="unset"
              similarContentMinWidth="unset"
              similarHeadingHeight="unset"
              similarSubheadingPadding="unset"
            />
          </div>
        </div>
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
        <div className="self-stretch h-px relative bg-whitesmoke-200" />
      </div>
    </section>
  );
};

GameInfo.propTypes = {
  className: PropTypes.string,
};

export default GameInfo;

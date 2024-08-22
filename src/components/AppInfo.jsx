import SimilarGamesItem from "./SimilarGamesItem";
import PropTypes from "prop-types";

const AppInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-5 box-border max-w-full text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <div className="relative leading-[24px] inline-block min-w-[99px]">
            App support
          </div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6">
            <img className="w-3.5 h-1.5 relative" alt="" src="/vector-19.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <div className="relative leading-[24px] inline-block min-w-[115px]">
            Similar games
          </div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[5px] px-1 box-border w-6">
            <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-start justify-start gap-5 text-smi">
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
              similarImage="/similar-image-6@2x.png"
              eASPORTSFC="HYPER SCAPE"
              edkonGamesGmbH="Edkon Games GmbH"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AppInfo.propTypes = {
  className: PropTypes.string,
};

export default AppInfo;

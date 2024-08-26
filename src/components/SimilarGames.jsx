import SimilarGamesItem from "./SimilarGamesItem";
import PropTypes from "prop-types";

const SimilarGames = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full ${className}`}
    >
      <div className="flex-1 bg-white flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start [row-gap:20px]">
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-11@2x.png"
            eASPORTSFC="CRYSIS SAGA"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-2@2x.png"
            eASPORTSFC="MARIO"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start [row-gap:20px]">
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-31@2x.png"
            eASPORTSFC="FREE FIRE"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-4@2x.png"
            eASPORTSFC="GUN RAVE"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start [row-gap:20px]">
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-51@2x.png"
            eASPORTSFC="THE WITCHER"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
          <SimilarGamesItem
            propMarginLeft="unset"
            similarImage="/similar-image-6@2x.png"
            eASPORTSFC="HYPER SCAPE"
            propHeight="16px"
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
            similarHeadingHeight="unset"
            similarSubheadingPadding="unset"
          />
        </div>
      </div>
    </section>
  );
};

SimilarGames.propTypes = {
  className: PropTypes.string,
};

export default SimilarGames;

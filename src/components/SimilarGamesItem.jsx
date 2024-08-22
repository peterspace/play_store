import { useMemo } from "react";
import PropTypes from "prop-types";

const SimilarGamesItem = ({
  className = "",
  propMarginLeft,
  similarImage,
  eASPORTSFC,
  propHeight,
  edkonGamesGmbH,
  propDisplay,
  propMinWidth,
  similarGamesItemMinWidth,
  similarFrameGap,
  similarHeadingPadding,
  eASPORTSFCTextDecoration,
  similarSubheadingAlignSelf,
  edkonGamesGmbHFlex,
  edkonGamesGmbHMinHeight,
  similarContentMinWidth,
  similarHeadingHeight,
  similarSubheadingPadding,
}) => {
  const similarGamesItemStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      minWidth: similarGamesItemMinWidth,
    };
  }, [propMarginLeft, similarGamesItemMinWidth]);

  const similarSubheadingStyle = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: similarSubheadingAlignSelf,
      padding: similarSubheadingPadding,
    };
  }, [propHeight, similarSubheadingAlignSelf, similarSubheadingPadding]);

  const edkonGamesGmbHStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      flex: edkonGamesGmbHFlex,
      minHeight: edkonGamesGmbHMinHeight,
    };
  }, [propDisplay, propMinWidth, edkonGamesGmbHFlex, edkonGamesGmbHMinHeight]);

  const similarFrameStyle = useMemo(() => {
    return {
      gap: similarFrameGap,
    };
  }, [similarFrameGap]);

  const similarHeadingStyle = useMemo(() => {
    return {
      padding: similarHeadingPadding,
      height: similarHeadingHeight,
    };
  }, [similarHeadingPadding, similarHeadingHeight]);

  const eASPORTSFCStyle = useMemo(() => {
    return {
      textDecoration: eASPORTSFCTextDecoration,
    };
  }, [eASPORTSFCTextDecoration]);

  const similarContentStyle = useMemo(() => {
    return {
      minWidth: similarContentMinWidth,
    };
  }, [similarContentMinWidth]);

  return (
    <div
      className={`flex-1 rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start p-3 z-[1] ml-[-26px] text-left text-smi text-gray-100 font-roboto ${className}`}
      style={similarGamesItemStyle}
    >
      <div
        className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16.5px]"
        style={similarFrameStyle}
      >
        <img
          className="h-14 w-14 relative rounded-xl overflow-hidden shrink-0 object-cover min-h-[56px]"
          loading="lazy"
          alt=""
          src={similarImage}
        />
        <div
          className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-0.5"
          style={similarContentStyle}
        >
          <div
            className="self-stretch flex flex-row items-start justify-start py-0 px-0"
            style={similarHeadingStyle}
          >
            <div
              className="w-[106px] relative tracking-[0.2px] leading-[20px] inline-block shrink-0"
              style={eASPORTSFCStyle}
            >
              {eASPORTSFC}
            </div>
          </div>
          <div
            className="h-4 overflow-hidden shrink-0 flex flex-row items-start justify-start text-xs"
            style={similarSubheadingStyle}
          >
            <div
              className="relative tracking-[0.2px] leading-[32px] whitespace-nowrap"
              style={edkonGamesGmbHStyle}
            >
              {edkonGamesGmbH}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-0.5 text-2xs text-dimgray">
            <div className="relative tracking-[0.2px] leading-[16px] inline-block min-w-[17px]">
              4.3
            </div>
            <div className="h-4 flex flex-row items-end justify-center pt-0 px-0 pb-0.5 box-border">
              <img
                className="h-2 w-2 relative overflow-hidden shrink-0"
                alt=""
                src="/materialsymbolsstar.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SimilarGamesItem.propTypes = {
  className: PropTypes.string,
  similarImage: PropTypes.string,
  eASPORTSFC: PropTypes.string,
  edkonGamesGmbH: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  similarGamesItemMinWidth: PropTypes.any,
  similarFrameGap: PropTypes.any,
  similarHeadingPadding: PropTypes.any,
  eASPORTSFCTextDecoration: PropTypes.any,
  similarSubheadingAlignSelf: PropTypes.any,
  edkonGamesGmbHFlex: PropTypes.any,
  edkonGamesGmbHMinHeight: PropTypes.any,
  similarContentMinWidth: PropTypes.any,
  similarHeadingHeight: PropTypes.any,
  similarSubheadingPadding: PropTypes.any,
};

export default SimilarGamesItem;

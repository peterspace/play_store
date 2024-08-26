import { useMemo } from "react";
import PropTypes from "prop-types";

const SessionSafety = ({
  className = "",
  propPadding,
  propHeight,
  propPadding1,
  propMinHeight,
  propWidth,
  propAlignSelf,
  propPadding2,
  propPadding3,
  propFlexWrap,
  propWidth1,
  propFlex,
  propMinWidth,
  propAlignSelf1,
  propAlignSelf2,
  propWidth2,
  propAlignSelf3,
}) => {
  const safetyHeaderStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sectionDescriptionStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding1,
    };
  }, [propHeight, propPadding1]);

  const featuresRowStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const sessionSafetyStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const safetyHeader1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const sectionDescription1Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const safetyContentStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const safetyItemStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propFlex, propMinWidth]);

  const heading4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const safetyContent1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth2,
    };
  }, [propAlignSelf2, propWidth2]);

  const heading3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-lg text-dimgray font-roboto ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-center justify-between gap-5 text-gray-100"
        style={safetyHeaderStyle}
      >
        <div className="flex flex-row items-start justify-start">
          <div className="relative leading-[24px]">About this game</div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
          <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
        </div>
      </div>
      <div
        className="self-stretch h-[120px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-smi"
        style={sectionDescriptionStyle}
      >
        <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
          Join your friends in Mobile Legends: Bang Bang, the brand new 5v5 MOBA
          showdown, and fight against real players! Choose your favorite heroes
          and build the perfect team with your comrades-in-arms! 10-second
          matchmaking, 10-minute battles. Laning, jungling, pushing, and
          teamfighting, all the fun of PC MOBA and action games in the palm of
          your hand! Feed your eSports spirit!
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
      <div className="self-stretch flex flex-col items-start justify-start text-sm">
        <div
          className="self-stretch flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[65px] box-border gap-2.5 min-h-[110px]"
          style={featuresRowStyle}
        >
          <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-1 px-[11px] bg-white w-[78px] rounded-9980xl box-border flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[18px] font-roboto text-dimgray text-left inline-block min-w-[54px]">
                  Strategy
                </div>
              </div>
            </div>
          </button>
          <div className="w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[41px]">
                  MOBA
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid flex flex-col items-center justify-center py-1 px-[11px]">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[83px]">
                  Single player
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[76px]">
                  Multi-player
                </div>
              </div>
            </div>
          </div>
          <div className="w-[75px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[51px]">
                  Stylised
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-2.5">
            <div className="w-[43px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.25px] leading-[18px] inline-block min-w-[42px]">
                  Anime
                </div>
              </div>
            </div>
          </div>
          <div className="w-[74px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1 px-[11px]">
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
      <div
        className="w-[326px] flex flex-col items-start justify-start gap-5 max-w-full"
        style={sessionSafetyStyle}
      >
        <div
          className="self-stretch flex flex-row items-center justify-between gap-5 text-gray-100"
          style={safetyHeader1Style}
        >
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
        <div
          className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full text-smi"
          style={sectionDescription1Style}
        >
          <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
            Safety starts with understanding how developers collect and share
            your data. Data privacy and security practices may vary based on
            your use, region and age The developer provided this information and
            may update it over time.
          </div>
        </div>
        <div className="self-stretch rounded-lg border-gainsboro-200 border-[1px] border-solid flex flex-col items-start justify-start py-[18px] px-[19px] gap-5 text-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-5">
            <div
              className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-5"
              style={safetyContentStyle}
            >
              <div className="overflow-hidden flex flex-row items-center justify-start p-0.5">
                <img
                  className="h-5 w-[18px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div
                className="w-[258px] flex flex-col items-start justify-start gap-[5px] shrink-0"
                style={safetyItemStyle}
              >
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="relative tracking-[0.2px] leading-[20px]">
                    No data shared with third parties
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start text-2xs"
                  style={heading4Style}
                >
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
            <div
              className="self-stretch flex flex-row items-start justify-start gap-5"
              style={safetyContent1Style}
            >
              <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-px">
                <img
                  className="w-[22px] h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                <div
                  className="self-stretch flex flex-row items-start justify-start"
                  style={heading3Style}
                >
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
  );
};

SessionSafety.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding2: PropTypes.any,
  propPadding3: PropTypes.any,
  propFlexWrap: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
};

export default SessionSafety;

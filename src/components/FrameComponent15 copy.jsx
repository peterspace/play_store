import { useMemo } from "react";
import Feature from "./Feature";
import PropTypes from "prop-types";
const redirectUrlPlayStore = import.meta.env.VITE_PLAY_STORE_URL;
const redirectUrlAppStore = import.meta.env.VITE_APP_STORE_URL;

const FrameComponent15 = ({
  className = "",
  featureHeight,
  adventureBackgroundImage,
  adventureAlignSelf,
  featureMinHeight,
  featureFlex,
  propFlexWrap,
  heroImage,
  adventure,
  adventure1,
  adventure2,
  propFlex,
  propFlex1,
  propFlex2,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth11,
  propMinWidth12,
  propMinWidth13,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      height: featureHeight,
    };
  }, [featureHeight]);

  // const heroGameLaptopStyle = useMemo(() => {
  //   return {
  //     backgroundImage: adventureBackgroundImage,
  //     alignSelf: adventureAlignSelf,
  //   };
  // }, [adventureBackgroundImage, adventureAlignSelf]);



  const layerBlur2Style = useMemo(() => {
    return {
      minHeight: featureMinHeight,
      flex: featureFlex,
    };
  }, [featureMinHeight, featureFlex]);

  const keyFeatureStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  async function redirectUserPlayStore() {
    window.location.replace(redirectUrlPlayStore);
  }

  async function redirectUserAppStore() {
    window.location.replace(redirectUrlAppStore);
  }

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-5xl text-gray-600 font-poppins ${className}`}
      style={frameSectionStyle}
    >
      <div
        // className="flex-1 overflow-hidden flex flex-col items-center justify-start bg-[url('/public/hero-game-laptop2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"
        // style={heroGameLaptopStyle}
        className={`self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start bg-cover bg-no-repeat bg-[top] max-w-full bg-[url('/public/hero-game-laptop2@3x.png')] mobileBlack:bg-[url('/landing2.png')] tabletBlack:bg-[url('/landing2.png')] desktopBlack:tabletBlack:bg-[url('/landing2.png')]`}
       
      >
        <div
          className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_41%,_#202124_71.5%)] overflow-hidden flex flex-col items-start justify-end p-[30px] box-border min-h-[661px]"
          style={layerBlur2Style}
        >
          <div className="self-stretch flex flex-col items-center justify-start py-0.5 px-0 relative gap-10 mq725:gap-5">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[782px] gap-10 mq450:pr-5 mq450:box-border mq1050:pr-[391px] mq1050:box-border mq725:gap-5 mq725:pr-[195px] mq725:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <img
                  className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/similar-image2@2x.png"
                />
                <div className="flex flex-row items-center justify-center">
                  <h2 className="m-0 h-[17px] relative text-inherit font-bold font-[inherit] inline-block mq450:text-lgi">
                    Mob Control
                  </h2>
                </div>
                <div
                  className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-2 text-sm text-gray-300"
                  style={keyFeatureStyle}
                >
                  <Feature
                    propFlex={propFlex}
                    propMinWidth={propMinWidth}
                    adventure={adventure}
                    propMinWidth1={propMinWidth11}
                  />
                  <Feature
                    propFlex={propFlex1}
                    propMinWidth={propMinWidth1}
                    adventure={adventure1}
                    propMinWidth1={propMinWidth12}
                  />
                  <Feature
                    propFlex={propFlex2}
                    propMinWidth={propMinWidth2}
                    adventure={adventure2}
                    propMinWidth1={propMinWidth13}
                  />
                </div>
              </div>
              <div className="rounded bg-overlay-2 flex flex-row items-start justify-start p-1 gap-[3.7px]">
                <img
                  className="cursor-pointer hover:opacity-80 self-stretch w-[93.3px] relative rounded-[2.99px] max-h-full overflow-hidden shrink-0 object-cover min-h-[28px]"
                  onClick={redirectUserAppStore}
                  alt=""
                  src="/appstore@2x.png"
                />
                <img
                  className="cursor-pointer hover:opacity-80 self-stretch w-[93.3px] relative rounded-[2.99px] max-h-full overflow-hidden shrink-0 object-cover min-h-[28px]"
                  onClick={redirectUserPlayStore}
                  alt=""
                  src="/playstore@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
  heroImage: PropTypes.string,
  adventure: PropTypes.string,
  adventure1: PropTypes.string,
  adventure2: PropTypes.string,
  propFlex: PropTypes.string,
  propFlex1: PropTypes.string,
  propFlex2: PropTypes.string,
  propMinWidth: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propMinWidth11: PropTypes.string,
  propMinWidth12: PropTypes.string,
  propMinWidth13: PropTypes.string,

  /** Style props */
  featureHeight: PropTypes.any,
  adventureBackgroundImage: PropTypes.any,
  adventureAlignSelf: PropTypes.any,
  featureMinHeight: PropTypes.any,
  featureFlex: PropTypes.any,
  propFlexWrap: PropTypes.any,
};

export default FrameComponent15;

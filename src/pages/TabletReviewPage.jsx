import HeaderDesktop1 from "../components/HeaderDesktop1";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponentTablet from "../components/FrameComponentTablet ";

const TabletReviewPage = () => {
  return (
    <div className="w-screen h-screen relative bg-white flex flex-col items-start justify-start pb-[60px] leading-[normal] tracking-[normal]">
      <HeaderDesktop1 />
      <FrameComponent15
        featureHeight="701px"
        adventureBackgroundImage="url('/hero-game-laptop@3x.png')"
        adventureAlignSelf="stretch"
        featureMinHeight="unset"
        featureFlex="1"
        propFlexWrap="unset"
        heroImage="pending_2127:5741"
        adventure="Adventure"
        adventure1="Puzzle"
        adventure2="Platformer"
        propFlex="1"
        propFlex1="unset"
        propFlex2="1"
        propMinWidth="unset"
        propMinWidth1="unset"
        propMinWidth2="unset"
        propMinWidth11="74px"
        propMinWidth12="43px"
        propMinWidth13="75px"
      />
      <FrameComponentTablet />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border max-w-full">
        <FrameComponent19 />
      </section>
      <FrameComponent21 />
    </div>
  );
};

export default TabletReviewPage;

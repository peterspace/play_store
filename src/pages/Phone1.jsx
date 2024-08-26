import HeroGame2 from "../components/HeroGame2";
import GameDetails from "../components/GameDetails";
import FrameComponent2 from "../components/FrameComponent2";
import GameplayReview from "../components/GameplayReview";
import FrameComponent3 from "../components/FrameComponent3";
import GoodGame from "../components/GoodGame";
import FrameComponent4 from "../components/FrameComponent4";
import SimilarGames from "../components/SimilarGames";
import Footer from "../components/Footer";

const Phone1 = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row items-start justify-start py-1 px-5 gap-[45px] top-[0] z-[99] sticky text-left text-3xl text-dimgray font-roboto">
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
                src="/materialsymbolssearch.svg"
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
        vector="/vector.svg"
        similarImage="/similar-image@2x.png"
        iconStartSmall="/iconstartsmall.svg"
        actionIconContainers="/frame-1.svg"
        vector1="/vector-11.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="w-[335px] overflow-x-auto flex flex-row items-start justify-start gap-10 max-w-full">
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem1@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-11@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-21@2x.png"
            />
            <img
              className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
              loading="lazy"
              alt=""
              src="/slideritem-31@2x.png"
            />
          </div>
          <GameDetails />
          <FrameComponent2
            reviewerInitial="/frame-12-11@2x.png"
            vector="/vector-16.svg"
            iconStartSmall="/iconstartsmall-1.svg"
            iconStartSmall1="/iconstartsmall-1.svg"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall-1.svg"
          />
          <GameplayReview />
          <FrameComponent3
            vector="/vector-16.svg"
            iconStartSmall="/iconstartsmall-1.svg"
            iconStartSmall1="/iconstartsmall-1.svg"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall.svg"
          />
          <GoodGame />
          <FrameComponent4
            globeEmail="/vector-20.svg"
            vector1="/vector-211.svg"
          />
        </div>
      </section>
      <SimilarGames />
      <div className="w-[335px] h-px relative bg-whitesmoke-200 hidden max-w-full" />
      <Footer />
    </div>
  );
};

export default Phone1;

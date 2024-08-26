import HeroGame1 from "../components/HeroGame1";
import FrameComponent from "../components/FrameComponent";
import Review from "../components/Review";
import Review1 from "../components/Review1";
import GameInfo from "../components/GameInfo";
import FrameComponent1 from "../components/FrameComponent1";

const Mobile = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-dimgray font-roboto">
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
      <HeroGame1 />
      <section className="flex flex-row items-start justify-start pt-0 px-6 pb-5 box-border max-w-full">
        <div className="w-[326px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-10 max-w-full">
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
            loading="lazy"
            alt=""
            src="/slideritem@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
            loading="lazy"
            alt=""
            src="/slideritem-1@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
            loading="lazy"
            alt=""
            src="/slideritem-2@2x.png"
          />
          <img
            className="self-stretch w-[363px] relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover min-h-[204px]"
            loading="lazy"
            alt=""
            src="/slideritem-3@2x.png"
          />
        </div>
      </section>
      <FrameComponent />
      <Review />
      <Review1 />
      <GameInfo />
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-6">
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
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-8">
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[0.25px] leading-[32px] inline-block min-w-[125px]">
            Children and family
          </div>
          <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[82px] z-[1]">
            Parent guide
          </div>
          <div className="relative text-smi tracking-[0.2px] leading-[32px] inline-block min-w-[88px] z-[2]">
            Family sharing
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-whitesmoke-200 hidden" />
      <FrameComponent1 />
    </div>
  );
};

export default Mobile;

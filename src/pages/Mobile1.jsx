import HeroGame from "../components/HeroGame";
import FrameComponent from "../components/FrameComponent";
import Review from "../components/Review";
import Review1 from "../components/Review1";
import AppInfo from "../components/AppInfo";
import FrameComponent1 from "../components/FrameComponent1";

const Mobile1 = () => {
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
      <main className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-5 box-border gap-5 max-w-full">
        <HeroGame />
        <section className="flex flex-row items-start justify-end py-0 px-6 box-border max-w-full">
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
        <FrameComponent prop="1,678" />
        <Review propGap="15px" prop="547" propMinWidth="22px" />
        <Review1 />
      </main>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-5 pl-6 pr-[25px] box-border max-w-full">
        <div className="flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">{`Score first in Call of Duty®: Mobile’s Season 7: Eternal Ghost! Ghost returns as a Mythic Ghost - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the Season 7 Premium Battle Pass now!`}</div>
      </div>
      <AppInfo />
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-5 text-gray-100">
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
      </div>
      <div className="self-stretch h-[35px] flex flex-row items-start justify-start pt-0 px-6 pb-[34px] box-border max-w-full">
        <div className="self-stretch flex-1 relative bg-whitesmoke max-w-full" />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-6 font-helvetica">
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
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-8 font-helvetica">
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
      <div className="self-stretch h-px relative bg-whitesmoke hidden" />
      <FrameComponent1 />
    </div>
  );
};

export default Mobile1;

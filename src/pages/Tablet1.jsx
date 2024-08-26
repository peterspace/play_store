import HeaderTablet from "../components/HeaderTablet";
import FrameComponent5 from "../components/FrameComponent5";
import ReviewContent from "../components/ReviewContent";
import ReviewFeedbackOne from "../components/ReviewFeedbackOne";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import ChildrenGroup from "../components/ChildrenGroup";

const Tablet1 = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderTablet materialSymbolssearch="/materialsymbolssearch.svg" />
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-sm text-dimgray font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <ReviewContent />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-5">
            <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[49px] gap-[9px]">
                <img
                  className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-12-11@2x.png"
                />
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[103px]">
                    Mir Nowman Ali
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
                <img className="h-4 w-1 relative" alt="" src="/vector-16.svg" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-2xs">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/iconstartsmall-1.svg"
              />
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                <img
                  className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
                  alt=""
                  src="/iconstartsmall-1.svg"
                />
              </div>
              <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[82px]">
                14 August 2024
              </div>
            </div>
            <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
              Call Of Duty Mobile bringing familiar gameplay to mobile devices.
              The controls take some getting used to, but the game runs smoothly
              and the graphics are impressive. The multiplayer mode is
              fast-paced and fun, with a good selection of maps and modes.
              However, the game can feel a bit repetitive and the
              microtransactions can be aggressive. Overall, it's a good option
              for fans of first-person shooters and CoD enthusiasts, but may not
              offer anything new for a more innovative experience.
            </div>
            <ReviewFeedbackOne
              propGap="15px"
              reviewFeedback="547"
              propMinWidth="22px"
            />
          </div>
          <FrameComponent6 />
          <FrameComponent7 />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1">
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
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
            <ChildrenGroup />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-5 box-border gap-5 max-w-full text-xs">
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">
              <div className="flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
                <div className="relative leading-[20px] inline-block min-w-[93px]">
                  Terms of service
                </div>
                <div className="w-[46px] relative leading-[20px] inline-block shrink-0">
                  Privacy
                </div>
                <div className="relative leading-[20px] inline-block min-w-[104px]">
                  About Google Play
                </div>
                <div className="relative leading-[20px] inline-block min-w-[80px]">
                  Google Store
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
                <div className="relative leading-[20px] inline-block min-w-[122px]">
                  All prices include VAT.
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-px gap-0.5">
                  <div className="relative leading-[20px] inline-block min-w-[37px]">
                    Russia
                  </div>
                  <div className="relative leading-[20px]">
                    (English(United Kingdom))
                  </div>
                </div>
              </div>
            </div>
            <div className="relative leading-[20px] inline-block min-w-[70px]">
              Developers
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch h-px relative bg-whitesmoke-200 z-[1]" />
    </div>
  );
};

export default Tablet1;

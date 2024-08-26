import WhitePageHeaderContainer from "../components/WhitePageHeaderContainer";
import AboutBox from "../components/AboutBox";
import FrameComponent11 from "../components/FrameComponent11";

const DesktopWhite = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-20 leading-[normal] tracking-[normal] text-left text-mini text-darkslategray-200 font-roboto mq450:gap-5 mq750:gap-10">
      <WhitePageHeaderContainer />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
        <section className="flex-1 shadow-[0px_20px_27px_rgba(0,_0,_0,_0.05)] rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-10 max-w-full text-left text-10xl text-darkslategray-200 font-roboto-slab lg:pt-5 lg:pb-5 lg:box-border mq750:gap-5">
          <AboutBox bubblePlayImage="/bubble-play-image@2x.png" />
          <FrameComponent11 />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full bg-white text-center text-28xl text-royalblue font-roboto-slab">
          <div className="w-[782px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
            <div className="w-[145px] flex flex-col items-end justify-start gap-[18px]">
              <div className="self-stretch relative tracking-[0.13px] leading-[60px] font-semibold mq450:text-9xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
                94,846
              </div>
              <div className="w-[88px] relative text-lgi tracking-[0.13px] leading-[28px] font-semibold font-roboto text-darkslategray-200 inline-block min-w-[88px]">
                Download
              </div>
            </div>
            <div className="w-[58px] flex flex-col items-end justify-start gap-[18px]">
              <div className="relative tracking-[0.13px] leading-[60px] font-semibold inline-block min-w-[52px] mq450:text-9xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
                3+
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px text-lgi text-darkslategray-200 font-roboto">
                <div className="flex-1 relative tracking-[0.13px] leading-[28px] font-semibold inline-block min-w-[57px]">
                  Rating
                </div>
              </div>
            </div>
            <div className="w-[116px] flex flex-col items-end justify-start gap-[18px]">
              <div className="w-[100px] relative tracking-[0.13px] leading-[60px] font-semibold inline-block min-w-[100px] mq450:text-9xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
                219+
              </div>
              <div className="self-stretch relative text-lgi tracking-[0.13px] leading-[28px] font-semibold font-roboto text-darkslategray-200 inline-block min-w-[116px]">
                Count review
              </div>
            </div>
          </div>
        </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="m-0 relative text-inherit tracking-[0.13px] leading-[42px] font-semibold font-[inherit] mq450:text-4xl mq450:leading-[33px]">
                Contact Information
              </h3>
              <div className="flex flex-row items-start justify-start py-0 px-6 text-smi font-roboto">
                <div className="relative tracking-[0.13px] leading-[21px] whitespace-nowrap">
                  apiponfreefr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="w-[222px] flex flex-col items-start justify-start gap-[120px]">
          <div className="flex flex-row items-start justify-start py-0 px-[21px]">
            <div className="relative tracking-[0.13px] leading-[26px] font-semibold">
              bomb Fruit- perfect match
            </div>
          </div>
          <div className="self-stretch relative text-smi tracking-[0.13px] leading-[21px] text-center">
            All rights reserved. Copyright © 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopWhite;

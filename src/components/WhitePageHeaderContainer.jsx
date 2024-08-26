import { useMemo } from "react";
const redirectUrl = import.meta.env.VITE_PLAY_STORE_URL;

const WhitePageHeaderContainer = (props) => {
  const { className = "", layerBlur2BackgroundImage } = props;
  const whitePageHeaderContainerStyle = useMemo(() => {
    return {
      backgroundImage: layerBlur2BackgroundImage,
    };
  }, [layerBlur2BackgroundImage]);

  async function redirectUser() {
    window.location.replace(redirectUrl);
  }

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start bg-[url('/public/white-page-header-container2@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-28xl text-white font-roboto-slab ${className}`}
      style={whitePageHeaderContainerStyle}
    >
      <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08)_0.5%,_#202124_94.5%)] overflow-hidden flex flex-col items-start justify-end">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[126px] gap-40 mq450:gap-10 mq750:gap-20 mq750:pb-[82px] mq750:box-border">
          <header className="self-stretch flex flex-row items-center justify-between py-5 px-10 gap-5 text-left text-xl text-white font-roboto">
            <a className="[text-decoration:none] w-[248px] relative tracking-[0.13px] leading-[28px] font-semibold text-[inherit] inline-block shrink-0 whitespace-nowrap">
              bomb Fruit-perfect match
            </a>
            <a className="[text-decoration:none] w-[103px] relative tracking-[0.13px] leading-[28px] text-[inherit] inline-block shrink-0">
              Home
            </a>
          </header>
          <div className="self-stretch flex flex-col items-center justify-start gap-10 mq750:gap-5">
            <div className="self-stretch flex flex-col items-center justify-start gap-5">
              <h1 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-9xl mq1050:text-19xl">
                bomb Fruit- perfect match
              </h1>
              <div className="self-stretch relative text-5xl tracking-[0.13px] leading-[28px] font-roboto mq450:text-lgi mq450:leading-[22px]">
                Fruit Bomb Legend-Burst-to play, this is fun for the whole
                family!
              </div>
              <button
                className="cursor-pointer hover:opacity-80 [border:none] py-2.5 px-[15px] bg-white rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-100 mq450:w-[calc(100%_-_40px)]"
                onClick={redirectUser}
              >
                <div className="relative text-xl tracking-[0.13px] leading-[28px] font-semibold font-roboto text-indigo text-center inline-block min-w-[91px] mq450:text-base mq450:leading-[22px]">
                  Download
                </div>
              </button>
            </div>
            <div className="self-stretch relative text-xl tracking-[0.13px] leading-[28px] font-semibold font-roboto mq450:text-base mq450:leading-[22px]">
              Find us on
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePageHeaderContainer;

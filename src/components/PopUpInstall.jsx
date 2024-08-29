import { useMemo } from "react";

const PopUpInstall = (props) => {
  const {
    className = "",
    popUpInstallFlex,
    popUpInstallAlignSelf,
    installingApp,
    cancelInstall,
  } = props;
  const popUpInstallStyle = useMemo(() => {
    return {
      flex: popUpInstallFlex,
      alignSelf: popUpInstallAlignSelf,
    };
  }, [popUpInstallFlex, popUpInstallAlignSelf]);

  return (
    <div
      className={`w-[321px] rounded-lg bg-gainsboro-300 flex flex-col items-center justify-center p-5 box-border gap-5 max-w-full text-left text-xl text-black font-roboto ${className}`}
    >
      <div className="w-[321px] flex flex-col items-center justify-center gap-5 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-5">
          <div className="w-[122px] flex flex-row items-start justify-start flex-wrap content-start">
            <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit]">
              Install app
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5">
            <img
              className="h-14 w-14 relative rounded-341xl overflow-hidden shrink-0 object-cover"
              alt=""
              src="/install-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[159px]">
              <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start">
                <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit]">
                  App
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start text-sm text-dimgray">
                <div className="flex-1 relative tracking-[0.25px] leading-[20px]">
                  game1.play-store.pro
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end flex-wrap content-start py-0 pl-[152px] pr-0 gap-5 text-sm">
          <button
            className="cursor-pointer hover:opacity-80 [border:none] bg-gainsboro-300 flex-1 flex flex-row items-center justify-start min-w-[48px]"
            onClick={cancelInstall}
          >
            <div className="flex-1 relative tracking-[0.25px] leading-[20px]">
              Cancel
            </div>
          </button>
          <button
            className="cursor-pointer hover:opacity-80 [border:none] bg-gainsboro-300 flex-1 flex flex-row items-center justify-start min-w-[48px]"
            onClick={installingApp}
          >
            <div className="flex-1 relative tracking-[0.25px] leading-[20px]">
              Install
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpInstall;

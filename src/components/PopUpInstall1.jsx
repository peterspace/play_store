const PopUpInstall1 = (props) => {
  const { cancelInstall, addToScreen } = props;
  return (
    <div
      className={`self-stretch rounded-lg bg-gainsboro-300 flex flex-col items-center justify-center p-5 box-border gap-5 max-w-full text-left text-xl text-black font-roboto`}
    >
      <div className="w-[321px] flex flex-col items-center justify-center gap-5 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-5">
              <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-[inherit] inline-block min-w-[71px]">
                Chrome
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full text-center text-3xs text-dimgray">
              <div className="flex-1 relative tracking-[0.25px] leading-[20px] inline-block max-w-full">{`Touch & hold the widget to move it around the home screen`}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-5 text-center">
            <img
              className="w-14 h-14 relative rounded-341xl overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/install-image1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-5">
                <h3 className="m-0 w-[38px] relative text-inherit leading-[32px] font-normal font-[inherit] inline-block shrink-0 min-w-[38px]">
                  App
                </h3>
              </div>
              <div className="w-[139px] flex flex-row items-start justify-center text-sm text-dimgray">
                <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-[inherit]">
                  plinsters
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 pl-[145px] pr-0 gap-2.5 text-center text-3xs">
          <button
            className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-white flex flex-row items-start justify-start py-0 px-2.5"
            onClick={cancelInstall}
          >
            <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[32px]">
              Cancel
            </div>
          </button>
          <button
            className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-white flex flex-row items-start justify-start py-0 px-2.5 whitespace-nowrap"
            onClick={addToScreen}
          >
            <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[94px]">
              Add to home screen
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpInstall1;

const SupportAndPolicy = (props) => {
  const { className = "", isAppSupport, setIsAppSupport } = props;
  return (
    <div
      className={`w-[185px] flex flex-col items-start justify-start gap-5 text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-5">
        <div className="relative leading-[24px] inline-block min-w-[99px]">
          App support
        </div>
        {isAppSupport ? (
          <div
            className="overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6 h-6"
            onClick={() => setIsAppSupport(false)}
          >
            <img
              className="w-3.5 h-1.5 relative"
              alt=""
              src="/vector-191.svg"
            />
          </div>
        ) : (
          <div
            className="overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6 h-6"
            onClick={() => setIsAppSupport(true)}
          >
            <img className="w-3.5 h-1.5 relative" alt="" src="/vector-19.svg" />
          </div>
        )}
      </div>
      {isAppSupport && (
        <div className="self-stretch flex flex-row items-start justify-start gap-5 text-sm">
          <div className="overflow-hidden flex flex-row items-center justify-start p-0.5 box-border w-6 h-6">
            <img className="h-5 w-5 relative" alt="" src="/vector-18.svg" />
          </div>
          <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-[inherit]">
            Website
          </a>
        </div>
      )}
    </div>
  );
};

export default SupportAndPolicy;

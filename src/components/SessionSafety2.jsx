import PropTypes from "prop-types";

const SessionSafety2 = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start gap-5 max-w-full text-left text-lg text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch h-6 flex flex-row items-center justify-between gap-5 text-gray-100">
        <div className="self-stretch w-[91px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 relative leading-[24px]">
            Data safety
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start py-[5px] px-1">
          <img className="w-4 h-3.5 relative" alt="" src="/vector-5.svg" />
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full text-smi">
        <div className="h-fit flex-1 relative tracking-[0.2px] leading-[20px] inline-block max-w-full">
          Safety starts with understanding how developers collect and share your
          data. Data privacy and security practices may vary based on your use,
          region and age The developer provided this information and may update
          it over time.
        </div>
      </div>
      <div className="self-stretch h-[269px] rounded-lg border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-5 px-[19px] gap-5 text-sm">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-0 gap-5">
            <div className="overflow-hidden flex flex-row items-center justify-start p-0.5">
              <img
                className="h-5 w-[18px] relative"
                alt=""
                src="/vector-52.svg"
              />
            </div>
            <div className="self-stretch w-[258px] flex flex-col items-start justify-start gap-[5px] shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch w-[210px] relative tracking-[0.2px] leading-[20px] inline-block">
                  No data shared with third parties
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-2xs">
                <div className="h-4 flex-1 relative tracking-[0.3px] leading-[16px] inline-block">
                  <a
                    className="text-[inherit]"
                    href={`https://support.google.com/googleplay?p=data-safety&hl=en`}
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      {`Learn more `}
                    </span>
                  </a>
                   about how developers declare sharing
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[41px] flex flex-row items-start justify-start gap-5">
            <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-px">
              <img
                className="w-[22px] h-4 relative"
                alt=""
                src="/vector-8.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]">
                  This app may collect these data types
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start text-2xs">
                <div className="self-stretch w-[187px] relative tracking-[0.3px] leading-[16px] inline-block">
                  Location, Personal info and 6 others
                </div>
              </div>
            </div>
          </div>
          <div className="w-[216px] flex flex-row items-start justify-start gap-5">
            <div className="overflow-hidden flex flex-row items-center justify-start py-px px-1">
              <img
                className="h-[21px] w-4 relative"
                alt=""
                src="/vector-9.svg"
              />
            </div>
            <div className="h-5 flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]">
                  Data is encrypted in transit
                </div>
              </div>
            </div>
          </div>
          <div className="w-[279px] flex flex-row items-start justify-start gap-5">
            <div className="overflow-hidden flex flex-row items-center justify-start py-[3px] px-1 box-border w-6 h-6">
              <img
                className="h-[18px] w-4 relative"
                alt=""
                src="/vector-10.svg"
              />
            </div>
            <div className="h-5 flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px]">
                  You can request that data be deleted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-5 flex flex-row items-start justify-start py-0 px-3 box-border text-seagreen-300">
          <div className="self-stretch w-[70px] relative tracking-[0.15px] leading-[20px] inline-block">
            See details
          </div>
        </div>
      </div>
    </div>
  );
};

SessionSafety2.propTypes = {
  className: PropTypes.string,
};

export default SessionSafety2;

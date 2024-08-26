import PropTypes from "prop-types";

const FeaturesContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div 
      className="self-stretch flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[65px] box-border gap-2.5 min-h-[110px]"
      >
        <div className="h-[30px] w-[78px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[54px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Strategy
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[41px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                MOBA
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[83px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Single player
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[100px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[76px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Multi-player
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[75px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[51px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Stylised
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[65px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-2.5">
          <div className="w-[43px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch w-[42px] flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Anime
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[74px] rounded-9980xl bg-white border-gainsboro-200 border-[1px] border-solid box-border flex flex-col items-center justify-center py-1.5 px-[11px]">
          <div className="w-[50px] flex-1 flex flex-row items-center justify-start">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 relative tracking-[0.25px] leading-[18px]">
                Battling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesContainer.propTypes = {
  className: PropTypes.string,
};

export default FeaturesContainer;

import PropTypes from "prop-types";

const ReviewContent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[324px] h-[184px] shrink-0 flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-5 shrink-0">
        <div className="flex flex-col items-end justify-start gap-10">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="overflow-hidden flex flex-row items-center justify-start p-0.5 box-border w-6 h-6">
              <img className="h-5 w-5 relative" alt="" src="/vector-20.svg" />
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-0.5 box-border w-6 h-6">
              <img className="w-5 h-4 relative" alt="" src="/vector-211.svg" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-1.5">
            <img className="h-4 w-[11px] relative" alt="" src="/group-11.svg" />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px]">
          <a className="[text-decoration:none] w-[141px] h-5 relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
            Website
          </a>
          <div className="w-[177px] flex flex-col items-start justify-start">
            <div className="w-[141px] relative tracking-[0.25px] leading-[20px] inline-block">
              Support email
            </div>
            <div className="self-stretch h-5 relative tracking-[0.2px] leading-[20px] text-dimgray inline-block whitespace-nowrap z-[1]">
              support@plinsters.com
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <a className="[text-decoration:none] w-[141px] h-5 relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
                Address
              </a>
              <div className="self-stretch flex-1 relative tracking-[0.2px] leading-[20px] text-dimgray z-[1]">
                <p className="m-0">3100 Ocean park Blvd. Santa Monica,</p>
                <p className="m-0">California, 90405</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewContent2.propTypes = {
  className: PropTypes.string,
};

export default ReviewContent2;

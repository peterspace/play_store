import Helpfulness from "./Helpfulness";
import PropTypes from "prop-types";

const Review = ({ className = "", propGap, prop, propMinWidth }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-6 pb-5 box-border max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-5 gap-5 text-gray-100">
          <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[49px] gap-[9px]">
            <img
              className="h-8 w-8 rounded-341xl overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-12-1@2x.png"
            />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[103px]">
                Mir Nowman Ali
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
            <img className="h-4 w-1 relative" alt="" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-2xs">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 z-[3]"
            loading="lazy"
            alt=""
            src="/iconstartsmall-1.svg"
          />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0 z-[4]"
              loading="lazy"
              alt=""
              src="/iconstartsmall-1.svg"
            />
          </div>
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[82px]">
            14 August 2024
          </div>
        </div>
        <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
          Call Of Duty Mobile bringing familiar gameplay to mobile devices. The
          controls take some getting used to, but the game runs smoothly and the
          graphics are impressive. The multiplayer mode is fast-paced and fun,
          with a good selection of maps and modes. However, the game can feel a
          bit repetitive and the microtransactions can be aggressive. Overall,
          it's a good option for fans of first-person shooters and CoD
          enthusiasts, but may not offer anything new for a more innovative
          experience.
        </div>
        <Helpfulness
          propGap={propGap}
          prop={prop}
          propMinWidth={propMinWidth}
        />
      </div>
    </section>
  );
};

Review.propTypes = {
  className: PropTypes.string,
  propGap: PropTypes.string,
  prop: PropTypes.string,
  propMinWidth: PropTypes.string,
};

export default Review;

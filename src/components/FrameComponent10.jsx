import HelpfulReviewThree from "./HelpfulReviewThree";
import SupportAndPolicy from "./SupportAndPolicy";
import FrameComponent8 from "./FrameComponent8";
import SupportAndPolicy1 from "./SupportAndPolicy1";
import SimilarGamesItem from "./SimilarGamesItem";
import ChildrenGroup from "./ChildrenGroup";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-5 gap-5 text-base text-white">
          <div className="flex flex-row items-start justify-start gap-[9px]">
            <div className="h-8 w-8 rounded-341xl bg-lightcoral overflow-hidden shrink-0 flex flex-row items-start justify-start py-1.5 px-2.5 box-border">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[11px]">
                A
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-sm text-gray-100">
              <div className="relative tracking-[0.2px] leading-[20px] inline-block min-w-[83px]">
                Anket Verma
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 box-border w-6 h-6">
              <img className="h-4 w-1 relative" alt="" src="/vector-141.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-2xs">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            alt=""
            src="/iconstartsmall-11.svg"
          />
          <div className="h-3 w-[54px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-3 h-3 overflow-hidden z-[1]"
              alt=""
              src="/iconstartsmall-11.svg"
            />
            <img
              className="absolute top-[0px] left-[12px] w-3 h-3 overflow-hidden z-[2]"
              alt=""
              src="/iconstartsmall-11.svg"
            />
            <img
              className="absolute top-[0px] left-[24px] w-3 h-3 overflow-hidden z-[3]"
              alt=""
              src="/iconstartsmall-11.svg"
            />
            <img
              className="absolute top-[0px] left-[36px] w-3 h-3 overflow-hidden z-[4]"
              alt=""
              src="/iconstartsmall1.svg"
            />
          </div>
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[66px]">
            29 July 2024
          </div>
        </div>
        <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
          As a matter of fact, this game is quite good when it comes to gameplay
          and smoothness. I am talking about the smoothness felt between the
          hands, eyes and mind. It's quite an abstract thing. But nevertheless,
          its good and not headache and chaos inducing as in some other shooting
          games. The only flaw in the game is the apparent non difficulty when
          it comes to single player battle royale. Another is the time it takes
          to start some non popular modes, but to one his own preference.
          Overall good!
        </div>
        <HelpfulReviewThree />
        <div className="w-full relative tracking-[0.2px] leading-[20px] inline-block max-w-full">{`Score first in Call of Duty®: Mobile’s Season 7: Eternal Ghost! Ghost returns as a Mythic Ghost - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the Season 7 Premium Battle Pass now!`}</div>
        <SupportAndPolicy />
        <FrameComponent8 />
        <SupportAndPolicy1 />
        
      
        <div className="self-stretch h-[5px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full mt-[40px] mb-[80px]">
          <div className="self-stretch flex-1 relative bg-whitesmoke max-w-full" />
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;

import PropTypes from "prop-types";

const GameDescription = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="w-[325px] relative tracking-[0.2px] leading-[20px] text-dimgray inline-block max-w-full">{`Score first in Call of Duty®: Mobile’s Season 7: Eternal Ghost! Ghost returns as a Mythic Ghost - Eternal Siege in the War's Paragon Draw! Jump into the new Ground War map, Collateral, for wide-open desert landscapes. Score and defend football-style goals in the new MP mode, Uplink! Be the gamebreaker with the Epic Surf Warrior - Quarterback & his Epic ISO - Cornerback in the Season 7 Premium Battle Pass now!`}</div>
        <div className="w-[326px] flex flex-row items-start justify-start relative max-w-full text-lg">
          <div className="relative leading-[24px] inline-block min-w-[99px]">
            App support
          </div>
          <div className="!m-[0] absolute h-6 top-[0px] right-[0px] bottom-[0px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[5px] box-border w-6">
            <img
              className="w-3.5 h-1.5 relative"
              loading="lazy"
              alt=""
              src="/vector-191.svg"
            />
          </div>
        </div>
        <div className="w-[284px] flex flex-row items-start justify-start gap-5">
          <div className="flex flex-col items-end justify-start gap-10">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="overflow-hidden flex flex-row items-center justify-start p-0.5 box-border w-6 h-6">
                <img
                  className="h-5 w-5 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-20.svg"
                />
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start py-1 px-0.5 box-border w-6 h-6">
                <img
                  className="w-5 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-192.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-1.5">
              <img
                className="h-4 w-[11px] relative"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
            <a className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
              Website
            </a>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[141px] relative tracking-[0.25px] leading-[20px] inline-block">
                Support email
              </div>
              <div className="relative tracking-[0.2px] leading-[20px] text-dimgray whitespace-nowrap z-[1]">
                CoDMobile@activision.com
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
              <div className="flex-1 flex flex-col items-start justify-start">
                <a className="[text-decoration:none] w-[141px] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block">
                  Address
                </a>
                <div className="relative tracking-[0.2px] leading-[20px] text-dimgray z-[1]">
                  <p className="m-0">3100 Ocean park Blvd. Santa Monica,</p>
                  <p className="m-0">California, 90405</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="w-[185px] flex flex-row items-start justify-start gap-5">
            <div className="overflow-hidden flex flex-row items-center justify-start py-0.5 px-1 box-border w-6 h-6">
              <img className="h-5 w-4 relative" alt="" src="/vector-22.svg" />
            </div>
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] font-roboto text-sm bg-[transparent] h-5 flex-1 relative tracking-[0.25px] leading-[20px] text-gray-100 text-left inline-block min-w-[85px] p-0"
              placeholder="Privacy Policy"
              type="text"
            />
          </div>
          <div className="self-stretch h-px relative bg-whitesmoke-200 z-[1]" />
        </div>
      </div>
    </section>
  );
};

GameDescription.propTypes = {
  className: PropTypes.string,
};

export default GameDescription;

import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-px max-w-full text-left text-xs text-dimgray font-roboto ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <div className="relative leading-[48px] inline-block min-w-[88px]">
                Terms of service
              </div>
              <a className="[text-decoration:none] relative text-2xs leading-[48px] text-[inherit] inline-block min-w-[39px]">
                Privacy
              </a>
            </div>
            <div className="flex flex-row items-start justify-start gap-6">
              <div className="relative leading-[48px] inline-block min-w-[61px] z-[1]">
                Developers
              </div>
              <div className="relative leading-[48px] inline-block min-w-[71px] z-[1]">
                Google Store
              </div>
            </div>
            <div className="relative text-2xs leading-[48px] z-[2]">
              Russia (English (United Kingdom))
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[48px] inline-block min-w-[101px]">
              About Google Play
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-2xs">
              <div className="relative leading-[48px] inline-block min-w-[108px] z-[1]">
                All prices include VAT.
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-white flex flex-row items-center justify-between p-2.5 gap-5 z-[4] text-left text-sm text-dimgray font-roboto">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-start py-0 px-[11px]">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[46px]">
              Games
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[33px]">
              Apps
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
          <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[47px]">
            Movies
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="w-[41px] flex flex-row items-start justify-start py-0 px-2 box-border">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[41px]">
            Books
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-start py-0 px-[15px]">
            <img className="h-6 w-6 relative" alt="" src="/group-5.svg" />
          </div>
          <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[54px]">
            Children
          </div>
        </div>
      </footer>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

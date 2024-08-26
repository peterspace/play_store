import PropTypes from "prop-types";

const DescriptionTag = ({ className = "", similarImage }) => {
  return (
    <div
      className={`w-[282px] flex flex-row items-start justify-start relative gap-2 text-left text-5xl text-whitesmoke-200 font-roboto ${className}`}
    >
      <img
        className="h-14 w-14 relative rounded-xl overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={similarImage}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-px">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start">
          <h2 className="m-0 flex-1 relative text-inherit leading-[32px] font-normal font-[inherit]">
            Call of Duty: Mobile Season 7
          </h2>
        </div>
        <div className="flex flex-row items-start justify-start flex-wrap content-start text-base text-seagreen-200">
          <div className="relative tracking-[0.1px] leading-[24px]">
            Activision Publishing, Inc.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start flex-wrap content-start gap-x-[9px] gap-y-[7px] text-xs text-darkgray">
          <div className="relative tracking-[0.3px] leading-[16px] inline-block min-w-[74px]">
            Contains ads
          </div>
          <div className="relative text-2xs tracking-[0.3px] leading-[16px] inline-block min-w-[96px]">
            In-app purchases
          </div>
        </div>
      </div>
      <img
        className="h-5 w-5 absolute !m-[0] top-[39px] right-[73px] overflow-hidden shrink-0 z-[1]"
        loading="lazy"
        alt=""
      />
    </div>
  );
};

DescriptionTag.propTypes = {
  className: PropTypes.string,
  similarImage: PropTypes.string,
};

export default DescriptionTag;

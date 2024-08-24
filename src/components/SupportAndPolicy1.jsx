import PropTypes from "prop-types";

const SupportAndPolicy1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[185px] flex flex-col items-start justify-start gap-5 text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-5">
        <div className="overflow-hidden flex flex-row items-center justify-start py-0.5 px-1 box-border w-6 h-6">
          <img className="h-5 w-4 relative" alt="" src="/vector-22.svg" />
        </div>
        <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-[inherit]">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

SupportAndPolicy1.propTypes = {
  className: PropTypes.string,
};

export default SupportAndPolicy1;

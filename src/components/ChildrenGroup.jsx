import PropTypes from "prop-types";

const ChildrenGroup = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-sm text-dimgray font-helvetica ${className}`}
    >
      <div className="flex flex-row items-start justify-start">
        <div className="relative tracking-[0.25px] leading-[32px] inline-block min-w-[125px]">
          Children and family
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-1.5">
          <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[82px]">
            Parent guide
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-smi">
          <div className="relative tracking-[0.2px] leading-[32px] inline-block min-w-[88px]">
            Family sharing
          </div>
        </div>
      </div>
    </div>
  );
};

ChildrenGroup.propTypes = {
  className: PropTypes.string,
};

export default ChildrenGroup;

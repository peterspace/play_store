import { useMemo } from "react";
import PropTypes from "prop-types";

const Feature = ({
  className = "",
  propFlex,
  propMinWidth,
  adventure,
  propMinWidth1,
}) => {
  const featureStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const adventureStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 rounded bg-button-primary overflow-hidden flex flex-row items-center justify-center p-2.5 box-border min-w-[62px] text-left text-sm text-gray-300 font-poppins ${className}`}
      // style={featureStyle}
    >
      <div
        className="relative font-medium inline-block min-w-[75px]"
        style={adventureStyle}
      >
        {adventure}
      </div>
    </div>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
  adventure: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Feature;

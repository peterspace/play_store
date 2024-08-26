import AboutBox from "./AboutBox";
import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-2.5 box-border max-w-full ${className}`}
    >
      <AboutBox
        propAlignSelf="unset"
        propPadding="unset"
        propWidth="1040px"
        propMinHeight="1334px"
        propMinHeight1="692px"
        propFlex="0.9615"
        propFlex1="unset"
        propWidth1="490px"
        bubblePlayImage="/bubble-play-image@2x.png"
      />
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;

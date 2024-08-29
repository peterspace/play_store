import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";

const FrameComponent21 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start gap-[20.1px] text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch h-[0.5px] relative bg-gray-700 overflow-hidden shrink-0 z-[1]">
        <div className="absolute top-[0.5px] left-[0px] bg-gray-700 w-full h-full overflow-hidden hidden" />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-10">
        <div className="relative leading-[24px] inline-block min-w-[63px]">
          Contact
        </div>
      </div>
      <ContactInfo propTextDecoration="none" />
      <div className="self-stretch h-[0.5px] relative bg-gray-700 overflow-hidden shrink-0" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-smi text-darkslategray-200">
        <div className="w-[222px] relative tracking-[0.13px] leading-[21px] inline-block shrink-0">
          All rights reserved. Copyright © 2024
        </div>
      </div>
    </footer>
  );
};

FrameComponent21.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent21;

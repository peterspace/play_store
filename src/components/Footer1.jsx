import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-5 text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch h-[0.5px] relative bg-gray-700 overflow-hidden shrink-0" />
      <div className="flex flex-row items-start justify-start py-0 px-10">
        <div className="relative leading-[24px] inline-block min-w-[63px]">
          Contact
        </div>
      </div>
      <ContactInfo propTextDecoration="unset" />
      <div className="self-stretch h-[0.5px] relative bg-gray-700 overflow-hidden shrink-0" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[76px] text-center text-smi text-darkslategray-200">
        <div className="flex-1 relative tracking-[0.13px] leading-[21px]">
          All rights reserved. Copyright © 2024
        </div>
      </div>
    </section>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;

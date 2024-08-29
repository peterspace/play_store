import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-5 text-left text-lg text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch h-[0.5px] relative bg-gray-700 overflow-hidden shrink-0" />
      <div className="flex flex-row items-start justify-start py-0 px-10">
        <div className="relative leading-[24px] inline-block min-w-[63px]">
          Contact
        </div>
      </div>
      <ContactInfo />
    </section>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;

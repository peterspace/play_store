import CaroselReviewContainer from "./CaroselReviewContainer";
import PropTypes from "prop-types";

const FrameComponent18 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[400px] flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-5xl text-gray-100 font-roboto ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <CaroselReviewContainer
          propWidth="335px"
          propHeight="unset"
          propFlex="1"
          sliderItem="/slideritem5@2x.png"
          sliderItem1="/slideritem-15@2x.png"
          sliderItem2="/slideritem-25@2x.png"
          sliderItem3="/slideritem-35@2x.png"
          sliderItem4="/slideritem-4@2x.png"
          sliderItem5="/slideritem-5@2x.png"
          sliderItem6="/slideritem-6@2x.png"
          sliderItem7="/slideritem-7@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[65px]">
                About
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;

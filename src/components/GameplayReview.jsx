import ReviewFeedbackOne from "./ReviewFeedbackOne";
import PropTypes from "prop-types";

const GameplayReview = ({ className = "" }) => {
  return (
    <div
      className={`w-[325px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-5 max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
        Call Of Duty Mobile bringing familiar gameplay to mobile devices. The
        controls take some getting used to, but the game runs smoothly and the
        graphics are impressive. The multiplayer mode is fast-paced and fun,
        with a good selection of maps and modes. However, the game can feel a
        bit repetitive and the microtransactions can be aggressive. Overall,
        it's a good option for fans of first-person shooters and CoD
        enthusiasts, but may not offer anything new for a more innovative
        experience.
      </div>
      <ReviewFeedbackOne
        propGap="15px"
        reviewFeedback="547"
        propMinWidth="22px"
      />
    </div>
  );
};

GameplayReview.propTypes = {
  className: PropTypes.string,
};

export default GameplayReview;

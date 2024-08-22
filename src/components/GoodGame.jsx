import QualityFeedback from "./QualityFeedback";
import PropTypes from "prop-types";

const GoodGame = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start gap-5 max-w-full text-left text-sm text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
        As a matter of fact, this game is quite good when it comes to gameplay
        and smoothness. I am talking about the smoothness felt between the
        hands, eyes and mind. It's quite an abstract thing. But nevertheless,
        its good and not headache and chaos inducing as in some other shooting
        games. The only flaw in the game is the apparent non difficulty when it
        comes to single player battle royale. Another is the time it takes to
        start some non popular modes, but to one his own preference. Overall
        good!
      </div>
      <QualityFeedback />
    </div>
  );
};

GoodGame.propTypes = {
  className: PropTypes.string,
};

export default GoodGame;

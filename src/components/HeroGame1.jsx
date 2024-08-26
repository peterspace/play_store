import HeroGame from "./HeroGame";
import PropTypes from "prop-types";

const HeroGame1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full ${className}`}
    >
      <HeroGame
        heroGameAlignSelf="unset"
        heroGameBackgroundImage="url('/hero-game@3x.png')"
        heroGameFlex="1"
      />
    </section>
  );
};

HeroGame1.propTypes = {
  className: PropTypes.string,
};

export default HeroGame1;

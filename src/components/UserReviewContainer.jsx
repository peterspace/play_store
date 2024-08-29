import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
const redirectUrlPlayStore = import.meta.env.VITE_PLAY_STORE_URL;
const redirectUrlAppStore = import.meta.env.VITE_APP_STORE_URL;

const UserReviewContainer = ({ className = "" }) => {
  async function redirectUserPlayStore() {
    window.location.replace(redirectUrlPlayStore);
  }

  async function redirectUserAppStore() {
    window.location.replace(redirectUrlAppStore);
  }
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-sm text-seagreen-300 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="w-full overflow-x-auto flex flex-row items-start justify-start py-5 pl-5 pr-[15px] box-border gap-10 max-w-full">
          <ReviewCard
            propWidth="300px"
            propFlex="unset"
            propMinWidth="unset"
            propHeight="unset"
            propWidth1="unset"
            propAlignSelf="unset"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="unset"
            propWidth2="unset"
            mirNowmanAli="Michael Short"
            propAlignSelf2="unset"
            propFlex3="unset"
            propDisplay="inline-block"
            propMinWidth1="89px"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall.svg"
            propWidth3="unset"
            propHeight2="unset"
            august2024="26 August 2024"
            propHeight3="unset"
            propFlex4="unset"
            propMinWidth2="82px"
            propDisplay1="inline-block"
            propAlignSelf3="unset"
            propHeight4="unset"
            callOfDutyMobileBringingFamili="Fun game, game play is what you see in the ads. Like most overstimulation games, it has multiple 'currencies' and a dozen progress bars, waiting for upgrades and ad bypasses. But so far the in-game ads are not intrusive and the game play with no purchases is great. I have yet to pay a dime but I'm still competitive and can play the next round any time."
            propHeight5="unset"
            propDisplay2="unset"
            propWidth4="unset"
            propHeight6="unset"
            propAlignSelf4="unset"
            propFlex5="unset"
            propDisplay3="inline-block"
            propMinWidth3="33px"
          />
          <ReviewCard
            propWidth="300px"
            propFlex="unset"
            propMinWidth="unset"
            propHeight="32px"
            propWidth1="90px"
            propAlignSelf="stretch"
            propFlex1="1"
            propAlignSelf1="stretch"
            propFlex2="1"
            propWidth2="unset"
            mirNowmanAli="Daniel Wattier"
            propAlignSelf2="stretch"
            propFlex3="1"
            propDisplay="unset"
            propMinWidth1="unset"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall-1.svg"
            propWidth3="82px"
            propHeight2="16px"
            august2024="21 August 2024"
            propHeight3="unset"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="unset"
            propAlignSelf3="stretch"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="Game is fine. Mindless, minimal input, something that doesn't take much attention. It has copied the progression of Clash Royale, so there's always numbers to watch go up. In the initial hour or so of gameplay, there are no mandatory ads. Just optional ones to get bonus money. After this initial hour, there is a mandatory ad after every match. Uninstalled as a result of the bait-and-switch tactics."
            propHeight5="220px"
            propDisplay2="inline-block"
            propWidth4="33px"
            propHeight6="20px"
            propAlignSelf4="stretch"
            propFlex5="1"
            propDisplay3="unset"
            propMinWidth3="unset"
          />
          <ReviewCard
            propWidth="300px"
            propFlex="unset"
            propMinWidth="unset"
            propHeight="unset"
            propWidth1="unset"
            propAlignSelf="unset"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="unset"
            propWidth2="53px"
            mirNowmanAli="S Clever"
            propAlignSelf2="unset"
            propFlex3="1"
            propDisplay="inline-block"
            propMinWidth1="unset"
            propHeight1="20px"
            iconStartSmall2="/iconstartsmall.svg"
            iconStartSmall3="/iconstartsmall.svg"
            iconStartSmall4="/iconstartsmall.svg"
            propWidth3="82px"
            propHeight2="16px"
            august2024="19 August 2024"
            propHeight3="unset"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="unset"
            propAlignSelf3="stretch"
            propHeight4="200px"
            callOfDutyMobileBringingFamili={`This is a good game all in all. My one complaint, that loses a star, is manipulative in game purchases. There are several "deals" and packages to buy that promise to remove "unsolicited ads." But to my knowledge there aren't any unsolicited ads in the game, only the option to watch ads for a reward. So don't waste your money thinking it'll let you skip the voluntary ads and get free rewards.`}
            propHeight5="220px"
            propDisplay2="inline-block"
            propWidth4="33px"
            propHeight6="20px"
            propAlignSelf4="stretch"
            propFlex5="1"
            propDisplay3="unset"
            propMinWidth3="unset"
          />
          <ReviewCard
            propWidth="300px"
            propFlex="unset"
            propMinWidth="unset"
            propHeight="32px"
            propWidth1="80px"
            propAlignSelf="stretch"
            propFlex1="1"
            propAlignSelf1="stretch"
            propFlex2="1"
            propWidth2="unset"
            mirNowmanAli="Ryan Brewer"
            propAlignSelf2="stretch"
            propFlex3="1"
            propDisplay="unset"
            propMinWidth1="unset"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall.svg"
            propWidth3="82px"
            propHeight2="16px"
            august2024="16 August 2024"
            propHeight3="unset"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="unset"
            propAlignSelf3="stretch"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="Update 8/15/24: crashes stopped. Not sure when cause I stopped playing it for several months. Like the new features but once your base blocks are maxed you can't do anything else with them if you keep playin Update 4/10/24: game crashes atleast once a day now. Still a fun game but it freezes at the wrong time almost everytime. Never while in homescreen. Always during a match. Orginal post: Addicting game but prices for add ons could be cheaper for sure."
            propHeight5="240px"
            propDisplay2="inline-block"
            propWidth4="33px"
            propHeight6="20px"
            propAlignSelf4="stretch"
            propFlex5="1"
            propDisplay3="unset"
            propMinWidth3="unset"
          />
        </div>
        <div className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-start py-0 px-[22px]"  onClick={redirectUserPlayStore}>
          <div className="relative tracking-[0.15px] leading-[20px]">
            See all reviews on google play
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 text-lg text-gray-100">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[24px]">Apps store reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UserReviewContainer.propTypes = {
  className: PropTypes.string,
};

export default UserReviewContainer;

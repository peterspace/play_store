import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
const redirectUrlPlayStore = import.meta.env.VITE_PLAY_STORE_URL;
const redirectUrlAppStore = import.meta.env.VITE_APP_STORE_URL;
const AppStoreCarouselContainer = ({ className = "" }) => {
  async function redirectUserAppStore() {
    window.location.replace(redirectUrlAppStore);
  }
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border max-w-full text-left text-sm text-seagreen-300 font-roboto ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-5 max-w-full">
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
            mirNowmanAli="2Youtime2waste"
            propAlignSelf2="unset"
            propFlex3="unset"
            propDisplay="inline-block"
            propMinWidth1="108px"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall-1.svg"
            iconStartSmall4="/iconstartsmall-1.svg"
            propWidth3="unset"
            propHeight2="unset"
            august2024="5 January 2024"
            propHeight3="unset"
            propFlex4="unset"
            propMinWidth2="80px"
            propDisplay1="inline-block"
            propAlignSelf3="unset"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="Screen your adds better. Solitaire cash add is consistently freezing the awesomeness of game play! The game is addictive and totally worth the wasted time playing. I have neglected things that I should be getting accomplished, playing this amazing game. Simple, yet challenging! A degree in algebra will help you overcome the difficulty of the levels, it’s all about the numbers. We shall overcome! I’m about ready to delete game, just because of the cash solitaire advertising. Every time this ad comes up, the game play freezes and I need to “restart!” I’m getting frustrated with the lack of quality control on your behalf of selecting advertisers. Awesome, addictive game. Simple and entertaining waste of time. Has provided a diversion while waiting to accomplish more important things in life. Moving on to more “real” life activities until you demand your advertising companies to comply and ensure game play is consistent and not frozen. Frustrated player, with your quality control in allowing Solitaire Cash” advertising! Get rid of them, that game is a scam anyway."
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
            propWidth1="62px"
            propAlignSelf="stretch"
            propFlex1="1"
            propAlignSelf1="stretch"
            propFlex2="1"
            propWidth2="unset"
            mirNowmanAli="Jailyn893"
            propAlignSelf2="stretch"
            propFlex3="1"
            propDisplay="unset"
            propMinWidth1="unset"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall.svg"
            iconStartSmall4="/iconstartsmall.svg"
            propWidth3="86px"
            propHeight2="16px"
            august2024="17 October 2022"
            propHeight3="unset"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="unset"
            propAlignSelf3="stretch"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="I’ve had this game for awhile now. I put 3 stars because it is honestly one of my favorite games but, with that comes a lot of difficulties. I’ve tried to just enjoy the game and deal with the issues but it really has gotten worse and worse. First, as you see in every other review the amount of ads are absolutely ridiculous. If they could put one in the middle of a game I think they would. Second, I can play the game for maybe a good 30 minutes and it will overheat my phone and begin to glitch me out. At that point I must wait for my phone to cool and even then I usually don’t play again until the next day because it’s frustrating especially when playing the piggy race. Lastly has just happened, I had to update the game - big mistake. I now open the app and it at first glitched the piggy race I couldn’t see my progress or anyone for that matter. I could still play but it would not show the piggy race progress. Now the app is completely glitched. I can’t play or press anything. It only shows my level/building. Truly loved this game but at this rate I’m getting ready to erase it. Too many issues that honestly I haven’t seen any other app do. And clearly no matter how many updates nothing is going to fix it."
            propHeight5="620px"
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
            propWidth1="unset"
            propAlignSelf="stretch"
            propFlex1="unset"
            propAlignSelf1="unset"
            propFlex2="1"
            propWidth2="50px"
            mirNowmanAli="Uberhip"
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
            august2024="26 August 2022"
            propHeight3="unset"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="unset"
            propAlignSelf3="stretch"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="Hello This is Wallacehat Level 979 in Grandmaster on my way to No. 1 - again. I’m going to start with an apology for all of those who have just joined this game in the last few months. This game used to be achievable, they used to give great rewards, it used to have big gold pots, and I used to be able to decimate all. I apologize because after becoming number one twice, the developers have come up with ways to short change me. Slow me down. Reducing gold awards by almost a third. Reducing multipliers by half. Glitching the game out when I have a stack of giants about to crush my opponent only to say “protected“ which never seems to be the case when I do not have a stacked army about to decimate all. it’s OK, progress is a little slower, but I’ve destroyed these AI players at least 10 to 15 times each. I’m unstoppable. Inevitable. I can’t wait to see what their next “update“ brings, as it seems like they can’t stop me, so they just keep trying to come up with ways to make the game less enjoyable, and unfortunately that punishes you all. Good luck. On my way to the top."
            propHeight5="560px"
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
            propWidth1="81px"
            propAlignSelf="stretch"
            propFlex1="1"
            propAlignSelf1="stretch"
            propFlex2="1"
            propWidth2="unset"
            mirNowmanAli="Banana1130"
            propAlignSelf2="stretch"
            propFlex3="1"
            propDisplay="unset"
            propMinWidth1="unset"
            propHeight1="unset"
            iconStartSmall2="/iconstartsmall-1.svg"
            iconStartSmall3="/iconstartsmall.svg"
            iconStartSmall4="/iconstartsmall.svg"
            propWidth3="91px"
            propHeight2="unset"
            august2024="11 February 2024"
            propHeight3="16px"
            propFlex4="1"
            propMinWidth2="unset"
            propDisplay1="inline-block"
            propAlignSelf3="unset"
            propHeight4="200px"
            callOfDutyMobileBringingFamili="The game used to be super fun to play. You competed against other players whose chosen mob was a similar level as yours. Over the past month or so, more than half the opponents I compete against have a mob 7 levels above mine. Not only are they are more powerful and/or faster mob, but generally the enemy mob has things that boost their abilities (cannons that are faster than is available to you, cannons that shoot giant mobs, stronger mobs, little maps that are way more advantageous to them, etc). So they’re already a higher level and now they have boosts. I just attempted to play probably 10 matches and all of them were against mobs 5+ levels above mine and I could only win a couple. What’s the point of playing if you can’t ever win a match and there’s no way around that because as you level up your mobs, they just pit you against even higher leveled mobs?"
            propHeight5="460px"
            propDisplay2="inline-block"
            propWidth4="33px"
            propHeight6="20px"
            propAlignSelf4="stretch"
            propFlex5="1"
            propDisplay3="unset"
            propMinWidth3="unset"
          />
        </div>
        <div className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-start py-0 px-[22px]"  onClick={redirectUserAppStore}>
          <div className="relative tracking-[0.15px] leading-[20px]">
            See all reviews on apple store
          </div>
        </div>
      </div>
    </section>
  );
};

AppStoreCarouselContainer.propTypes = {
  className: PropTypes.string,
};

export default AppStoreCarouselContainer;

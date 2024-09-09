import StoreContainer from "./StoreContainer";
import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
const redirectUrlPlayStore = import.meta.env.VITE_PLAY_STORE_URL;
const redirectUrlAppStore = import.meta.env.VITE_APP_STORE_URL;

const FrameComponent19 = ({ className = "" }) => {
  async function redirectUserPlayStore() {
    window.location.replace(redirectUrlPlayStore);
  }

  async function redirectUserAppStore() {
    window.location.replace(redirectUrlAppStore);
  }

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-5 max-w-full text-left text-sm text-gray-100 font-roboto ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-3 text-seagreen-300">
        <div className="relative tracking-[0.15px] leading-[20px] inline-block min-w-[33px]">
          More
        </div>
      </div>
      <>
        <div className="self-stretch flex flex-col items-start justify-start text-5xl">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[82px] mq450:text-lgi mq450:leading-[19px]">
                Ratings
              </h2>
            </div>
          </div>
        </div>
      </>
      <div className="self-stretch flex flex-row items-start justify-between pt-0 px-5 pb-5 box-border max-w-full gap-5 mq1050:flex-wrap">
        <StoreContainer
          playStores="Play stores"
          ratingValue="4.6"
          propPadding="0px 11px 0px 0px"
          k="498k"
          propMinWidth="26px"
          propWidth="160px"
          propWidth1="90px"
          propWidth2="11px"
          propWidth3="34px"
          playstore="/playstore-1@2x.png"
          onClick={redirectUserPlayStore}
        />
        <StoreContainer
          playStores="Apple store"
          ratingValue="4.5"
          propPadding="unset"
          k="280.0K"
          propMinWidth="37px"
          propWidth="129px"
          propWidth1="70px"
          propWidth2="50px"
          propWidth3="50px"
          playstore="/appstore@2x.png"
          onClick={redirectUserAppStore}
        />
      </div>

      <div className="self-stretch flex flex-col items-start justify-start text-5xl">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-[inherit] inline-block min-w-[90px] mq450:text-lgi mq450:leading-[19px]">
              Reviews
            </h2>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 text-lg">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[24px]">Play store reviews</div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto flex flex-row items-start justify-start p-5 box-border gap-10 max-w-full mq625:gap-5">
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
          onClick={redirectUserPlayStore}
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
          propWidth2="unset"
          mirNowmanAli="Daniel Wattier"
          propAlignSelf2="unset"
          propFlex3="unset"
          propDisplay="inline-block"
          propMinWidth1="90px"
          propHeight1="unset"
          iconStartSmall2="/iconstartsmall-1.svg"
          iconStartSmall3="/iconstartsmall-1.svg"
          iconStartSmall4="/iconstartsmall-1.svg"
          propWidth3="unset"
          propHeight2="unset"
          august2024="21 August 2024"
          propHeight3="unset"
          propFlex4="unset"
          propMinWidth2="82px"
          propDisplay1="inline-block"
          propAlignSelf3="unset"
          propHeight4="200px"
          callOfDutyMobileBringingFamili="Game is fine. Mindless, minimal input, something that doesn't take much attention. It has copied the progression of Clash Royale, so there's always numbers to watch go up. In the initial hour or so of gameplay, there are no mandatory ads. Just optional ones to get bonus money. After this initial hour, there is a mandatory ad after every match. Uninstalled as a result of the bait-and-switch tactics."
          propHeight5="unset"
          propDisplay2="unset"
          propWidth4="unset"
          propHeight6="unset"
          propAlignSelf4="unset"
          propFlex5="unset"
          propDisplay3="inline-block"
          propMinWidth3="33px"
          onClick={redirectUserPlayStore}
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
          onClick={redirectUserPlayStore}
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
          onClick={redirectUserPlayStore}
        />
      </div>
      <div
        className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-start py-0 px-[22px] text-seagreen-300"
        onClick={redirectUserPlayStore}
      >
        <div className="relative tracking-[0.15px] leading-[20px]">
          See all reviews on google play
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 text-lg">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[24px]">Apps store reviews</div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto flex flex-row items-start justify-start p-5 box-border gap-10 max-w-full mq625:gap-5">
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
          onClick={redirectUserAppStore}
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
          propWidth2="unset"
          mirNowmanAli="Jailyn893"
          propAlignSelf2="unset"
          propFlex3="unset"
          propDisplay="inline-block"
          propMinWidth1="62px"
          propHeight1="unset"
          iconStartSmall2="/iconstartsmall-1.svg"
          iconStartSmall3="/iconstartsmall.svg"
          iconStartSmall4="/iconstartsmall.svg"
          propWidth3="unset"
          propHeight2="unset"
          august2024="17 October 2022"
          propHeight3="unset"
          propFlex4="unset"
          propMinWidth2="86px"
          propDisplay1="inline-block"
          propAlignSelf3="unset"
          propHeight4="200px"
          callOfDutyMobileBringingFamili="I’ve had this game for awhile now. I put 3 stars because it is honestly one of my favorite games but, with that comes a lot of difficulties. I’ve tried to just enjoy the game and deal with the issues but it really has gotten worse and worse. First, as you see in every other review the amount of ads are absolutely ridiculous. If they could put one in the middle of a game I think they would. Second, I can play the game for maybe a good 30 minutes and it will overheat my phone and begin to glitch me out. At that point I must wait for my phone to cool and even then I usually don’t play again until the next day because it’s frustrating especially when playing the piggy race. Lastly has just happened, I had to update the game - big mistake. I now open the app and it at first glitched the piggy race I couldn’t see my progress or anyone for that matter. I could still play but it would not show the piggy race progress. Now the app is completely glitched. I can’t play or press anything. It only shows my level/building. Truly loved this game but at this rate I’m getting ready to erase it. Too many issues that honestly I haven’t seen any other app do. And clearly no matter how many updates nothing is going to fix it."
          propHeight5="unset"
          propDisplay2="unset"
          propWidth4="unset"
          propHeight6="unset"
          propAlignSelf4="unset"
          propFlex5="unset"
          propDisplay3="inline-block"
          propMinWidth3="33px"
          onClick={redirectUserAppStore}
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
          onClick={redirectUserAppStore}
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
          onClick={redirectUserAppStore}
        />
      </div>
      <div
        className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-start py-0 px-[22px] text-seagreen-300"
        onClick={redirectUserAppStore}
      >
        <div className="relative tracking-[0.15px] leading-[20px]">
          See all reviews on apple store
        </div>
      </div>
    </div>
  );
};

FrameComponent19.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent19;

import { useMemo } from "react";
const redirectUrl = import.meta.env.VITE_PLAY_STORE_URL;
const description = `Make juicy lines of 3 or more adorable fruits. Bomb around hundreds of uniquely perplexing levels in this amazing puzzle adventure. Tired of working or studying? To pass time and enjoy the casual Happy Fruits Tap! There are almost 250 levels in Happy Fruits Tap. Click on 2 or more fruits of the same to blast. Your purpose is to remove fruits as many as possible. Clear away the barriers by eliminating fruits. Follow the adventure, the best incredibly fresh fruit puzzle game will satisfy your sweet teeth! Happy Fruits Tap is looking forward to you to join in! Immerse yourself into this yummy Fruits Bomb where garden strawberry, green apple, fresh blueberry, juicy orange and delicious grapes are everywhere. Bomb your way out and enjoy the fun of addictive match 3! Fruit Block will lead you to a world of juicy fruit. Start your puzzle adventure by blasting the same color fruits. Juice fruit games offer a variety of gameplay modes to keep you entertained. Tap game lets you swipe and swap fruits to create mouthwatering combos and earn points. Connect three or more identical fruits in a row, and watch them burst with sweet jamba juice! With each level you conquer, the difficulty increases, putting your matching skills to the test in cube games. The process of adventure is fun and relaxing, you can experience a magical feeling of juice filling the screen. Connecting more pieces of the same color of fruits smartly, unexpected surprises will appear. Match 3 fruits and complete different tasks in cube games. You can use restricted moves to burst the fruit. Cube games give you many rewards so that you can complete your mission easily. Hundreds of precious levels with fun and sweetness are waiting for you in the tap game. In a juice jam game, match the jamba juice cubes to enjoy the addictive game. Make many juices like guava juice by matching the fruit in a cube game. By the way, Fruit Block is always popular with beautiful ladies, so what are you waiting for, let&#39;s start the journey together! How to play Fruit Burst: - Slice to connect 3 or more fruits to blast! - If you can connect more than 7 fruits, a blender blade will spin &amp; create massive fresh juice! - Then it&#39;s Blast Party Time! Do you have the moves to win? - Complete different goals to pass the level, such as delivering keys to the portal, breaking ice cubes, unlock fruits... You will find this game is so addicting! - 1000+ juicy levels of the best connect 3 game with different challenging goals - Special challenges such as breaking ice cubes and delivering portal keys - Happy blast party time after goal completion - Easy and fun to play, even more fun to master with skills - Play and compete with your friends - Free to play on different devices, no wifi needed! - Keep updating new juicy levels and surprises - Free gift box for each level which helps you pass the level easier! Game Features: - Over 250 levels with delicate fruits - Journey across 5 splendid maps: Fruit Garden, Melon Fields, Rill Meadow, Snow Castle and Farm Orchard - Fun and fairly challenging barriers: Ice, Cloud, Bubble, etc. - Hard to master. Practice your skills. - Brand new visual effect of fruits design. - Popular and addictive match-3 gameplay - Cute and juicy fruit graphics - Whip your way through Fruits House, Fruits Castle, Fruits Factory - Break up all breads, chocolate and ice to pass levels - Stock up on chestnuts, mushrooms to bomb through fruity maps - Get social! Challenge and compete with your friends inside the game and get rewarded! All fruits lovers! Download Fruits Bomb and collect juicy fruits NOW!! Download it now for free! Enjoy the relaxing and cheerfulness in Happy Fruits Tap. You will be addict to this wonderful fruit paradise.`;

const AboutBox = (props) => {
  const {
    className = "",
    propAlignSelf,
    propPadding,
    propWidth,
    propMinHeight,
    propMinHeight1,
    propFlex,
    propFlex1,
    propWidth1,
    bubblePlayImage,
  } = props;
  const aboutBoxStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
      minHeight: propMinHeight,
    };
  }, [propAlignSelf, propPadding, propWidth, propMinHeight]);

  const makeJuicyLinesStyle = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  const playBottonBoxStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const containerGooglePlayUrlStyle = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
    };
  }, [propFlex1, propWidth1]);

  async function redirectUser() {
    window.location.replace(redirectUrl);
  }

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-0.5 box-border gap-x-20 gap-y-[78px] max-w-full text-left text-base text-lightslategray font-roboto mq450:gap-[19px] mq750:gap-[39px] ${className}`}
      style={aboutBoxStyle}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start min-w-[600px] max-w-full mq750:min-w-full">
        <div
          className="flex-1 relative tracking-[0.13px] leading-[25.6px] inline-block max-w-full"
          style={makeJuicyLinesStyle}
        >
          {description}
        </div>
      </div>
      <div
        className="flex-[0.8167] flex flex-row items-start justify-center py-0 px-[55px] box-border min-w-[479px] max-w-full mq750:pl-[27px] mq750:pr-[27px] mq750:box-border mq750:min-w-full"
        style={playBottonBoxStyle}
      >
        <div
          className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-col items-center justify-start p-5 box-border gap-10 max-w-full mq750:gap-5"
          style={containerGooglePlayUrlStyle}
        >
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src={bubblePlayImage}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start">
            <button
              className="cursor-pointer hover:opacity-80 [border:none] py-1.5 px-[15px] bg-dodgerblue rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue"
              onClick={redirectUser}
            >
              <div className="relative text-xs tracking-[0.25px] leading-[20px] font-roboto text-white text-left inline-block min-w-[67px]">
                Google Play
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;

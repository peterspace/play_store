import { useMemo } from "react";
const redirectUrl = import.meta.env.VITE_PLAY_STORE_URL;
const description = `Mob Control is an incredibly fun and dynamic strategy game developed by Voodoo, and it has quickly become a favorite among mobile gamers on both the Apple App Store and Google Play Store. The game draws players in with its simple yet captivating concept—launching mobs through gates to multiply their numbers, allowing you to outmaneuver and overpower enemy forces. The thrill of watching your mobs grow in number and sweep across the battlefield creates an experience that’s both satisfying and addictive.

As you advance through levels, the game offers more depth with opportunities to unlock and upgrade cannons, introduce powerful champions, and evolve your army. This progression system ensures that the gameplay remains fresh and exciting as players face tougher opponents and more complex challenges. Special events, like the collaboration with Transformers, add even more variety to the experience. Players can join forces with iconic characters such as Optimus Prime to battle new enemies and save Mob World​(
Apple
).

The bright, colorful visuals and smooth animations make the game visually engaging, enhancing the overall enjoyment. Whether you're playing in short bursts or dedicating a longer session, Mob Control keeps you coming back for more. While the game offers optional in-game purchases to enhance progression, players can fully enjoy the experience without needing to make purchases, which adds to its accessibility.

In terms of user experience, Mob Control has seen continuous improvement. The developers are highly responsive to feedback, regularly releasing updates that not only introduce new content but also enhance performance​(
Apple
). This dedication to the game ensures that players always have something new to look forward to, keeping the experience fresh and evolving.

Overall, Mob Control is a must-try for fans of strategy games. Its blend of fast-paced gameplay, engaging challenges, and evolving content makes it a standout on the app stores. Whether you’re looking to enjoy a quick game on the go or dive into deeper strategic gameplay, Mob Control delivers an entertaining and rewarding experience.

Download it today on the Apple App Store or Google Play Store and start building your ultimate mob army!`;
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

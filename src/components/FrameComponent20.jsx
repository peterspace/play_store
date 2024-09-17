import CaroselReviewContainer from "./CaroselReviewContainer";
import PropTypes from "prop-types";

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

const FrameComponent20 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-left text-5xl text-gray-100 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[65px] mq450:text-lgi mq450:leading-[19px]">
                Screenshots
              </a>
            </div>
          </div>
        </div>
        <CaroselReviewContainer
          propWidth="1360px"
          propHeight="336px"
          propFlex="unset"
          sliderItem="/slideritem5@2x.png"
          sliderItem1="/slideritem-14@2x.png"
          sliderItem2="/slideritem-24@2x.png"
          sliderItem3="/slideritem-36@2x.png"
          sliderItem4="/slideritem-41@2x.png"
          sliderItem5="/slideritem-51@2x.png"
          sliderItem6="/slideritem-61@2x.png"
          sliderItem7="/slideritem-7@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[65px] mq450:text-lgi mq450:leading-[19px]">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[410px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-base text-lightslategray">
          <div className="flex-1 relative tracking-[0.13px] leading-[25.6px] inline-block max-w-full">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent20.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent20;

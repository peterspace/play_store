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
const MobileWhite = () => {
  async function redirectUser() {
    window.location.replace(redirectUrl);
  }
  return (
    <div className="w-full relative bg-whitesmoke-100 flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-center text-5xl text-white font-roboto-slab">
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start bg-[url('/public/white-page-header-container1@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.08),_#202124_93.5%)] overflow-hidden flex flex-col items-start justify-end">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-20 gap-40">
            <header className="self-stretch flex flex-row items-center justify-between py-5 px-10 gap-5 text-left text-base text-white font-roboto">
              <div className="relative tracking-[0.13px] leading-[28px] font-semibold whitespace-nowrap">
                bomb Fruit-perfect match
              </div>
              <a className="[text-decoration:none] relative text-sm tracking-[0.13px] leading-[28px] text-[inherit] inline-block min-w-[40px]">
                Home
              </a>
            </header>
            <div className="self-stretch flex flex-col items-center justify-start gap-10">
              <div className="self-stretch flex flex-col items-center justify-start gap-5">
                <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit]">
                  bomb Fruit- perfect match
                </h3>
                <div className="self-stretch relative text-base tracking-[0.13px] leading-[27.5px] font-roboto">
                  Fruit Bomb Legend-Burst-to play, this is fun for the whole
                  family!
                </div>
                <button
                  className="cursor-pointer hover:opacity-80 [border:none] py-1.5 px-[7px] bg-white rounded-lg flex flex-row items-center justify-center mq128:w-[calc(100%_-_40px)]"
                  onClick={redirectUser}
                >
                  <div className="relative text-base tracking-[0.13px] leading-[28px] font-semibold font-roboto text-indigo text-center inline-block min-w-[73px]">
                    Download
                  </div>
                </button>
              </div>
              <div className="self-stretch relative text-base tracking-[0.13px] leading-[28px] font-semibold font-roboto">
                Find us on
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="self-stretch bg-whitesmoke-100 flex flex-col items-center justify-start pt-10 px-2.5 pb-0 gap-20 text-left text-mini text-darkslategray-200 font-roboto">
        <section className="self-stretch shadow-[0px_20px_27px_rgba(0,_0,_0,_0.05)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-10 text-left text-base text-lightslategray font-roboto">
          <div className="self-stretch flex flex-col items-center justify-start gap-10">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.13px] leading-[25.6px]">
                {description}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center">
              <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-col items-center justify-start pt-1 px-1 pb-5 gap-10">
                <div className="self-stretch flex flex-row items-center justify-start py-0 px-[3px]">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    alt=""
                    src="/bubble-play-image1@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
                  <button className="cursor-pointer hover:opacity-80 [border:none] py-1.5 px-[15px] bg-dodgerblue rounded-lg flex flex-row items-center justify-center whitespace-nowrap"  onClick={redirectUser}>
                    <div className="relative text-xs tracking-[0.25px] leading-[20px] font-roboto text-white text-left inline-block min-w-[67px]">
                      Google Play
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-darkslategray-300 flex flex-col items-center justify-start py-5 px-1 gap-5">
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-110@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-110@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-110@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-110@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-110@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-32@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-210@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame-51@2x.png"
            />
            <img
              className="self-stretch min-h-[512px] max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/featured-image-frame1@2x.png"
            />
          </div>
          <div className="self-stretch bg-white flex flex-col items-center justify-start py-0 px-3.5 text-center text-28xl text-royalblue font-roboto-slab">
            <div className="self-stretch flex flex-col items-center justify-start gap-20">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[71px] gap-10">
                <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
                  <div className="self-stretch relative tracking-[0.13px] leading-[60px] font-semibold">
                    94,846
                  </div>
                  <div className="w-[88px] relative text-lgi tracking-[0.13px] leading-[28px] font-semibold font-roboto text-darkslategray-200 inline-block min-w-[88px]">
                    Download
                  </div>
                </div>
                <div className="w-[57px] flex flex-col items-center justify-start gap-[18px]">
                  <div className="relative tracking-[0.13px] leading-[60px] font-semibold inline-block min-w-[52px]">
                    3+
                  </div>
                  <div className="self-stretch relative text-lgi tracking-[0.13px] leading-[28px] font-semibold font-roboto text-darkslategray-200 inline-block min-w-[57px]">
                    Rating
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-3.5 gap-[18px]">
                  <div className="w-[100px] relative tracking-[0.13px] leading-[60px] font-semibold inline-block min-w-[100px]">
                    219+
                  </div>
                  <div className="self-stretch relative text-lgi tracking-[0.13px] leading-[28px] font-semibold font-roboto text-darkslategray-200 inline-block min-w-[116px]">
                    Count review
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-4 text-left text-10xl text-darkslategray-200">
                <h2 className="m-0 relative text-inherit tracking-[0.13px] leading-[42px] font-semibold font-[inherit]">
                  Contact Information
                </h2>
                <div className="relative text-smi tracking-[0.13px] leading-[21px] font-roboto whitespace-nowrap">
                  apiponfreefr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
          <div className="relative tracking-[0.13px] leading-[26px] font-semibold">
            bomb Fruit- perfect match
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-center py-10 px-[66px] text-center text-smi text-darkslategray-200 font-roboto">
          <div className="flex-1 relative tracking-[0.13px] leading-[21px]">
            All rights reserved. Copyright © 2024
          </div>
        </section>
      </main>
    </div>
  );
};

export default MobileWhite;

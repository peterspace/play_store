const redirectUrl = import.meta.env.VITE_PLAY_STORE_URL;
const description = `Make juicy lines of 3 or more adorable fruits. Bomb around hundreds of uniquely perplexing levels in this amazing puzzle adventure. Tired of working or studying? To pass time and enjoy the casual Happy Fruits Tap! There are almost 250 levels in Happy Fruits Tap. Click on 2 or more fruits of the same to blast. Your purpose is to remove fruits as many as possible. Clear away the barriers by eliminating fruits. Follow the adventure, the best incredibly fresh fruit puzzle game will satisfy your sweet teeth! Happy Fruits Tap is looking forward to you to join in! Immerse yourself into this yummy Fruits Bomb where garden strawberry, green apple, fresh blueberry, juicy orange and delicious grapes are everywhere. Bomb your way out and enjoy the fun of addictive match 3! Fruit Block will lead you to a world of juicy fruit. Start your puzzle adventure by blasting the same color fruits. Juice fruit games offer a variety of gameplay modes to keep you entertained. Tap game lets you swipe and swap fruits to create mouthwatering combos and earn points. Connect three or more identical fruits in a row, and watch them burst with sweet jamba juice! With each level you conquer, the difficulty increases, putting your matching skills to the test in cube games. The process of adventure is fun and relaxing, you can experience a magical feeling of juice filling the screen. Connecting more pieces of the same color of fruits smartly, unexpected surprises will appear. Match 3 fruits and complete different tasks in cube games. You can use restricted moves to burst the fruit. Cube games give you many rewards so that you can complete your mission easily. Hundreds of precious levels with fun and sweetness are waiting for you in the tap game. In a juice jam game, match the jamba juice cubes to enjoy the addictive game. Make many juices like guava juice by matching the fruit in a cube game. By the way, Fruit Block is always popular with beautiful ladies, so what are you waiting for, let&#39;s start the journey together! How to play Fruit Burst: - Slice to connect 3 or more fruits to blast! - If you can connect more than 7 fruits, a blender blade will spin &amp; create massive fresh juice! - Then it&#39;s Blast Party Time! Do you have the moves to win? - Complete different goals to pass the level, such as delivering keys to the portal, breaking ice cubes, unlock fruits... You will find this game is so addicting! - 1000+ juicy levels of the best connect 3 game with different challenging goals - Special challenges such as breaking ice cubes and delivering portal keys - Happy blast party time after goal completion - Easy and fun to play, even more fun to master with skills - Play and compete with your friends - Free to play on different devices, no wifi needed! - Keep updating new juicy levels and surprises - Free gift box for each level which helps you pass the level easier! Game Features: - Over 250 levels with delicate fruits - Journey across 5 splendid maps: Fruit Garden, Melon Fields, Rill Meadow, Snow Castle and Farm Orchard - Fun and fairly challenging barriers: Ice, Cloud, Bubble, etc. - Hard to master. Practice your skills. - Brand new visual effect of fruits design. - Popular and addictive match-3 gameplay - Cute and juicy fruit graphics - Whip your way through Fruits House, Fruits Castle, Fruits Factory - Break up all breads, chocolate and ice to pass levels - Stock up on chestnuts, mushrooms to bomb through fruity maps - Get social! Challenge and compete with your friends inside the game and get rewarded! All fruits lovers! Download Fruits Bomb and collect juicy fruits NOW!! Download it now for free! Enjoy the relaxing and cheerfulness in Happy Fruits Tap. You will be addict to this wonderful fruit paradise.`;
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

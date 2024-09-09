import React from "react";

const redirectUrlPlayStore = import.meta.env.VITE_PLAY_STORE_URL;
const redirectUrlAppStore = import.meta.env.VITE_APP_STORE_URL;

const DesktopHero = () => {
  async function redirectUserPlayStore() {
    window.location.replace(redirectUrlPlayStore);
  }

  async function redirectUserAppStore() {
    window.location.replace(redirectUrlAppStore);
  }
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-10 box-border max-w-full text-left text-5xl text-gray-100 font-roboto">
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch w-full h-[802px] relative bg-black bg-cover bg-no-repeat bg-[top] max-w-full bg-[url('/desktop-hero_bg.png')]">
          <div className="h-[147px] py-0.5 left-[23px] top-[560px] absolute flex-col justify-start items-center gap-10 inline-flex">
            <div className="self-stretch h-[143px] flex-col justify-start items-start gap-10 flex">
              <div className="flex-col justify-start items-start gap-5 flex">
                <img
                  className="w-14 h-14 relative rounded-xl shadow"
                  src="/similar-image2@2x.png"
                  alt="logo"
                />
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <div className="text-[#fefefe]/95 text-2xl font-bold font-['Poppins']">
                    Mob Control
                  </div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="p-2.5 bg-[#616161] rounded justify-center items-center gap-2.5 flex">
                    <div className="text-[#fdfdfd] text-sm font-medium font-['Poppins']">
                      Adventure
                    </div>
                  </div>
                  <div className="p-2.5 bg-[#616161] rounded justify-center items-center gap-2.5 flex">
                    <div className="text-[#fdfdfd] text-sm font-medium font-['Poppins']">
                      Puzzle
                    </div>
                  </div>
                  <div className="p-2.5 bg-[#616161] rounded justify-center items-center gap-2.5 flex">
                    <div className="text-[#fdfdfd] text-sm font-medium font-['Poppins']">
                      Platformer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 relative" />
          </div>
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-[936px] h-[705px] top-[30px] absolute">
              <div className="p-1 left-[390px] top-[673px] absolute bg-white/20 rounded justify-start items-start gap-[3.73px] inline-flex">
                <img
                  className="cursor-pointer hover:opacity-80 w-[93.33px] h-7 relative rounded-[2.99px]"
                  src="/appstore@2x.png"
                  alt="appstore"
                  onClick={redirectUserAppStore}
                />
                <img
                  className="cursor-pointer hover:opacity-80 w-[93.33px] h-7 relative rounded-[2.99px]"
                  src="/playstore@2x.png"
                  alt="playstore"
                  onClick={redirectUserPlayStore}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center ">
            <div className="w-[721px] top-[80px] absolute rounded-[10.64px] border-8 border-[#7f7f8f]/20] flex-col justify-start items-start gap-[5.91px] inline-flex shadow-2xl bg-gradient-to-r from-gray-500 to-neutral-300 p-[2px]">
              <img
                className="self-stretch grow shrink basis-0"
                src="/desktop-hero_1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;

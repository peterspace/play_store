import { useMemo } from "react";

const HeaderDesktop1 = ({
 
}) => {


  return (
    <header className="top-[0] z-[99] sticky self-stretch px-5 py-2.5 bg-gray-400 justify-between items-center inline-flex">
      <div className="w-[170px] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-12 justify-start items-center gap-[11px] inline-flex">
          <img
            className="w-[40px] h-[40px] relative rounded-lg shadow"
            src="/logo.svg"
          />
          <div className="w-[119px] text-white text-[22px] font-medium font-['Roboto'] leading-normal">
            Store
          </div>
        </div>
      </div>
      <div className="justify-end items-center gap-5 flex">
        <div className="flex-col justify-start items-center inline-flex">
          <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">
              Home
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop1;

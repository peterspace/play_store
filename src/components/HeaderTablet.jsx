import { useMemo } from "react";
import PropTypes from "prop-types";

const HeaderTablet = ({
  className = "",
  materialSymbolssearch,
  appsTextDecoration,
}) => {
  const appsStyle = useMemo(() => {
    return {
      textDecoration: appsTextDecoration,
    };
  }, [appsTextDecoration]);

  return (
    <header
      className={`self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start text-left text-3xl text-dimgray font-roboto ${className}`}
    >
      <div className="self-stretch h-12 bg-white flex flex-row items-start justify-between pt-[9px] px-5 pb-[3px] box-border gap-5">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/iconplaystore.svg"
          />
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[119px] whitespace-nowrap">
              Google Play
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-base text-white">
          <div className="flex flex-row items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={materialSymbolssearch}
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/codiconquestion1.svg"
              />
            </div>
            <div className="rounded-341xl bg-steelblue overflow-hidden flex flex-row items-start justify-start py-1.5 px-2.5">
              <a className="[text-decoration:none] relative tracking-[0.2px] leading-[20px] text-[inherit] inline-block min-w-[12px]">
                O
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="m-0 self-stretch bg-white flex flex-row items-center justify-between py-2.5 px-20 gap-5 text-left text-sm text-dimgray font-roboto mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[46px]">
              Games
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-start">
            <div
              className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[34px]"
              style={appsStyle}
            >
              Apps
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[47px]">
            Movies
          </a>
        </div>
        <div className="flex flex-col items-center justify-start">
          <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[41px]">
            Books
          </a>
        </div>
        <div className="flex flex-col items-center justify-start">
          <a className="[text-decoration:none] relative tracking-[0.25px] leading-[20px] text-[inherit] inline-block min-w-[54px]">
            Children
          </a>
        </div>
      </nav>
    </header>
  );
};

HeaderTablet.propTypes = {
  className: PropTypes.string,
  materialSymbolssearch: PropTypes.string,

  /** Style props */
  appsTextDecoration: PropTypes.any,
};

export default HeaderTablet;

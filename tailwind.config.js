/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "600px",
        lg: "1048px",
      },
      colors: {
        white: "#fff",
        dimgray: "#5f6368",
        whitesmoke: "#e8eaed",
        gray: {
          100: "#202124",
          200: "rgba(0, 0, 0, 0.8)",
        },
        gainsboro: "#dadce0",
        seagreen: {
          100: "#4c9e77",
          200: "#00a173",
          300: "#01875f",
          400: "#33855e",
        },
        lightcoral: "#ea726f",
        mintcream: "#e6f3ef",
        darkslategray: "#2e624b",
        darkgray: "#9aa0a6",
        steelblue: "#3f87cb",
        orange: "#fbbc04",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "9980xl": "9999px",
        "341xl": "360px",
        "29xl": "48px",
        "251xl": "270px",
      },
    },
    fontSize: {
      sm: "14px",
      "2xs": "11px",
      xs: "12px",
      smi: "13px",
      lg: "18px",
      base: "16px",
      "37xl": "56px",
      "5xl": "24px",
      "3xl": "22px",
      "2xs-5": "10.5px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

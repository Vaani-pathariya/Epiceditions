import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cookie:["Cookie", 'cursive'],
        poppins :["Poppins", "sans-serif"]
      },
      colors:{
        charcoal : "#2E4052",
        brightPink: "#E76B74",
        lightYellow: "#F8FFE5",
        chocolate :"#550C18",
      }
    },
  },
  plugins: [],
};
export default config;
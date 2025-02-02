/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        example: ["IRYekan"],
        system: platformSelect({
          ios: "IRYekan",
          android: "IRYekan",
          default: "IRYekan",
        }),
      },
    }
  },
  plugins: [],
}
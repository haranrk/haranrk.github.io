import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

const dynamicallyUsedColors = [
  "red-500",
  "blue-500",
  "orange-500",
  "teal-500",
  "blacj",
];

export default defineConfig({
  darkMode: "class",
  safelist: [dynamicallyUsedColors.map((color) => `text-${color}`)],
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#096",
        },
      },
    },
  },
  plugins: [formsPlugin],
});

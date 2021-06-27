import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#DB0A40",
  primaryBright: "#DB0A40",
  primaryDark: "#DB0A40",
  secondary: "#DB0A40",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1c1b1c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  tertiary: "#353547",
  text: "#DB0A40",
  textDisabled: "#666171",
  textSubtle: "#DB0A40",
  borderColor: "#DB0A40",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#DB0A40",
  background: "#1c1b1c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#DB0A40",
  tertiary: "#353547",
  text: "#DB0A40",
  textDisabled: "#666171",
  textSubtle: "#DB0A40",
  borderColor: "#DB0A40",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
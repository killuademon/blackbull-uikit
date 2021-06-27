import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ecbc3c",
  primaryBright: "#ecbc3c",
  primaryDark: "#ecbc3c",
  secondary: "#ecbc3c",
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
  text: "#ecbc3c",
  textDisabled: "#666171",
  textSubtle: "#ecbc3c",
  borderColor: "#ecbc3c",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ecbc3c",
  background: "#1c1b1c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#ecbc3c",
  tertiary: "#353547",
  text: "#ecbc3c",
  textDisabled: "#666171",
  textSubtle: "#ecbc3c",
  borderColor: "#ecbc3c",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
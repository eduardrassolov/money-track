export type RangeDate = {
  from: string;
  to: string;
};

export interface ITheme {
  name: "light" | "dark";
  background: string;
  background2: string;
  hoverAside: string;
  border: string;
  text: string;
  colorLogoMain: string;
  colorLogoSecondary: string;
  shadow: string;
  error: string;
}

export const light: ITheme = {
  name: "light",
  background: "#f9fafb",
  background2: "#f3f4f6",
  hoverAside: "#e5e7eb",
  border: "#E5E5E5",
  text: "#040301",
  colorLogoMain: "#7286D3",
  colorLogoSecondary: "#FFC436",
  shadow: "rgba(0, 0, 0, 0.3)",
  error: "#ef4444",
};

export const dark: ITheme = {
  name: "dark",
  background: "#1c1917",
  background2: "#1f1f1f",
  hoverAside: "#44403c",
  border: "#292524",
  text: "#fff",
  colorLogoMain: "#7286D3",
  colorLogoSecondary: "#FFC436",
  shadow: "rgba(205, 197, 197, 0.3)",
  error: "#ef4444",
};

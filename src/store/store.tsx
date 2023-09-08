import { create } from "zustand";

const dark = {
  name: "dark",
  background: "#1c1917",
  backGround2: "#1f1f1f",
  hoverAside: "#44403c",
  border: "#292524",
  text: "#fff",
  colorLogoMain: "#7286D3",
  colorLogoSecondary: "#FFC436",
  shadow: "rgba(205, 197, 197, 0.3)",
  error: "#ef4444",
};

const light = {
  name: "light",
  background: "#f9fafb",
  backGround2: "#f3f4f6",
  hoverAside: "#e5e7eb",
  border: "#E5E5E5",
  text: "#040301",
  colorLogoMain: "#7286D3",
  colorLogoSecondary: "#FFC436",
  shadow: "rgba(0, 0, 0, 0.3)",
  error: "#ef4444",
};

export const useThemeStore = create((set) => ({
  theme: { ...light },
  toogleTheme: (nextTheme: string) => set(() => {
    return nextTheme === "dark" ? ({ theme: { ...dark } }) : ({ theme: { ...light } })
  })
}))

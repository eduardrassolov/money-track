// import { create } from "zustand";

import { create } from "zustand";

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
export interface ITheme {
  name: "light" | "dark",
  background: string,
  background2: string,
  hoverAside: string,
  border: string,
  text: string,
  colorLogoMain: string,
  colorLogoSecondary: string,
  shadow: string,
  error: string,
}

interface IStore {
  search: string,
  theme: ITheme,
  categoryFilter: string[],
  toogleTheme: (nextTheme: string) => void,
  setSearch: (value: string) => void,
  setCategoryFilter: (category: string) => void,
  clearCategoryFilter: () => void,

}

export const useCurrStore = create<IStore>()((set) => ({
  search: "",
  theme: { ...light },
  categoryFilter: [],

  setSearch: (value: string) => set(() => ({ search: value })),
  toogleTheme: (nextTheme: string) => set(() => { return nextTheme === "dark" ? ({ theme: { ...dark } }) : ({ theme: { ...light } }) }),
  setCategoryFilter: (category: string) => set((state) => (state.categoryFilter.includes(category) ?
    { categoryFilter: state.categoryFilter.filter(item => item !== category) }
    :
    { categoryFilter: [...state.categoryFilter, category] })
  ),
  clearCategoryFilter: () => set(() => ({ categoryFilter: [] })),

}))



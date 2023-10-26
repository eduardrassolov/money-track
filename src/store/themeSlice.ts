import { StateCreator } from "zustand";
import { ITheme, light, dark } from "./storeConfig";

export interface IThemeSlice {
  theme: ITheme;
  toggleTheme: (nextTheme: string) => void;
}
export const createThemeSlice: StateCreator<IThemeSlice> = (set) => ({
  theme: light,
  toggleTheme: (nextTheme: string) =>
    set(() => {
      return nextTheme === "dark" ? { theme: { ...dark } } : { theme: { ...light } };
    }),
});

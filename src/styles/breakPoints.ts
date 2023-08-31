type Breakpoints = {
  xs: string;
  sm: string;
  md: string;
};

const breakpoints: Breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "900px",
  // lg: "1024px",
  // xl: "1280px",
  // "2xl": "1536px",
};

export const devices: Breakpoints = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  // lg: `(max-width: ${breakpoints.lg})`,
  // xl: `(max-width: ${breakpoints.xl})`,
  // "2xl": `(max-width: ${breakpoints["2xl"]})`,
};

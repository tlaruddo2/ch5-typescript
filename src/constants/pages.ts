interface PageJSON {
  watch: string;
  listen: string;
  lights: string;
  climate: string;
  shades: string;
  cameras: string;
  security: string;
}

export const PAGES: PageJSON = {
  watch: "WATCH",
  listen: "LISTEN",
  lights: "LIGHTS",
  climate: "CLIMATE",
  shades: "SHADES",
  cameras: "CAMERAS",
  security: "SECURITY",
};

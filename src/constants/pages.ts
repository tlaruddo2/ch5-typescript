interface PageJSON {
  //??
  home: string;
  listen: string;
  lights: string;
  climate: string;
  shades: string;
  cameras: string;
  security: string;
  error: string;
}

export const PAGES: PageJSON = {
  home: "HOME",
  listen: "LISTEN",
  lights: "LIGHTS",
  climate: "CLIMATE",
  shades: "SHADES",
  cameras: "CAMERAS",
  security: "SECURITY",
  error: "Error",
};

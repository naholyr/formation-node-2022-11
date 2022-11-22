import { homeHandler } from "./home.js";

export const homeTimeoutHandler = (req, res) => {
  setTimeout(() => homeHandler(req, res), 5000);
};

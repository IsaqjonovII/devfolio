import { lazy } from "react";
import Home from "pages/Home";
const Intro = lazy(() => import("pages/Intro"));
const Portfolio = lazy(() => import("pages/Portfolio"));

let id = 0;
export const routes = [
  {
    id: id++,
    key: "home",
    title: "Home",
    Component: Home,
  },
  {
    id: id++,
    key: "intro",
    title: "Intro",
    Component: Intro,
  },
  {
    id: id++,
    key: "portfolio",
    title: "Portfolio",
    Component: Portfolio,
  },
];

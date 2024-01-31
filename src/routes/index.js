import { lazy } from "react";
const Intro = lazy(() => import("pages/Intro"));
const Portfolio = lazy(() => import("pages/Portfolio"));

let id = 0;
export const routes = [
  {
    id: id++,
    key: "home",
    title: "Home",
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

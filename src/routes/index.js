import { lazy } from "react";

const Intro = lazy(() => import("pages/Intro"));
const Portfolio = lazy(() => import("pages/Portfolio"));

let id = 0;
export const routes = [
  {
    id: id++,
    title: "Intro",
    path: "/about-me",
    Component: Intro,
  },
  {
    id: id++,
    title: "Portfolio",
    path: "/portfolio",
    Component: Portfolio,
  },
];

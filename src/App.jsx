import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { routes } from "routes";
import { DarkBulb, LightBulb } from "assets";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);
  useEffect(() => {
    document.body.className = "";
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={"app"}>
      <header className="header__container">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
      </header>
      <div className="theme__switcher">
        {theme.includes("light") ? (
          <LightBulb className="icon" onClick={() => setTheme("dark")} />
        ) : (
          <DarkBulb className="icon" onClick={() => setTheme("light")} />
        )}
      </div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

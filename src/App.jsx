import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { routes } from "routes";

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
          theme={theme}
          setTheme={setTheme}
        />
        <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
      </header>
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

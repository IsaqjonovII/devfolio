import { useEffect } from "react";
import { AnimatePresence, useCycle } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { routes } from "routes";

const App = () => {
  const [cycle, cycleOpen] = useCycle(false, true);
  const { pathname } = useLocation();
  useEffect(() => {
    cycleOpen(false);
    window.scrollTo(0, 0);
  }, [pathname, cycleOpen]);
  useEffect(() => {
    document.body.style.overflowY = cycle ? "hidden" : "auto";
  }, [cycle]);

  return (
    <div className="app">
      <header className="header__container">
        <Navbar cycle={cycle} cycleOpen={cycleOpen} />
        <AnimatePresence>{cycle && <Sidebar />}</AnimatePresence>
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

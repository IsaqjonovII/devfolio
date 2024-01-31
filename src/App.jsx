import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { routes } from "routes";
import Contact from "pages/Contact";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContacted, setIsContacted] = useState(false);
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
          theme={theme}
          isContacted={isContacted}
          isSidebarOpen={isSidebarOpen}
          setTheme={setTheme}
          setIsContacted={setIsContacted}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <AnimatePresence>
          {isSidebarOpen && (
            <Sidebar
              isContacted={isContacted}
              isSidebarOpen={isSidebarOpen}
              setIsContacted={setIsContacted}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          )}
          {isContacted && <Contact setIsContacted={setIsContacted} />}
        </AnimatePresence>
      </header>
      {routes.map(({ id, Component }) => Component && <Component key={id} />)}
    </div>
  );
};

export default App;

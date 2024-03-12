import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { routes } from "routes";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);
  useEffect(() => {
    document.body.className = "";
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <header className="header__container">
        <Navbar
          theme={theme}
          isSidebarOpen={isSidebarOpen}
          setTheme={setTheme}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <AnimatePresence>
          {isSidebarOpen && (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          )}
        </AnimatePresence>
      </header>
      {routes.map(({ id, Component }) => Component && <Component key={id} />)}
    </div>
  );
};

export default App;

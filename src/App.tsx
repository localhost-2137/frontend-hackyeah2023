import {useLocation, useRoutes} from "react-router-dom";
import Main from "./pages/Main.tsx";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

const App = () => {
    const element = useRoutes([
      {
        path: "/",
        element: <Main />,
      },
    ]);

    const location = useLocation();

    if (!element) return null;

    return (
      <AnimatePresence mode="wait">
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    );
}

export default App

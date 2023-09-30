import {useLocation, useRoutes} from "react-router-dom";
import MainDashboard from "./pages/MainDashboard.tsx";
import {AnimatePresence} from "framer-motion";
import {cloneElement} from "react";

const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <MainDashboard/>,
        },
    ]);

    const location = useLocation();

    if (!element) return null;

    return (
        <AnimatePresence mode="wait">
            {cloneElement(element, {key: location.pathname})}
        </AnimatePresence>
    );
}

export default App

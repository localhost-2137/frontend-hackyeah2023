import {useLocation, useRoutes} from "react-router-dom";
import Main from "./pages/Main.tsx";
import {AnimatePresence} from "framer-motion";
import {cloneElement} from "react";
import SurveyLandingPage from "./pages/Survey/SurveyLandingPage.tsx";
import IndexInfo from "./components/IndexInfo.tsx";

const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Main/>,
            children: [
                {path: "/", element: <IndexInfo/>},
            ]
        },
        {
            path: "/survey",
            element: <SurveyLandingPage/>
        }
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

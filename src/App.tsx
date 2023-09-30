import {useLocation, useRoutes} from "react-router-dom";
<<<<<<< HEAD
import MainDashboard from "./pages/MainDashboard.tsx";
import {AnimatePresence} from "framer-motion";
import {cloneElement} from "react";
import IndexInfo from "./components/IndexInfo.tsx";

const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <MainDashboard/>,
            children: [
                {path: "/", element: <IndexInfo/>},
                {path: "/search", element: <p>Search</p>},
            ]
        },
=======
import Main from "./pages/Main.tsx";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import SurveyLandingPage from "./pages/Survey/SurveyLandingPage.tsx";

const App = () => {
    const element = useRoutes([
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/survey",
        element: <SurveyLandingPage />
      }
>>>>>>> fea6ead (Added Suvey landing page)
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

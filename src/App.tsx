import {useLocation, useRoutes} from "react-router-dom";
import Main from "./pages/Main.tsx";
import {AnimatePresence} from "framer-motion";
import {cloneElement} from "react";
import SurveyLandingPage from "./pages/Survey/SurveyLandingPage.tsx";
import IndexInfo from "./components/IndexInfo.tsx";
import SurveyComponent from "./pages/Survey/SurveyComponent.tsx";
import Search from "./pages/Search.tsx";
import University from "./pages/University.tsx";
import Favourites from "./pages/Favourites.tsx";

const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Main/>,
            children: [
                {path: "/", element: <IndexInfo/>},
                {path: "/search", element: <Search/>},
                {path: "/university/:id", element: <University/>},
                {path: "/favourites", element: <Favourites/>},
            ],
        },
        {
            path: "/survey",
            element: <SurveyLandingPage/>,
        },
        {
            path: "/survey/:id",
            element: <SurveyComponent/>,
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

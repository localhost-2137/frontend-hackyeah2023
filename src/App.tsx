import {useLocation, useRoutes} from "react-router-dom";
import Main from "./pages/Main.tsx";
import {AnimatePresence} from "framer-motion";
import {cloneElement} from "react";
import SurveyLandingPage from "./pages/Survey/SurveyLandingPage.tsx";
import IndexInfo from "./components/IndexInfo.tsx";
import SurveyComponent from "./pages/Survey/SurveyComponent.tsx";

const App = () => {
    const element = useRoutes([
      {
        path: "/",
        element: <Main />,
        children: [
          { path: "/", element: <IndexInfo /> },
          { path: "/search", element: <p>Search</p> },
        ],
      },
      {
        path: "/survey",
        element: <SurveyLandingPage />,
      },
      {
        path: "/survey/:id",
        element: <SurveyComponent />,
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

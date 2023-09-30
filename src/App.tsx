import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App

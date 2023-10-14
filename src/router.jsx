import { createBrowserRouter } from "react-router-dom";

import Login from "./components/pages/login";
import Layout from "./components/pages/layout";
import NotFound from "./components/pages/notFound";
import Inventory from "./components/pages/inventory";
import Logout from "./components/pages/logout";
import Message from "./components/pages/message";
import Users from "./components/pages/users";
import Dispense from "./components/pages/inventory/dispense";
import Doctors from "./components/pages/doctors";
import Compose from "./components/pages/compose";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/inventory",
                element: <Inventory />,
            },
            {
                path: "/message",
                element: <Message />,
            },
            {
                path: "/compose",
                element: <Compose />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dispense",
                element: <Dispense />,
            },
            {
                path: "/doctors",
                element: <Doctors />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
    {
        path: "*", // Catch-all for other paths
        element: <NotFound />,
    },
]);

export default router;

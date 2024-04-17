import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import EstateDetails from "../Pages/Home/EstateDetails/EstateDetails";
import ProtectedRoutes from "./ProtectedRoutes";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import AgentLists from "../Pages/AgentList/AgentLists";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estateDetails/:id',
                element: <ProtectedRoutes><EstateDetails></EstateDetails></ProtectedRoutes>,
                loader: () => fetch('https://saidul24.github.io/estate-json-data/data.json')

            },
            {
                path: '/updateProfile',
                element: <ProtectedRoutes><UpdateProfile></UpdateProfile></ProtectedRoutes>
            },

            {
                path:'/agentList',
                element: <ProtectedRoutes><AgentLists></AgentLists></ProtectedRoutes>,
                loader: () => fetch('agentList.json')
            }

        ]
    }
])

export default router; 
import {  createBrowserRouter } from "react-router-dom";
import MyProduct from "../components/MyProduct";
import NewProduct from "../components/NewProduct";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Home from "../pages/Home";


const route = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},

    ] },
    {path:'/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
        {path:'/dashboard', element: <NewProduct></NewProduct>},
        {path:'/dashboard/addproduct', element: <NewProduct></NewProduct>},
        {path:'/dashboard/myproduct', element:<MyProduct></MyProduct>},
    ] }
])



export default route
import {  createBrowserRouter } from "react-router-dom";
import MyProduct from "../components/MyProduct";
import NewProduct from "../components/NewProduct";
import Welcome from "../components/Welcome";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import Allproduct from "../pages/Allproduct";
import Home from "../pages/Home";
import Private from "./Private";


const route = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
        {path: '/allproduct/:id', element: <Private><Allproduct></Allproduct></Private>, loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)},

    ] },
    {path:'/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
        {path:'/dashboard', element:<Welcome></Welcome>},
        
        {path:'/dashboard/addproduct', element: <NewProduct></NewProduct>},
        {path:'/dashboard/myproduct', element:<MyProduct></MyProduct>},
    ] }
])



export default route
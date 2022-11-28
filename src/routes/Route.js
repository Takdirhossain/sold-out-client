import {  createBrowserRouter } from "react-router-dom";
import AllProduct from "../components/AllProduct";
import Allseller from "../components/Allseller";
import MyProduct from "../components/MyProduct";
import NewProduct from "../components/NewProduct";
import Welcome from "../components/Welcome";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import AllBuyer from "../pages/AllBuyer";
import Allproduct from "../pages/Allproduct";
import Allreported from "../pages/Allreported";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blogs";
import Home from "../pages/Home";
import Mybooked from "../pages/Mybooked";
import Payment from "../pages/Payment";
import Private from "./Private";


const route = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/blog', element: <Blogs></Blogs>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
        {path: '/mybooked', element: <Mybooked></Mybooked>},
        {path: '/payment/:id', element: <Payment></Payment>, loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`) },
        {path: '/allproduct/:id', element: <Private><Allproduct></Allproduct></Private>, loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)},

    ] },
    {path:'/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
        {path:'/dashboard', element:<Welcome></Welcome>},
        
        {path:'/dashboard/addproduct', element: <NewProduct></NewProduct>},
        {path:'/dashboard/myproduct', element:<MyProduct></MyProduct>},
        {path:'/dashboard/allbuyer', element:<AllBuyer></AllBuyer>},
        {path:'/dashboard/allseller', element: <Allseller></Allseller>},
        {path:'/dashboard/allproduct', element: <AllProduct></AllProduct> },
        {path:'/dashboard/allreported', element:<Allreported></Allreported> },

    ] }
])



export default route
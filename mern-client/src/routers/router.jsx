import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path:'/books/:id',
          element:<SingleBook/>,
          loader:({params}) => fetch(`https://localhost:7052/api/books/${params.id}`,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        },
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params}) => fetch(`https://localhost:7052/api/books/${params.id}`,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        }
      ]
    }
  ]);

  export default router;
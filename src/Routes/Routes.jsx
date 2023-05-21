import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Learn from "../components/Gallery/Learn/Learn";
import ShopByCategoryDetails from "../components/ShopByCategory/ShopByCategoryDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";
import AllToys from "../components/AllToys/AllToys";
import AddToy from "../components/AddToy/AddToy";
import MyToys from "../components/MyToys/MyToys";
import ToysDetails from "../components/toysDetails/toysDetails";
import UpdateMyToys from "../components/MyToys/updateMyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'learn',
        element: <Learn></Learn>
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><ShopByCategoryDetails></ShopByCategoryDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://kids-car-server.vercel.app/category/${params.id}`)
      },
      {
        path: 'all toys',
        element: <AllToys></AllToys>,
       
      },
      {
        path: 'allToysDetails/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://kids-car-server.vercel.app/allToys/${params.id}`)
      },
      {
        path: 'add a toy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'my toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'updateToy/:id',
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({ params }) => fetch(`https://kids-car-server.vercel.app/allToys/${params.id}`)
      },      
      {
        path: 'blog',
        element: <Blog></Blog>
      }

    ]
  },
]);


export default router;
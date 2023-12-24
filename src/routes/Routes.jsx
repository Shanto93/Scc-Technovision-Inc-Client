import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from './PrivateRoute';
import Dashboard from './../layout/Dashboard';
import UserProfile from './../pages/Dashboard/UserProfile/UserProfile';
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import AllTasks from "../pages/Dashboard/AllTasks/AllTasks";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'contactUs',
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },

    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'userProfile',
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
        {
          path:'addTask',
          element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
        },
        {
          path: 'allTasks',
          element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>,
          loader: () => fetch('http://localhost:5001/tasks'),
        }
      ]
    }


  ]);
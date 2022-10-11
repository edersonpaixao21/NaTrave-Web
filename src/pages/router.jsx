import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import { Home } from './Home/home'
import { Login } from './Login/login'
import { Signup } from "./Signup/signup"
import { Dashboard } from "./Dashboard/dashboard"
import { Profile } from "./Profile/profile"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
])

export const Router = () => (
    <RouterProvider router={router} />
)
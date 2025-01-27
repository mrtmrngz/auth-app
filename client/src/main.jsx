import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AdminRoutes from "./utils/AdminRoutes.jsx";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage.jsx";
import AdminUsersPage from "./pages/admin/AdminUsersPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />
                    }
                ]
            },
            {
                path: "admin",
                element: <AdminRoutes />,
                children: [
                    {
                        path: "",
                        element: <AdminLayout />,
                        children: [
                            {
                                path: "",
                                element: <AdminDashboardPage />
                            },
                            {
                                path: "users",
                                element: <AdminUsersPage />
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: "/auth/login",
        element: <LoginPage />
    },
    {
        path: "/auth/register",
        element: <RegisterPage />
    }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
)

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Main from "./views/Main";
import ReportForm from "./views/ReportForm";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import AuthLayout from "./Layouts/AuthLayout";
import DashboardPage from "./views/DashboardPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: '/crear-reporte',
                element: <ReportForm />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/registro',
        element: <RegisterPage />
    },
    {
        path: '/usuario',
        element: <AuthLayout />,
        children: [
            {
                path: '/usuario/dashboard',
                element: <DashboardPage />
            }
        ]
    }
])

export default router
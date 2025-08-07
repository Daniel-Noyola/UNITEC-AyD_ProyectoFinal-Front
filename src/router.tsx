import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Main from "./views/Main";
import ReportForm from "./views/ReportForm";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Dashboard from "./views/Dashboard";

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
        element: <LoginPage/>
    },
    {
        path: '/registro',
        element: <RegisterPage/>
    },
    {
        path: 'usuario/dashboard',
        element: <Dashboard/>
    }
])

export default router
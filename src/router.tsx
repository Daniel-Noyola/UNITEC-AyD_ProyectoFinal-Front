import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Main from "./views/Main";
import ReportForm from "./views/ReportForm";

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
    }
])

export default router
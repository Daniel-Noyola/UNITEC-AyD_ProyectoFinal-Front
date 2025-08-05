import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Main from "./views/Main";
import ReportForm from "./views/ReportForm";
import { APIProvider } from "@vis.gl/react-google-maps";

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
                element: 
                <>
                    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY} libraries={["places"]}><ReportForm /></APIProvider>
                </>
            }
        ]
    }
])

export default router
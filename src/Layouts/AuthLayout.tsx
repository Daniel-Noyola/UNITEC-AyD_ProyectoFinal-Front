import { Outlet } from "react-router-dom"
import AuthHeader from "../Components/Layout/AuthHeader"

const AuthLayout = () => {
    return (
        <>
        <AuthHeader />
        <main>
            <Outlet />
        </main>
        
        </>
    )
}

export default AuthLayout

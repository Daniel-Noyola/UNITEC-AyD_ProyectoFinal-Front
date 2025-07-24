import { Outlet } from "react-router-dom"
import Footer from "../Components/Layout/Footer"
import Nav from "../Components/Layout/Nav"

const MainLayout = () => {
    return (
        <>
        <Nav/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
        </>
    )
}

export default MainLayout

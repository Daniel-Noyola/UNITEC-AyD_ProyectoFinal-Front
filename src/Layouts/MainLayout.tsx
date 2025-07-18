import { Outlet } from "react-router-dom"
import Footer from "../Components/Main/Footer"
import Nav from "../Components/Main/Nav"

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

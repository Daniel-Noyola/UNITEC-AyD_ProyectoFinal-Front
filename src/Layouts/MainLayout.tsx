import { Outlet } from "react-router-dom"
import Footer from "../Components/Layout/Footer"
import Header from "../Components/Layout/Header"

//Layout principal del sitio
const MainLayout = () => {
    return (
        <>
        <Header/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
        </>
    )
}

export default MainLayout

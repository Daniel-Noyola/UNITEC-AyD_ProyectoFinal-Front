import Hero from "../Components/Main/Hero"
import About from "../Components/Main/About"
import Report from "../Components/Main/Report"
import MainMap from "../Components/Main/MainMap"
import ReportsList from "../Components/Main/ReportsList"

// Vista principal de la página
const Main = () => {

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <Hero />
            <About />
            <MainMap />
            <ReportsList />
            <Report />
        </div>
    )
}

export default Main

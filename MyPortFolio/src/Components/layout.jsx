import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"

const Layout = () =>{
    return(
        <>
            <Header />
            <main><Outlet /></main>
            <footer><Footer/></footer>
        </>
    )
}

export default Layout
import { Outlet } from "react-router-dom";
import Header from "../../layouts/header/Header"

const Home = () => {
    return(
        <div className="home">
            <Header />
            <Outlet />
        </div>
    )
}

export default Home;
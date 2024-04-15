import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import Footer from "../Sheard/Footer/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;
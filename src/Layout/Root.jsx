import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;
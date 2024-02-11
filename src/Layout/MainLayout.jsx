import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";


const MainLayout = () => {
    return (
        <>
        <div className="lg:fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>
        
        <div className=' min-h-[calc(100vh-68px)]'>
            <Outlet />
        </div>
        <Footer />
    </>
    );
};

export default MainLayout;
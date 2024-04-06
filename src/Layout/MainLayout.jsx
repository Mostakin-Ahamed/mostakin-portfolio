import { Outlet } from "react-router-dom";

import Footer from "../Components/Shared/Footer";


const MainLayout = () => {
    return (
        <>
        
        
        <div className=' min-h-[calc(100vh-68px)]'>
            <Outlet />
        </div>
        <Footer />
    </>
    );
};

export default MainLayout;
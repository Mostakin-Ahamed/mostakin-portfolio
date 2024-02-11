import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";


const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'about',
                element:<About/>
            }

        ]
    }
])

export default MainRouter;
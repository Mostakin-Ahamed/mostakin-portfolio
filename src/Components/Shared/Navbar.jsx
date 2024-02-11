import { useEffect, useState } from "react";
import Name from "./Name";
import Menu from "./Menu";
import Social from "./Social";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`flex justify-between items-center py-2  px-6 md:px-12 lg:px-28  ${isScrolled ? "text-black bg-black" : "text-white"}`}
        style={{ backdropFilter: isScrolled ? "blur(10px)" : "none", boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none", color:isScrolled?"black":"" }}>

            <Name />

            <Social />

            <Menu />

        </div>
    );
};

export default Navbar;
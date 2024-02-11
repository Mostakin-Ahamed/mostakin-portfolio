import { Link } from "react-router-dom";


const Name = () => {
    return (
        <div className="text-center" data-aos="zoom-in">
            <Link to='/' >
                <div className="flex items-center justify-center">
                    <span className="font-mono font-bold text-white border px-2 hover:text-xl transition duration-300">
                       Mostakin Ahamed</span>

                </div>
            </Link>
        </div>
    );
};

export default Name;
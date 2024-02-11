import { Link } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Social from "./Social";
import Name from "./Name";


const Footer = () => {
    return (
        <div className="bg-transparent h-40 text-black flex flex-col justify-between ">
            <div className='flex justify-between gap-8 items-center mt-4 w-2/3 mx-auto'>

                {/* <div className=" border rounded-full flex items-center my-2 px-4 py-1 bg-black"> */}
                    <Link to='/' >
                        <div className="flex items-center justify-center bg-black">
                          <Name/>

                        </div>
                    </Link>
                {/* </div> */}
                <div className="bg-black rounded-full">
                    <Social />
                </div>
                <div className="font-mono">
                    <h1 className='flex justify-start items-center gap-2'><MdOutlineMail /> ruksana01official@gmail.com</h1>
                    <h1 className='flex justify-start items-center gap-2'><FaPhoneAlt /> +880 1795641895</h1>
                </div>

            </div>
            <div className="w-1/3 mx-auto flex gap-4 font-mono">
                <Link> Contact Me </Link>
                <Link> hire Me </Link>
                <Link> Resume </Link>
                <Link> Resume </Link>
                <Link> Resume </Link>

            </div>
            <div className="flex justify-center items-center">
                <span className="text-center font-mono">© Ruksana</span>
            </div>

        </div>
    );
};

export default Footer;
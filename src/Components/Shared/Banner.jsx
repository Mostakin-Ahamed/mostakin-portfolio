/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    const handleDownload = () => {
        window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1kmxWtQjIdRk8ugMsRIlZnsr3T0469Xpj&export=download';
    };

    return (
        <div className="min-h-screen" style={{
            backgroundImage: `url('https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(10px)',
        }}>
            <div className="w-10/12 mx-auto flex justify-between pt-20">
                <div className="text-white">
                    <h1 className="text-3xl">Hi, I'm Mostakin Ahamed</h1>
                    <p>Junior React Developer</p>
                    <div className="flex gap-4 my-4">

                        <button
                           className="border border-white px-2 flex gap-4 justify-center items-center"
                            onClick={handleDownload}>
                            Resume
                            <FaDownload />
                        </button>
                        <button className="border border-white px-2">Hire Me</button>
                        <button className="border border-white px-2">About Me</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/swyTRy5/423147273-1137257353932946-5108167537517425505-n.jpg" alt="Mostakin Ahamed" />
                </div>
            </div>
        </div>
    );
};

export default Banner;

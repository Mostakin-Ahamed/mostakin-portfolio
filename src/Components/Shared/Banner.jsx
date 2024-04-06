/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";
import { FaDownload } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import { FaRegHand } from "react-icons/fa6";

const Banner = () => {
    const handleDownload = () => {
        window.location.href = 'https://drive.usercontent.google.com/u/0/uc?id=1kmxWtQjIdRk8ugMsRIlZnsr3T0469Xpj&export=download';
    };
    const [typeEffect1] = useTypewriter({
        words: ["Mostakin Ahamed."],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    });
    const [typeEffect2] = useTypewriter({
        words: ["A MERN Stack Web Developer!"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return (


        <div className='w-full '>
            <div className='w-9/12 mx-auto flex justify-around gap-4' >
                <div className="w-full mt-16 ml-10">
                    <Slide direction="right">
                        <div className="pt-20">
                            <h2 className="text-4xl flex gap-2 font-medium font-serif  px-4 h-16 py-4 ">
                                Hello There <FaRegHand className="animate-bounce" />, I'm  
                                <span className="text-orange-600 font-bold font-sans">{typeEffect1}</span>
                            </h2>
                            <h2 className="text-4xl flex gap-2 font-semibold font-serif  px-4 h-16 py-4 ">
                                <span>{typeEffect2}</span>
                            </h2>
                        </div>

                        <div className='mt-4'>
                            <div className="ml-10">
                                <div>
                                    <button onClick={handleDownload} className='  flex justify-center gap-3 text-center text-white pt-3 w-[257px] absolute h-[50px] bg-[#FE7E41] mt-9 font-semibold text-base  spacing-5'>Download Resume <FaDownload className="mt-1" /></button>
                                    <button className=' static w-[257px] h-[50px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div>
                                    <img src="/Union.svg" className=' ml-[315px] lg:ml-72 h-[150px]  -mt-7 mb-7' alt="" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className='lg:flex justify-between  w-full '>


                    <Slide direction="left">
                        <div className='pr-10 lg:mr-44 ml-11' >
                            <Slide direction="right"><img className='lg:h-[580px] lg:w-[750px] object-contain mb-20' src="https://i.ibb.co/d4Msg6M/banner1.png" alt="" /></Slide>
                            <img className='lg:h-[500px] absolute ml-44 -mt-64 lg:ml-9 lg:-mt-[610px]' src="https://i.ibb.co/LpLDC1D/banner-Image.png" alt="" />
                            <Slide direction="left"><img className='h-[150px] absolute ml-44 -mt-64 lg:ml-32 lg:-mt-[260px]' src="https://i.ibb.co/hYbqnfd/bgImage.png" alt="" /></Slide>
                            
                        </div>
                    </Slide>

                </div>



            </div>
            <div className="w-9/12 mx-auto  gap-4 mt-5 mb-3">
                <hr className='border border-gray-400' />
            </div>
        </div>
    );
};

export default Banner;

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
        <div className='w-full mt-28 lg:mt-20'>
            <div className='lg:w-9/12 w-10/12 mx-auto lg:flex flex-row-reverse justify-around lg:gap-4' >
                <div className='flex justify-between w-full '>
                    <Slide direction="left">
                        <div className='lg:pr-10 lg:mr-44 lg:ml-11' >
                            <Slide direction="right">
                                <img className='lg:h-[600px] h-[400px] w-full lg:w-[750px] object-contain mb-20' src="https://i.ibb.co/d4Msg6M/banner1.png" alt="" />
                            </Slide>
                            <img className='lg:h-[450px] lg:mx-10 rounded-full h-[365px] lg:object-fill  object-fill lg:w-[365px] w-[290]  absolute -mt-[455px] lg:ml-[58px] ml-[51px] lg:-mt-[600px]' src="https://i.ibb.co/S5NPJhm/Banner-Image.png" alt="" />
                            <Slide direction="left">
                                <img className='lg:h-[150px] h-[140px] absolute ml-48 -mt-[170px] lg:ml-60 lg:-mt-[260px]' src="https://i.ibb.co/hYbqnfd/bgImage.png" alt="" />
                            </Slide>

                        </div>
                    </Slide>

                </div>
                <div className="w-full lg:mt-16 lg:ml-10 ">
                    <Slide direction="right">
                        <div className="lg:pt-20 pb-5 ">
                            <div className="lg:flex  ">
                                <h2 className="lg:text-3xl lg:w-5/12 flex gap-1 text-2xl lg:flex  font-medium font-serif  lg:px-3 lg:h-16 h-12 py-4 ">
                                    Hello There <FaRegHand className="animate-bounce" />, I'm
                                </h2>
                                <h2 className=" lg:w-7/12 pt-3 text-orange-600  text-start lg:px-4 lg:text-4xl text-3xl font-bold font-sans">
                                    {typeEffect1}
                                </h2>
                            </div>
                            <div className="lg:my-10">
                                <h2 className="lg:text-4xl text-3xl flex gap-2 font-semibold font-serif  lg:px-4 h-16 py-4 ">
                                    <span>{typeEffect2}</span>
                                </h2>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className=" lg:ml-10">
                                <div>
                                    <button onClick={handleDownload} className='  flex justify-center gap-3 text-center text-white pt-3 w-[257px] absolute h-[50px] bg-[#FE7E41] mt-9 font-semibold text-base  spacing-5'>Download Resume <FaDownload className="mt-1" /></button>
                                    <button className=' static w-[257px] h-[50px] border-solid border-2 mt-12 ml-5 border-black'></button>
                                </div>
                                <div className="ml-[180px] lg:ml-[315px] ">
                                    <img src="/Union.svg" className='  lg:h-[150px]  lg:-mt-7 lg:mb-7' alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </Slide>
                </div>




            </div>
            <div className="lg:w-9/12 w-11/12 mx-auto  gap-4 mt-5 mb-3">
                <hr className='border border-gray-400' />
            </div>
        </div>
    );
};

export default Banner;

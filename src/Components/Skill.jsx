import { Slide } from "react-awesome-reveal";




const Skill = () => {




    return (
        <div >
            <Slide direction="left">
                <div className=" lg:w-9/12 w-10/12 mx-auto mt-10 lg:text-center mb-16 ">
                    <p className="font-semibold font-serif underline text-5xl">My <span className="text-orange-600">Expertise</span> </p>
                </div>
            </Slide>
            <Slide direction="right">
                <div className="lg:w-9/12 w-11/12 mx-auto  mb-9 flex items-center lg:flex-row flex-col justify-evenly lg:gap-5 gap-9 object-contain ">
                    <div>
                        <img className='h-[100px]  object-cover ' src="/css.svg" alt="" />
                    </div>
                    <div >
                        <img className='h-[100px] lg:w-2/3  ' src="/daisyUi.svg" alt="" />
                    </div>
                    <div>
                        <img className='h-[100px] object-fill' src="/html.svg" alt="" />
                    </div>
                    <div>
                        <img className='h-[100px] object-fill' src="/react.svg" alt="" />
                    </div>
                </div>
            </Slide>
            <Slide direction="left">
                <div className="w-9/12 mx-auto mt-9 flex lg:flex-row flex-col gap-9 lg:gap-5 justify-evenly items-center object-contain">
                    <div>
                        <img className='h-[100px] ' src="/mongodb.svg" alt="" />
                    </div>
                    <div>
                        <img className='h-[100px] ' src="/node.svg" alt="" />
                    </div>
                    <div>
                        <img className='h-[100px] ' src="/tailwind.svg" alt="" />
                    </div>
                    <div>
                        <img className='h-[100px] ' src="/vite.svg" alt="" />
                    </div>
                </div>
            </Slide>
            <div className="lg:w-9/12 w-11/12 mx-auto  gap-4 mt-20 mb-3">
                <hr className='border border-gray-400' />
            </div>
        </div>


    );
};

export default Skill;

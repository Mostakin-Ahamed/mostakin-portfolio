import { Slide } from "react-awesome-reveal";


const Hire = () => {
    return (
        <div className="w-9/12 mx-auto ">
            <Slide direction="left">
                <div className=" lg:w-9/12 w-11/12 mx-auto mt-10 text-center mb-16 ">
                    <p className="font-semibold font-serif underline text-5xl"><span className="text-orange-600">About</span> Me </p>
                </div>
            </Slide>
            <p className="font-semibold text-justify font-serif text-2xl">As a dynamic MERN stack developer, I excel in crafting robust, scalable, and immersive web applications that captivate users and drive engagement. With a keen eye for detail and a passion for innovation, I leverage the latest technologies and best practices to deliver cutting-edge solutions that propel businesses forward. My collaborative approach fosters seamless communication and synergy within teams, ensuring projects are completed efficiently and exceed expectations. Empowered by a relentless pursuit of excellence, I am poised to tackle challenges head-on and deliver unparalleled results that elevate your digital presence and fuel your success.</p>
            <div className="lg:w-full w-11/12 mx-auto  gap-4 mt-20 mb-3">
                <hr className='border border-gray-400' />
            </div>
        </div>
    );
};

export default Hire;
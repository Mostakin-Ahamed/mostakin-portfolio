import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        { image: 'https://i.ibb.co/D81FSnL/Screenshot-2024-04-06-220501.png', proName: 'Travel-mania', liveLink: 'https://65f7bbbccac913076b52f6d8--gorgeous-sprinkles-d96c4e.netlify.app/', gitLink: 'https://github.com/Mostakin-Ahamed/Travel-mania?fbclid=IwAR3UmSrC18-XsWEhW7vrqlGQnyDq6s_QNc61lcHypMJzInuM2gR5Dq3PWm0' },

        { image: 'https://i.ibb.co/K2F9mR4/423454228-415014460890257-4724931930947896875-n.png', proName: 'ToolShare', liveLink: 'https://tool-sharing-service.web.app/?fbclid=IwAR3x1e2Dsz2owq12XZltAmTy29AzDnqQIBeb8Xq3j4VA-jh-w4xvDlDKT5M', gitLink: 'https://github.com/Mostakin-Ahamed/ToolShare-Service?fbclid=IwAR3CEe0l59rwyPN3K9adHyXOldQqDNBNO7bHBd4hWqiPGw0xTGKvufbVBOw' },

        { image: 'https://i.ibb.co/HXg12qT/Screenshot-2024-04-06-221514.png', proName: 'Boro Bazar', liveLink: 'https://borobazar-4d7fc.web.app/', gitLink: 'https://github.com/Mostakin-Ahamed/BoroBazar' },
    ];
    return (
        <div >
            <div className=" lg:w-9/12 w-11/12 mx-auto mt-14 text-center mb-16 ">
                <p className="font-semibold font-serif underline text-5xl">A Few Of My <span className="text-orange-600">Projects</span> </p>

            </div>
            <div className="lg:flex lg:gap-0 w-full justify-evenly lg:w-9/12  mx-auto ">
                {
                    projects.map((project, index) => (
                        <div key={index} className=" lg:px-8 lg:py-6 py-1 px-0 lg:w-2/3 ">
                            <Slide direction="left">
                                <div className="max-h-[650px]  pl-0 md:pl-12 lg:pl-10 mb-10">
                                    <div className="card w-96 h-full bg-inherit rounded-none shadow-md ">
                                        <figure className="">
                                            <img className='border-2' src={project.image} alt="" />
                                        </figure>
                                        <div className="card-body items-start text-center">

                                            <h2 className="text-2xl"> {project.proName}</h2>


                                            <div className="w-full gap-4 mb-3">
                                                <hr className='border border-gray-400' />
                                            </div>

                                            <div className="flex w-full  justify-evenly w-Full gap-8">

                                                <Link to={project.liveLink}><button className="btn btn-outline text-white  bg-orange-600">Live Link</button></Link>
                                                <Link to={project.gitLink}><button className="btn btn-outline  text-white bg-orange-600">GitHub Link</button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>

                    ))
                }
            </div>
            <div className="lg:w-9/12 w-11/12 mx-auto  gap-4 mt-20 mb-3">
                <hr className='border border-gray-400' />
            </div>
        </div>

    );
};

export default Projects;
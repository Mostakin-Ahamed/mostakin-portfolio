import { Slide } from "react-awesome-reveal";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="lg:w-9/12 w-11/12 mx-auto mb-10">
            <Slide direction="left">
                <div className=" lg:w-9/12 w-11/12 mx-auto mt-10 text-center mb-16 ">
                    <p className="font-semibold font-serif underline text-5xl"><span className="text-orange-600">Connect</span> With Me </p>
                </div>
            </Slide>
            <Slide direction="right">
                <div className="lg:flex justify-center gap-10 lg:ml-28">
                    
                    <div className="lg:w-1/2 w-full mx-auto ">
                        <div className=" lg:w-9/12 w-full mx-auto mt-10 lg:text-start text-center mb-16 ">
                            <p className="font-semibold font-serif underline text-3xl">Send A<span className="text-orange-600"> Message</span> </p>
                        </div>
                        <form action="https://formspree.io/f/meqyvanq" method="POST">
                            <div className="my-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Name
                                    <input type="text" name="name" className="grow" placeholder="Enter Your Name" required />
                                </label>

                            </div>
                            <div className="my-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Email
                                    <input type="text" name="email" className="grow" placeholder="Enter Your Email" required />
                                </label>
                            </div>
                            <div className="my-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    Subject
                                    <input type="text" name="subject" className="grow" placeholder="Enter Subject" required />
                                </label>
                            </div>
                            <div>
                                <textarea name="message" required className="textarea textarea-bordered w-full border-2" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn  btn-outline bg-orange-600 w-full text-white">Send</button>
                        </form>
                    </div>
                    <div className=" lg:w-1/2 w-full mt-10 lg:mt-10 mx-auto">
                        <div className=" lg:w-full w-11/12  ">
                            <p className="font-semibold font-serif w-full  lg:text-start text-center underline text-3xl lg:text-4xl">My Other <span className="text-orange-600">Socials </span></p>
                            <div className="grid gap-10 ml-10 mt-10 lg:mt-24 ">
                                <div>
                                    <a className="flex items-center" href="https://www.linkedin.com/in/mostakinahamed/">
                                        <button className="h-12 w-12 ">
                                            <FaLinkedin className="h-full w-full"></FaLinkedin>
                                        </button>
                                        <span className="font-semibold ml-5 font-serif w-full lg:text-start text-2xl lg:text-4xl ">LinkedIn</span> </a>
                                </div>
                                <div>
                                    <a className="flex items-center" href="https://github.com/Mostakin-Ahamed"><button className=" h-12 w-12"><FaGithub className="h-full w-full"></FaGithub></button><span className="font-semibold ml-5 font-serif w-full lg:text-start text-2xl lg:text-4xl ">GitHub</span>  </a>
                                </div>
                                <div className="flex items-center">
                                    <button className=" h-12 w-12"><FaPhone className="h-full w-full"></FaPhone></button><span className="font-semibold ml-5 font-serif w-full lg:text-start text-2xl lg:text-4xl ">+8801771115639</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>


    );
};

export default Contact;

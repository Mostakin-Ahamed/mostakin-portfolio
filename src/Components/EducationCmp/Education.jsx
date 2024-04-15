import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdArrowOutward } from "react-icons/md";
import { Slide } from 'react-awesome-reveal';

const Education = () => {
    const educations = [
        {
            title: "Computer Science and Engineering (Honor's)",
            company_name: "Bangladesh University of Business and Technology - BUBT",
            icon: 'https://i.ibb.co/Yh3hbFw/bubt2.jpg',
            iconBg: "#b7e4c7",
            date: "Feb 2018 - July 2023",
            visit: "https://www.bubt.edu.bd/home"

        },
        {
            title: "Higher Secondary School Certificate",
            company_name: "BPATC School & College",
            icon: 'https://i.ibb.co/RTWjgBh/alhera1.jpg',
            iconBg: "#fbc3bc",
            date: "Jun 2015 - Aug 2017",
            visit: "https://bpatcsc.org/"

        },
        {
            title: "Secondary School Certificate",
            company_name: "Mirpur Bangla High School & College",
            icon: 'https://i.ibb.co/tL4q2kq/Slide11-1.jpg',
            iconBg: "#accbe1",
            date: "March 2013 - April 2015",
            visit: "https://mbhss.edu.bd/"

        },
    ];

    return (
        <div className="font-serif  rounded-md">
            <Slide direction="left">
                <div className=" w-9/12 mx-auto mt-10 text-center mb-16 ">
                    <p className="font-semibold font-serif underline text-5xl">My <span className="text-orange-600">Education</span> </p>
                </div>
            </Slide>
            <VerticalTimeline className=''>
                {educations.map((education, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={education?.date}
                        iconStyle={{ background: education.iconBg }}
                        icon={<img className='rounded-full w-16 h-16 flex justify-center items-center' src={education.icon} alt={education.title} />}
                    >
                        <h3 className="text-xl font-semibold">{education?.title}</h3>
                        <p className="text-sm">{education?.company_name}</p>
                        <a href={education?.visit} target='_blank' className=' flex  justify-start gap-4'><MdArrowOutward className='border-b-2 text-xl border-black hover:text-2xl hover:border-[#FF7216] hover:text-[#FF7216]' />Visit</a>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Education;
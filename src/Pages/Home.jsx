import Banner from "../Components/Shared/Banner";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Education from "../Components/EducationCmp/Education";
import Contact from "./Contact";
import Hire from "../Components/Shared/Hire";



const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      {/* Navbar start */}
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div className=" lg:w-9/12 w-full lg:h-20 mx-auto navbar bg-base-100">
          <div className="flex-1 hidden lg:block ">
            <a href="/" className=" btn btn-ghost text-3xl font-serif">Mostakin Ahamed</a>
          </div>
          <div >
            <ul className="lg:gap-10 opacity-85 gap-3 menu-horizontal font-semibold font-sans text-xl lg:px-1 px-5">
              <li><button onClick={() => scrollToSection('home')}>Resume</button></li>
              <li><button onClick={() => scrollToSection('skills')}>My Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('education')}>Education</button></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Navbar end */}
      <div id="home">
        <Banner />
      </div>
      <Hire></Hire>
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>

    </div>
  );
};

export default Home;

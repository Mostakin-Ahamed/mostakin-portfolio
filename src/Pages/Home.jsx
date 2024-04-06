import Banner from "../Components/Shared/Banner";
import Skill from "../Components/Skill";
import Projects from "../Components/Projects";
import Education from "../Components/EducationCmp/Education";



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
      <div className="lg:fixed top-0 left-0 w-full z-50">
        <div className=" w-9/12 h-20 mx-auto navbar bg-base-100">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-3xl font-serif">Mostakin Ahamed</a>
          </div>
          <div className="">
            <ul className="menu gap-5 menu-horizontal font-semibold font-sans text-xl px-1">
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
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
    </div>
  );
};

export default Home;


import Education from "../Components/EducationCmp/Education";
import Projects from "../Components/Projects";
import Banner from "../Components/Shared/Banner";
import Skill from "../Components/Skill";


const Home = () => {
    return (
        <div className="mt-20">
            <Banner/>
            <Skill/>
            <Projects/>
            <Education/>
        </div>
    );
};

export default Home;
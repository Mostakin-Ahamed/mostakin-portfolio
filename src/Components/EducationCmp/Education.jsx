import Edu from "./Edu";
import Extra from "./Extra";



const Education = () => {
    return (
        <>
        <h1 className="text-4xl text-center font-extrabold mt-12">My Education</h1>
            <div className=' mt-20 grid grid-cols-12 gap-4 w-10/12 mx-auto'>

                <div className='border pl-4 col-span-12 md:col-span-6  shadow-md '>
                    <h1 className='text-center text-2xl font-bold'>Education</h1>
                    <Edu />
                </div>
                <div className='border pl-4 col-span-12 md:col-span-6'>
                    <h1 className='text-center text-2xl font-bold'>Extra Curriculum Activities</h1>
                    <Extra />
                </div>

            </div>
        </>

    );
};

export default Education;
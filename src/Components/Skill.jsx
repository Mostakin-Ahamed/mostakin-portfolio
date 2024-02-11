



const Skill = () => {
    const skills = ['html', 'git', 'bootstrap', 'c', 'cpp', 'css', 'discord', 'express', 'figma', 'firebase', 'gcp', 'github', 'js', 'jquery', 'latex', 'materialui', 'mongodb', 'mysql', 'netlify', 'nextjs', 'nodejs', 'powershell', 'py', 'react', 'redux', 'regex', 'stackoverflow', 'selenium', 'tailwind', 'vite', 'vscode', 'wordpress', 'devto', 'instagram'];

    const skillsName = ['HTML', 'git', 'bootstrap', 'c', 'cpp', 'css', 'discord', 'express', 'figma', 'firebase', 'gcp', 'github', 'js', 'jquery', 'latex', 'materialui', 'mongodb', 'mysql', 'netlify', 'nextjs', 'nodejs', 'powershell', 'py', 'react', 'redux', 'regex', 'stackoverflow', 'selenium', 'tailwind', 'vite', 'vscode', 'wordpress', 'devto', 'instagram'];

    // const anchors = ['https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/'];

    return (

        <>
        <h1 className="text-center text-4xl font-extrabold my-12">MY Skills</h1>
            <div className=' grid grid-cols-6 gap-4'>
                {
                    skills.map((skill, index) => (
                        <a
                            // style={{...circleBorder}}
                            key={skill}
                            // href={anchors[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='mx-6 my-2  py-1 flex gap-2 border rounded-full border-black shadow-md shadow-[#4F6F52] hover:bg-gradient-to-r from-[#000000] via-[#000000] to-[#163020] hover:text-white hover:text-xs' >
                            <img
                                className="rounded-full border w-8 h-8 p-1 shadow-md shadow-black"
                                key={skill}
                                src={`https://skillicons.dev/icons?i=${skills[index]}`}
                                alt="Skills" />
                            <p className="flex items-center font-serif">
                                {skillsName[index]}
                            </p>
                        </a>
                    ))
                }
            </div>
        </>


    );
};

export default Skill;

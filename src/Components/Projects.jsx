const Projects = () => {
    const projects = [
        { image: 'https://i.ibb.co/cyPQ58t/423062957-294784653618434-4609855429672320179-n.png', proName: 'Travel-mania', liveLink: 'https://tool-mania-client.web.app/?fbclid=IwAR0M-jhk7LU0hLcjrULMWULN2RKKeOF4gtachShdv8Pr14qms-cU_Tu5u_k', gitLink: 'https://github.com/Mostakin-Ahamed/Travel-mania?fbclid=IwAR3UmSrC18-XsWEhW7vrqlGQnyDq6s_QNc61lcHypMJzInuM2gR5Dq3PWm0' },


        { image: 'https://i.ibb.co/K2F9mR4/423454228-415014460890257-4724931930947896875-n.png', proName: 'ToolShare', liveLink: 'https://tool-sharing-service.web.app/?fbclid=IwAR3x1e2Dsz2owq12XZltAmTy29AzDnqQIBeb8Xq3j4VA-jh-w4xvDlDKT5M', gitLink: 'https://github.com/Mostakin-Ahamed/ToolShare-Service?fbclid=IwAR3CEe0l59rwyPN3K9adHyXOldQqDNBNO7bHBd4hWqiPGw0xTGKvufbVBOw' },

        { image: 'https://i.ibb.co/zHB9QKR/422216835-7162120293884864-6510097896618641593-n.png', proName: 'BrandShop', liveLink: 'https://automobile-shop-dcd10.web.app/?fbclid=IwAR2tdApCUOGCmRN4I07nF-FRCVWmsWKxTlbxqmfGouPwSjZADsiMTI5kAN0', gitLink: 'https://github.com/Mostakin-Ahamed/BrandShop-client?fbclid=IwAR2blzo-Y53hvrOKPqBfOYzI0QQ4jkzP9zRZVGLNatXQ-yulQyR_URhCJhs' },
    ];
    return (
        <>
         <h1 className="my-12 text-center text-4xl font-extrabold">My Project</h1>
            <div className="w-10/12 mx-auto flex gap-4 my-12">

                {
                    projects.map((project, index) => (
                        <div key={index} className="shadow-md shadow-white mx-auto px-8 py-6 w-2/3 border">
                            <img className='border-2 p-2' src={project.image} alt="" />
                            <hr className='my-2 border border-[#0F2842]' />
                            <p>Project Name: {project.proName}</p>
                            <hr className='my-2 border border-[#0F2842]' />
                            <div className="flex justify-between my-4">
                                <a href={project.gitLink}>
                                    <button className="shadow-black shadow-lg px-2 py-2 rounded-md">
                                        View Details
                                    </button>
                                </a>
                                <a href={project.liveLink}>
                                    <button className="shadow-black shadow-lg px-2 py-2 rounded-md">
                                        Live Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    );
};

export default Projects;
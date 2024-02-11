

const Extra = () => {
    return (
        <div className="custom-scrollbar overflow-y-auto max-h-[80vh]">
           <div className='my-4 relative bg-fixed bg-no-repeat border mx-4 shadow-black shadow-md custom-scrollbar-no-color overflow-y-auto h-48 ' style={{ backgroundImage: 'url(https://i.ibb.co/8dnwvRK/phero2.jpg)' }} >
                <div className='absolute top-0 right-0 p-4'>
                    <img src='https://i.ibb.co/xjwC2v7/pherologo2.jpg' alt='Logo' className='w-16 h-16 rounded-full border-2 p-1 shadow-black shadow-md border-[#517154]' />
                </div>
                <div className='p-8 text-black bg-opacity-40 bg-white'>
                    <h1 className='text-4xl font-bold ' >WEB DEVELOPMENT COURSE</h1>
                    <h3 className='text-xl ' >Jun 2023 - Dec 2023</h3>
                    <p className='text-lg ' >Programing Hero,6th batch</p>
                </div>
            </div>
        
        </div>
    );
};

export default Extra;




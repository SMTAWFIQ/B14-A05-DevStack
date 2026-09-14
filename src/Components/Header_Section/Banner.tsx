import banner from './banner-stack.png'

const Banner = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-between items-center px-4 mt-5 md:mt-0 md:px-16 md:py-0 gap-8 md:gap-8'>
        <div className='text-center md:text-left'>
            <h2 className='text-4xl lg:text-6xl font-bold'>Build Your Ideal  <br />
                <span className="gradient-text bg-clip-text text-transparent">
                    Development Stack
                </span>
            </h2>

            <p className='my-8  text-sm lg:text-[18px] text-gray-500'>
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className='flex flex-col sm:flex-row gap-2 justify-center md:justify-start'>
                <button className="text-base lg:text-lg gradient-text text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 hover:cursor-pointer transition-opacity duration-200 shadow-md">
                    Explore Technologies
                </button>
                
                <button className='text-base lg:text-lg border border-gray-300 text-gray-700 font-semibold px-13 py-3 rounded-lg hover:bg-gray-200 cursor-pointer  duration-300'>
                    Learn More
                </button>
            </div>
      
        </div>

        <div>
            <img src={banner} alt="Banner Image" className='w-150 h-100 md:w-330 md:h-120 lg:w-250 lg:h-130 ' />
        </div>
    </div>
  );
};

export default Banner;
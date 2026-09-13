import banner from './banner-stack.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center container mx-auto px-4 gap-8 md:gap-5'>
        <div className='text-center md:text-left'>
            <h2 className='text-5xl lg:text-7xl font-bold'>Build Your Ideal  <br />
                <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                    Development Stack
                </span>
            </h2>

            <p className='my-8  text-lg lg:text-xl text-gray-500'>
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className='flex flex-col sm:flex-row gap-2 justify-center md:justify-start'>
                <button className=" text-xl bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 hover:cursor-pointer transition-opacity duration-200 shadow-md">
                    Explore Technologies
                </button>
                
                <button className='text-xl border border-gray-300 text-gray-600 font-semibold px-13 py-3 rounded-lg hover:opacity-90 hover:cursor-pointer transition-opacity duration-200'>
                    Learn More
                </button>
            </div>
      
        </div>

        <div>
            <img src={banner} alt="Banner Image" className='w-150 h-150 md:w-330 md:h-140 lg:w-280 lg:h-160 xl:w-300 xl:h-180 2xl:w-250 2xl:h-175' />
        </div>
    </div>
  );
};

export default Banner;
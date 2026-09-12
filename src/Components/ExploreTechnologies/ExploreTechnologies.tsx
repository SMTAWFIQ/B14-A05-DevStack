export interface ExploreTechnologiesProps {
    prop: string
}

export default function ExploreTechnologies({ prop }: ExploreTechnologiesProps) {
    
    return (
        <div className="container mx-auto">
            <h2 className='text-4xl md:text-5xl font-bold'>
                Explore <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies
                </span>
            </h2>

            <p className="text-[20px] my-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>

            <h2> </h2>
        </div>
    )
}
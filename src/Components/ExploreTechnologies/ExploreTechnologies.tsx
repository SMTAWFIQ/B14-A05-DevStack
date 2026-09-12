import { use, useState } from "react"
import type { technologyType } from "../../type"
import TechnologyCard from "./TechnologyCard"
import SelectedTechnologies from "../Selected_Technologies/SelectedTechnologies"


export interface ExploreTechnologiesProps {
    techPromise: Promise<technologyType[]>
}

export default function ExploreTechnologies({
    techPromise
}: ExploreTechnologiesProps) {

    const technologies = use(techPromise)

    const [selectedTechnologies, setSelectedTechnologies] = useState <technologyType[]> ([])

    return (
        <div className="container mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold">
                Explore{" "}
                <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                    Technologies
                </span>
            </h2>

            <p className="text-[20px] my-2 mb-9 text-gray-500">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="grid grid-cols-4 gap-8">

                <div className="col-span-3 grid grid-cols-3 gap-6">
                    {
                    technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            setSelectedTechnologies = {setSelectedTechnologies}
                            selectedTechnologies={selectedTechnologies}
                            
                        />
                    ))
                }
                </div>

                <div className="col-span-1">
                    <SelectedTechnologies  
                        selectedTechnologies={selectedTechnologies} 
                        setSelectedTechnologies={setSelectedTechnologies}
                        />
                </div>    

            </div>


        </div>
    )
}
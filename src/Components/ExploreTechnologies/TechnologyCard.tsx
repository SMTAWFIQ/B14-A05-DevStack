import { FaStar } from "react-icons/fa"
import type { technologyType } from "../../type"
import { type Dispatch, type SetStateAction } from "react"

export interface TechnologyCardProps {
    technology: technologyType
    selectedTechnologies: technologyType[]
    setSelectedTechnologies: Dispatch<SetStateAction<technologyType[]>>
}

export default function TechnologyCard({ technology,selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) {
    


    const isSelected = !!selectedTechnologies.find(t=> t.id === technology.id)

    const handleIsSelected = () => {
        
        setSelectedTechnologies(prevTechnologies => [...prevTechnologies, technology])
    }

    return (

        <div className="border border-gray-100 rounded-2xl py-4 px-6">

            <div className="flex justify-between">
                <div >
                    <img src={technology.icon} alt="Icon" className="h-10 w-10" />
                    <h2 className="text-2xl font-semibold my-0.5">{technology.name}</h2>
                </div>

                <h3 className="font-medium text-xl ">
                    {technology.badge}
                 </h3>

            </div>
            <p className="my-2 text-xl text-gray-500">{technology.description} </p>

            <div className="flex justify-between gap-5 items-center text-xl text-gray-500 mt-6" >
                <h3 className="font-medium border border-none px-2 py-1 rounded-xl bg-gray-100 ">{technology.category}</h3>

                <h3>{technology.difficulty}</h3>

                <h2 className="font-medium text-black flex items-center gap-1">
    <FaStar className="text-yellow-400" />
    {technology.rating}
                </h2>  

            </div>
            <div>
                <button
                    onClick={handleIsSelected}
                    disabled={isSelected}
                    className={`font-normal text-xl px-5 py-4 my-2 mt-6 w-full rounded-2xl transition-colors duration-200 
                                ${
                                    isSelected
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-gray-950 text-white hover:bg-black cursor-pointer"
                                }`
                            }
                    >
                        {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>       
            </div>
        </div>
    )
}
import type { technologyType } from "../../type"
import SelectedTechnologiesCard from "./SelectedTechnologiesCard"

export interface SelectedTechnologiesProps {
    selectedTechnologies: technologyType[]
}

export default function SelectedTechnologies({ selectedTechnologies }: SelectedTechnologiesProps) {
    
    return (
        <div>
            {
                selectedTechnologies.map((stack)=>{
                    return(
                        <SelectedTechnologiesCard
                        key={stack.id} 
                        stack={stack}
                        />
                    )
                })
            }
        </div>
    )
}
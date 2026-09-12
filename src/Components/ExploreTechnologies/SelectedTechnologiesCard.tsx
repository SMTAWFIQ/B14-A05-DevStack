import type { technologyType } from "../../type"

export interface SelectedTechnologiesCardProps {
    stack: technologyType
}

export default function SelectedTechnologiesCard({ stack }: SelectedTechnologiesCardProps) {
    
    return (
        <div>
            <h2>No Stack</h2>
        </div>
    )
}
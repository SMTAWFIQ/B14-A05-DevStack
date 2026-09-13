import { use, useState } from "react";
import type { technologyType } from "../../type";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "../Selected_Technologies/SelectedTechnologies";

export interface ExploreTechnologiesProps {
  techPromise: Promise<technologyType[]>;
}

export default function ExploreTechnologies({
  techPromise,
}: ExploreTechnologiesProps) {
  const technologies = use(techPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState
    <technologyType[]>([]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold">
          Explore{" "}
          <span className="gradient-text bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-sm md:text-[20px] my-2 mb-9 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="grid grid-cols-1 lg:col-span-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              setSelectedTechnologies={setSelectedTechnologies}
              selectedTechnologies={selectedTechnologies}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <SelectedTechnologies
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
}
import type { Dispatch, SetStateAction } from "react";
import type { technologyType } from "../../type";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechnologiesProps {
  selectedTechnologies: technologyType[];
  setSelectedTechnologies: Dispatch<SetStateAction<technologyType[]>>;
}

export default function SelectedTechnologies({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesProps) {
    const handleRemoveAll = () => {
    setSelectedTechnologies([])

    toast.warning("All technologies removed from your stack!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })
}

  return (
    <div className="border border-gray-100 rounded-2xl py-4 px-6">
      <h2 className=" text-xl font-medium">Your Stack</h2>
      {selectedTechnologies.length === 0 ? (
        <>
          <p className="text-[14px] text-gray-500 my-1 mb-6">
            No Technologies Selected Yet
          </p>
          <p className="border border-dashed text-gray-500 text-center rounded-2xl my-2 py-5">
            Your Stack is empty
          </p>
        </>
      ) : (
        <>
          <h2 className="text-xl text-gray-500 my-2 ">
            {selectedTechnologies.length} Technology Selected
          </h2>
          {selectedTechnologies.map((SelectedTechnology) => {
            return (
              <div className="my-3">
                <SelectedTechnologiesCard
                  key={SelectedTechnology.id}
                  SelectedTechnology={SelectedTechnology}
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              </div>
            );
          })}

          <button
            onClick={() => handleRemoveAll()}
            className="border border-brand hover:bg-brand hover:text-white font-semibold text-base lg:text-lg text-brand px-5 py-2 my-2 mt-6 w-full rounded-2xl transition-colors duration-200"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
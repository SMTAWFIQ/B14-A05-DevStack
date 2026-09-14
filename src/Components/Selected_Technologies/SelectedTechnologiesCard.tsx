import type { Dispatch, SetStateAction } from "react";
import type { technologyType } from "../../type";
import { IoClose } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";

export interface SelectedTechnologiesCardProps {
  SelectedTechnology: technologyType;
  selectedTechnologies: technologyType[];
  setSelectedTechnologies: Dispatch<SetStateAction<technologyType[]>>;
}

export default function SelectedTechnologiesCard({
  SelectedTechnology,
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesCardProps) {
  const handleRemoveTechnology = (SelectedTechnology: technologyType) => {
    const remainigTechnologies = selectedTechnologies.filter(
      (t) => t.id !== SelectedTechnology.id,
    );
    setSelectedTechnologies(remainigTechnologies);

    toast.info(`${SelectedTechnology.name} removed from your stack!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center  py-3 px-3  border border-gray-200 rounded-2xl">
        <div className="flex gap-2 items-center">
          <img src={SelectedTechnology.icon} alt="Icon" className="h-8 w-8 lg:h-7 lg:w-9" />

          <div className="">
            <h4 className="text-base lg:text-[15px] font-medium">{SelectedTechnology.name}</h4>
            <h5 className="text-xs lg:text-xm">{SelectedTechnology.category}</h5>
          </div>
        </div>

        <IoClose
          className="text-xl lg:text-2xl text-gray-400 hover:text-brand cursor-pointer"
          onClick={() => handleRemoveTechnology(SelectedTechnology)}
        />
      </div>
    </div>
  );
}
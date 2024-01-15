import React from "react";
import { RxCross2 } from "react-icons/rx";

const TagCard = ({ value, handleRemoveTag, selected = false }) => {
  return (
    <div
      className={`m-1 flex ${
        selected ? "bg-slate-200 opacity-30" : "bg-slate-200 "
      } justify-center items-center h-6  rounded-full capitalize`}
    >
      <div className="border w-6 h-6 bg-blue-500 rounded-full text-white text-sm flex items-center justify-center">
        {value[0].toUpperCase()}
      </div>
      <span className="mx-1 ">{value}</span>{" "}
      <RxCross2
        onClick={() => handleRemoveTag(value)}
        className="cursor-pointer mx-1"
      />
    </div>
  );
};

export default TagCard;

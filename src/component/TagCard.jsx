import React from "react";
import { RxCross2 } from "react-icons/rx";

const TagCard = ({ value, handleRemoveTag, selected = false }) => {
  return (
    <div
      className={`m-1 flex border-2 ${
        selected ? " border-blue-500" : " border-none "
      } bg-slate-200 justify-center items-center h-6  rounded-full capitalize`}
    >
      <div className="flex items-center justify-center w-6 h-6 text-sm text-white bg-blue-500 rounded-full">
        {value[0].toUpperCase()}
      </div>
      <span className="mx-1 ">{value}</span>{" "}
      <RxCross2
        onClick={() => handleRemoveTag(value)}
        className="mx-1 cursor-pointer"
      />
    </div>
  );
};

export default TagCard;

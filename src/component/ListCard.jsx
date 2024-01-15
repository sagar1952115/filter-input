import React from "react";

const ListCard = ({ handleAddTag, value }) => {
  return (
    <div
      onClick={(e) => handleAddTag(value)}
      className="p-2 flex items-center capitalize hover:bg-gray-200"
    >
      <div className="w-8 h-8 border text-white bg-blue-500 flex items-center justify-center mx-2 rounded-full">
        {value[0].toUpperCase()}
      </div>
      {value}
    </div>
  );
};

export default ListCard;

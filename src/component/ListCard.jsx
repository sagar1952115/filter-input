import React from "react";

const ListCard = ({ handleAddTag, value }) => {
  return (
    <div
      onMouseDown={(e) => handleAddTag(value)}
      className="flex items-center p-2 capitalize hover:bg-gray-200"
    >
      <div className="flex items-center justify-center w-8 h-8 mx-2 text-white bg-blue-500 border rounded-full">
        {value[0].toUpperCase()}
      </div>
      {value}
    </div>
  );
};

export default ListCard;

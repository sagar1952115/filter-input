import React, { useState } from "react";
import ListCard from "./ListCard";
import TagCard from "./TagCard";

const tagsArray = [
  "technology",
  "lifestyle",
  "programming",
  "travel",
  "food",
  "foo",
  "foody",
  "fo",
  "fashion",
  "music",
  "photography",
  "art",
  "science",
  "health",
  "gaming",
  "movies",
  "books",
  "design",
  "business",
  "sports",
  "nature",
  "education",
];

const InputField = () => {
  const [showElement, setShowElement] = useState(false);
  const [selected, setSelect] = useState(false);
  const [rem, setRem] = useState(tagsArray);
  const [filteredData, setFilteredData] = useState(tagsArray);
  const [searchValue, setSearchValue] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" && e.key === "Backspace") {
      const lastTag = selectedData[selectedData.length - 1];
      if (lastTag && !selected) {
        setSelect(true);
      } else if (lastTag && selected) {
        selectedData.splice(selectedData.length - 1, 1);
        setSelectedData(selectedData);
        setRem([...rem, lastTag]);
        setFilteredData([...filteredData, lastTag]);
        setSelect(false);
      }
    } else {
      setSearchValue(value);
      const filterTags = rem.filter((tags) =>
        tags.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filterTags);
      setSelect(false);
    }
  };
  const handleAddTag = (value) => {
    setSelectedData([...selectedData, value.toLowerCase()]);
    let newData = rem.filter((tags) => tags !== value);
    setRem(newData);
    setFilteredData(newData);
    setSelect(false);
    setSearchValue("");
  };
  const handleRemoveTag = (value) => {
    setSelectedData(selectedData.filter((tags) => tags !== value));
    setRem([...rem, value]);
    setFilteredData([...filteredData, value]);
    setSelect(false);
  };

  const showList = () => {
    setShowElement(true);
  };

  const hideList = () => {
    setTimeout(() => {
      setShowElement(false);
    }, [500]);
  };

  return (
    <div>
      <div className="flex border-b-2  border-blue-500 flex-wrap">
        {/* <div className="flex flex-wrap p-2"> */}
        {selectedData.map((tag, i) => {
          return (
            <div key={i}>
              {selected && i === selectedData.length - 1 ? (
                <TagCard
                  handleRemoveTag={handleRemoveTag}
                  value={tag}
                  selected={true}
                />
              ) : (
                <TagCard handleRemoveTag={handleRemoveTag} value={tag} />
              )}
            </div>
          );
        })}
        {/* </div> */}
        <div className="p-2 w-full  lg:w-[250px]">
          <input
            value={searchValue}
            onChange={handleInputChange}
            onFocus={showList}
            onBlur={hideList}
            onKeyDown={handleInputChange}
            placeholder="Search here"
            className="outline-none w-full lg:w-[250px]"
            type="text"
          />
          {showElement && (
            <div className="scroll-bar hidden lg:block fixed w-[85%] max-h-[250px] overflow-y-scroll bg-white mt-3 lg:w-[250px] shadow-md">
              {filteredData.map((curr, i) => {
                return (
                  <ListCard handleAddTag={handleAddTag} value={curr} key={i} />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {showElement && (
        <div className="scroll-bar lg:hidden w-full max-h-[250px]  overflow-y-scroll bg-white mt-1 lg:w-[250px] shadow-md">
          {filteredData.map((curr, i) => {
            return (
              <ListCard handleAddTag={handleAddTag} value={curr} key={i} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputField;

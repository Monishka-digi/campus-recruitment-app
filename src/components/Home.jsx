import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { keyConvertor } from "../utils";
import { details } from "../contant";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const [campusData, setCampusData] = useState({
    campus_name: "",
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    test_duration: "",
    total_marks: "",
    passing_marks: "",
    tags: [],
  });
  const onSelect = (selectedList, selectedItem) => {
    // console.log(selectedItem);
    // console.log("selectedList", selectedList)
    setCampusData({
        ...campusData,
        tags: selectedList.map(item => item.key)
    })
  };
  const onRemove = (selectedList, removedItem) => {
    // console.log(removedItem);
    // console.log("selectedList", selectedList)
    setCampusData({
        ...campusData,
        tags: selectedList.map(item => item.key)
    })
  };
  const handleChange = (event) => {
   const { name, value } = event.target
   setCampusData({
    ...campusData, 
    [keyConvertor(name)]: value
   })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked", campusData);
  };
  return (
    <div className="mx-auto max-w-md p-6 mt-5 shadow-lg rounded-lg">
      <div className="ml-56 p-3 mt-2 mx-80fixed rounded-l-lg">
        <img src="src\img\MicrosoftTeams-image.png"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <header className="text-xl text-teal-400 font-bold mb-4">
          Test Details
        </header>
        {details.map(
          ({ title, type, className, display, isSelect, options }, index) => (
            <div key={index} className={display}>
              <label className="block text-sm leading-loose">{title}</label>
              {!isSelect ? (
                <input
                  className={className}
                  name={title}
                  placeholder={title}
                  type={type ? type : "text"}
                  value={campusData[keyConvertor(title)]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <Multiselect
                  displayValue="key"
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={onRemove}
                  onSearch={function noRefCheck() {}}
                  onSelect={onSelect}
                  options={options}
                />
              )}
            </div>
          )
        )}
        <button
          className="bg-teal-400 rounded-full mt-3 ms-80 p-2 text-xl text-white font-semibold shadow-lg  "
          
        >
          <FaArrowRight onClick={handleSubmit} />
        </button>
      </form>
    </div>
  );
};

export default Home;

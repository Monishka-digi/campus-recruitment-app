import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Multiselect from "multiselect-react-dropdown";

import { keyConvertor } from "../utils";
import { details } from "../contant";
import { useCampus } from "../Hooks/CampusHooks";
import { homeFormSchema } from "../schema/homeFormSchema";

const Home = () => {
  const { campusData, onSelect, onRemove, handleChange } = useCampus();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await homeFormSchema(campusData);
      console.log("Validation succeeded: " + result);
      if (result) {
        navigate("/add-questions");
      }
    } catch (error) {
      console.error("Validation failed: " + error);
    }
  };

  return (
    <div className="mx-auto max-w-md p-6 mt-5 shadow-lg rounded-lg">
      <div className="ml-56 p-3 mt-2 mx-80fixed rounded-l-lg">
        <img src="assets/logo.png"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <header className="text-xl text-teal-400 font-bold mb-4">
          Test Details
        </header>
        {details.map(
          (
            { title, type, className, display, isSelect, options, min },
            index
          ) => (
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
                  min={type === "date" ? min : null}
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
        <button className="bg-teal-400 rounded-full mt-3 ms-80 p-2 text-xl text-white font-semibold shadow-lg  ">
          <FaArrowRight onClick={handleSubmit} />
        </button>
      </form>
    </div>
  );
};

export default Home;

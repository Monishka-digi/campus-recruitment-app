import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { keyConvertor } from "../utils";
import { details } from "../contant";
import { FaArrowRight } from "react-icons/fa6";
import { useCampus } from "../Hooks/CampusHooks";

const Home = () => {
  const {
    campusData,
    onSelect,
    onRemove,
    handleChange,
    handleSubmit,
  } = useCampus();
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
        <button className="bg-teal-400 rounded-full mt-3 ms-80 p-2 text-xl text-white font-semibold shadow-lg  ">
          <FaArrowRight onClick={handleSubmit} />
        </button>
      </form>
    </div>
  );
};

export default Home;

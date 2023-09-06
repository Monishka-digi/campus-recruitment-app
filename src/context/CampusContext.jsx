import { useState, useMemo } from "react";
import { CampusContext } from "./RootContext";
import { keyConvertor } from "../utils";

export const CampusProvider = ({ children }) => {
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
      tags: selectedList.map((item) => item.key),
    });
  };
  const onRemove = (selectedList, removedItem) => {
    // console.log(removedItem);
    // console.log("selectedList", selectedList)
    setCampusData({
      ...campusData,
      tags: selectedList.map((item) => item.key),
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCampusData({
      ...campusData,
      [keyConvertor(name)]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked", campusData);
  };
  const memoizedValue = useMemo(() => ({
    campusData,
    setCampusData,
    onSelect,
    onRemove,
    handleChange,
    handleSubmit,
  }), [campusData]);

  return (
    <CampusContext.Provider value={ memoizedValue }>{children}</CampusContext.Provider>
  );
};

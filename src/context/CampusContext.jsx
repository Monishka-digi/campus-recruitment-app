import { useState, useMemo, useEffect } from "react";
import { CampusContext } from "./RootContext";

import { keyConvertor } from "../utils";
import { initialCampusData } from "../contant";

export const CampusProvider = ({ children }) => {
  const [campusData, setCampusData] = useState(initialCampusData);

  useEffect(()=>{
    const getPersitData = localStorage.getItem("campusData");
    let parsedCampusData = campusData;
    if (getPersitData) {
      parsedCampusData = JSON.parse(getPersitData);
    }
    setCampusData(parsedCampusData)
  },[]);

  const onSelect = (selectedList) => {
    setCampusData({
      ...campusData,
      tags: selectedList,
    });

    const getPersitData = localStorage.getItem("campusData");
    if (getPersitData) {
      let parsedCampusData = JSON.parse(getPersitData);
      parsedCampusData = {
        ...parsedCampusData,
        tags: selectedList,
      };
      localStorage.setItem("campusData", JSON.stringify(parsedCampusData));
    }
  };

  const onRemove = (selectedList) => {
    setCampusData({
      ...campusData,
      tags: selectedList,
    });

    const getPersitData = localStorage.getItem("campusData");
    if (getPersitData) {
      let parsedCampusData = JSON.parse(getPersitData);
      parsedCampusData = {
        ...parsedCampusData,
        tags: selectedList,
      };
      localStorage.setItem("campusData", JSON.stringify(parsedCampusData));
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCampusData({
      ...campusData,
      [keyConvertor(name)]: value,
    });
    const getPersitData = localStorage.getItem("campusData");
    if (getPersitData) {
      let parsedCampusData = JSON.parse(getPersitData);
      parsedCampusData = {
        ...parsedCampusData,
        [keyConvertor(name)]: value,
      };
      localStorage.setItem("campusData", JSON.stringify(parsedCampusData));
    } else {
      localStorage.setItem("campusData", JSON.stringify({
        ...campusData,
        [keyConvertor(name)]: value,
      }));
    }
  };

  const memoizedValue = useMemo(
    () => ({
      campusData,
      setCampusData,
      onSelect,
      onRemove,
      handleChange,
    }),
    [campusData]
  );

  return (
    <CampusContext.Provider value={memoizedValue}>
      {children}
    </CampusContext.Provider>
  );
};

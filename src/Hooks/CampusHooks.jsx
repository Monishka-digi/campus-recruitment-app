import { useContext } from "react";
import { CampusContext } from "../context/RootContext";

export const useCampus = () => {
  return useContext(CampusContext);
};

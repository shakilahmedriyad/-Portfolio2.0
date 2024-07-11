import { ActiveContextProvider } from "@/lib/ActiveStatusContext";
import { useContext } from "react";

export const useActiveHooks = () => {
  const activeStatus = useContext(ActiveContextProvider);
  if (!activeStatus) throw new Error(`hummmm`);
  return activeStatus;
};

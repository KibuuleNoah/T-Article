import { useContext } from "react";
import { AppCtx } from "../../contexts/AppContext";

export const useApp = () => {
  const context = useContext(AppCtx);

  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return context;
};

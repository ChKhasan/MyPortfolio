import React from "react";
import { TOKEN } from "../const/API";

const useAuth = () => {
  if (localStorage.getItem(TOKEN)) return true;
  return false;
};

export default useAuth;

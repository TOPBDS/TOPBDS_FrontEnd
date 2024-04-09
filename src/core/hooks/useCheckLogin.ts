import { useEffect } from "react";

export const useCheckLogin = () => {
  useEffect(() => {
    if (window.location.href !== "http://127.0.0.1:8080/login")
      window.location.href = "/login";
  }, [window.location]);
};
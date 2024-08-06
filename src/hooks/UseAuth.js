import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Logic kiểm tra authentication
  }, []);

  return { isAuthenticated };
};

export default useAuth;

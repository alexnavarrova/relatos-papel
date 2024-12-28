import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dummyCredentials = {
    username: "user123",
    password: "password123",
  };

  const login = (username, password) => {
    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      setUser({ username });
      setError(null);
      return true;
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    error,
    login,
    logout,
  };
};

export default useAuth;

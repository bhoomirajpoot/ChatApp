import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("chatUser"));
    if (savedUser) {
      setUser(savedUser);
      document.documentElement.setAttribute("data-theme", savedUser.theme);
    }
  }, []);

  const loginUser = (data) => {
    setUser(data.user);
    localStorage.setItem("chatUser", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    document.documentElement.setAttribute("data-theme", data.user.theme);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

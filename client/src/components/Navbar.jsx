import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState("");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    localStorage.setItem("chatKaroTheme", event.target.value);
    document.documentElement.setAttribute("data-theme", event.target.value);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("chatKaroTheme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);

  return (
    <div className="bg-primary flex justify-between px-5 py-2 items-center">
      <h1 className="font-bold text-lg">ChatKaro</h1>

      <div className="flex gap-4">
        <span>Home</span>
        <span>About</span>
      </div>

      <div className="flex gap-3 items-center">
        {user ? (
          <>
            <span>Hello, {user.fullName}</span>
            <button onClick={logout} className="btn btn-secondary">
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-secondary" onClick={() => window.location.href = "/login"}>
              Login
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href = "/register"}>
              Register
            </button>
          </>
        )}

        <select
          name="theme"
          id="theme"
          className="select select-bordered"
          onChange={handleThemeChange}
          value={theme}
        >
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="claude">Claude</option>
          <option value="spotify">Spotify</option>
          <option value="vscode">VSCode</option>
          <option value="black">Black</option>
          <option value="corporate">Corporate</option>
          <option value="ghibli">Ghibli</option>
          <option value="gourmet">Gourmet</option>
          <option value="luxury">Luxury</option>
          <option value="mintlify">Mintlify</option>
          <option value="pastel">Pastel</option>
          <option value="perplexity">Perplexity</option>
          <option value="shadcn">Shadcn</option>
          <option value="slack">Slack</option>
          <option value="soft">Soft</option>
          <option value="valorant">Valorant</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

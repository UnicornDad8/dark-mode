import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Switch from "./components/Switch";
import "./App.css";

function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={`page-conatiner ${theme === "dark" && "dark"}`}>
      <div className="container">
        <h1>{theme === "dark" ? "Dark" : "Light"} Mode</h1>
        <div className="card">
          {theme === "dark" ? (
            <BsFillMoonFill className="icon" size={30} />
          ) : (
            <BsFillSunFill className="icon" size={30} />
          )}
          <p>Use the toggle to switch from light mode to dark mode...</p>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
}

export default App;

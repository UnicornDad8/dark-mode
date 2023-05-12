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
            <div className="icon-box">
              <BsFillMoonFill className="icon" size={30} />
            </div>
          ) : (
            <div className="icon-box">
              <BsFillSunFill className="icon" size={30} />
            </div>
          )}
          <p>
            Use the toggle to switch from <span className="bold">light</span>{" "}
            mode to <span className="bold">dark</span> mode...
          </p>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../context";

function DarkModeToggler({
  darkMode,
  toggleTheme = () => console.log("toggled"),
}) {
  // const [dark, setDark] = React.useState(
  //   document.body.classList.contains("dark") ? true : false
  // );

  const darkModeHandler = () => {
    toggleTheme();
    // document.body.classList.toggle("dark");
  };

  return (
    <div className="flex items-center">
      <p>{darkMode}</p>
      <button onClick={darkModeHandler}>
        {darkMode ? <IoMdSunny /> : <FaMoon />}
      </button>
    </div>
  );
}

export default DarkModeToggler;

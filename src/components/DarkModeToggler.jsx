import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

function DarkModeToggler() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex items-center">
      <button onClick={() => darkModeHandler()}>
        {dark && <IoMdSunny />}
        {!dark && <FaMoon />}
      </button>
    </div>
  );
}

export default DarkModeToggler;

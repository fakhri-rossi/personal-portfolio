import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { ThemeContext } from "./context";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    // <ThemeContext.Provider value={theme}>
    <div id="main-app" className="m-0 p-0 w-auto bg-white dark:bg-black">
      <RouterProvider router={router} />
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;

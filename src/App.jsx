import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return (
    <div id="main-app" className="m-0 p-0 w-auto bg-white dark:bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

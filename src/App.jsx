import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return (
    <div className="m-0 p-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

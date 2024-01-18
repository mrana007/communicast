import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./Routes/Routes";
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="px-2 md:px-6">
    <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);

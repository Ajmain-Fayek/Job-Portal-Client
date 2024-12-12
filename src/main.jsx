import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/Routes.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    </StrictMode>
);
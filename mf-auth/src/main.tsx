import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Auth from "./Auth.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth />
  </StrictMode>
);

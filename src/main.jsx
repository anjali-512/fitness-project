import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={"pk_test_ZWFnZXIta29hbGEtNjkuY2xlcmsuYWNjb3VudHMuZGV2JA"}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);

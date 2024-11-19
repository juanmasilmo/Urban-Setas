import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";
import App from "./App.tsx";
import "flyonui/flyonui"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

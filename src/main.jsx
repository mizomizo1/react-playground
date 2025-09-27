import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import Contents from "./components/Contesnts.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
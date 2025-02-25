import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);

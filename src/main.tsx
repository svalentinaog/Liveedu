import "./styles/main.scss";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/style.scss";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

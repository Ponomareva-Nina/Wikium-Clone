import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { store } from "./store/store";
import "./translation/i18n";
import "./variables.scss";
import "./common.scss";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <App />
    </HashRouter>
  </Provider>
  // </React.StrictMode>
);

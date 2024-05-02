import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-d8mml4rvys32z8lg.us.auth0.com"
    clientId="Fa8EeWOwl4rnXjMwHqNODT0Lfm3Wh8S5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

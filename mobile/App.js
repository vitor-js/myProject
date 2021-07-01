//# Packages
import React from "react";

//# Redux
import { Provider } from "react-redux";
import store from "./src/store";

//# Initial Router
import Router from "./src/routes/index";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

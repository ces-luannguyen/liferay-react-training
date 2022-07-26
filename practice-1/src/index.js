import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./form/store";
import App from "./components/App";
/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({
  portletNamespace,
  contextPath,
  portletElementId,
}) {
  const root = ReactDOM.createRoot(document.getElementById(portletElementId));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

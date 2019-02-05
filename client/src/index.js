import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// import store from "./store";
// import { Provider } from "react-redux";
import ThemeProvider from './providers/ThemeProvider';

ReactDOM.render(
   <ThemeProvider>
      {/* <Provider store={store}> */}
         <Router>
            <App />
         </Router>
      {/* </Provider> */}
   </ThemeProvider>,
   document.getElementById("root")
);

serviceWorker.unregister();

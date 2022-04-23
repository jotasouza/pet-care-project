//React
import React from "react";
import ReactDOM from "react-dom";

//Components
// import Cadastro from "./pages/Cadastro";
import Checkout from "./pages/Checkout";

//Styles
import GlobalStyle from "./style/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Checkout />
  </React.StrictMode>,
  document.getElementById("root")
);

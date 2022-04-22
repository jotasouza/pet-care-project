//React
import React from "react";
import ReactDOM from "react-dom";

//Components
import Cadastro from "./pages/Cadastro";

//Styles
import GlobalStyle from "./style/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Cadastro />
  </React.StrictMode>,
  document.getElementById("root")
);

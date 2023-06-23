import React from "react";
import Formulario from "../Formulario";
import Lista from "../Lista";
// import Formulario from "../components/Formulario";
// import Lista from "../components/Lista";
//import Cronometro from "../components/Cronometro";
import style from "./App.module.scss";
import Cronometro from "../Cronometro";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;

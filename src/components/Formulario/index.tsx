import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>{" "}
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="data">Data</label>
          <input type="date" step="1" name="data" />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            min="01:01:2023"
            max="31:12:2050"
            required
          />
        </div>
        <Botao>Add</Botao>
      </form>
    );
  }
}

export default Formulario;

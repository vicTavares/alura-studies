import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>{" "}
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div>
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
        <Botao />
      </form>
    );
  }
}

export default Formulario;

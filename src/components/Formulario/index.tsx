import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    // adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) { //evento  e um React.FormEvent que vem de um <HTMLFormElement>
    evento.preventDefault();
    // console.log("state: ", this.state); // Ao inves de utilizar o console.log utilizar o setTarefas
    /* console.log("state:", this.state);*/
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);

    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)} // associar adicionar tarefa ao this com o bind(this)
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Add a new study</label>{" "}
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            id="tarefa"
            placeholder="What do you want to study"
            required
          />
        </div>
        {/*<div className={style.inputContainer}>
          <label htmlFor="data">Data</label>
          <input type="date" step="1" name="data" />
        </div>*/}
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Time</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="01:01:2023"
            max="31:12:2050"
            required
          />
        </div>
        {/* <Botao type="reset">Reset</Botao>*/}
        <Botao type="submit"> Add</Botao>
      </form>
    );
  }
}

export default Formulario;

import React, { useState } from "react";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from "./App.module.scss";
import Cronometro from "../Cronometro";
import { ITarefa } from "../../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); // to Type useState como uma array <ITarefa[] ou uma array vazia []
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;

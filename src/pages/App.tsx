import React, { useState } from "react";
import { FormularioDeTarefa } from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";
import { ITarefa } from "../types/tarefa";
import Cronometro from "../components/Cronometro";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); // to Type useState como uma array <ITarefa[] ou uma array vazia []
  const selecionado: ITarefa | undefined = tarefas.filter(
    (tarefa) => tarefa.selecionado === true
  )[0];

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormularioDeTarefa setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;

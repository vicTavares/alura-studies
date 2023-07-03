import React, { useState } from "react";
import { FormularioDeTarefa } from "../components/Formulario";
import { Lista } from "../components/Lista";
import style from "./App.module.scss";
import { ITarefa } from "../types/tarefa";
import { Cronometro } from "../components/Cronometro";

export function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]); // to Type useState como uma array <ITarefa[] ou uma array vazia []
  const tarefaSelect: ITarefa | undefined = tarefas.filter(
    (tarefa) => tarefa.status === "selected"
  )[0];

  const tarefaDoing: ITarefa | undefined = tarefas.filter(
    (tarefa) => tarefa.status === "doing"
  )[0];

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        status:
          tarefa.id === tarefaSelecionada.id
            ? "selected"
            : tarefa.status === "selected"
            ? "todo"
            : tarefa.status,
      }))
    );
  }

  function iniciarTarefa() {
    if (tarefaSelect) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === tarefaSelect.id) {
            return {
              ...tarefa,
              status: "doing",
            };
          }
          return tarefa;
        })
      );
    }
  }

  function finalizarTarefa() {
    if (tarefaSelect) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === tarefaSelect.id) {
            return {
              ...tarefa,
              status: "done",
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
      <Cronometro
        iniciarTarefa={iniciarTarefa}
        tarefaAlvo={tarefaSelect || tarefaDoing}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;

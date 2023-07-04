import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import { Botao } from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function FormularioDeTarefa({ setTarefas }: Props) {
  const [textoDaTarefa, setTextoDaTarefa] = useState("");
  //const [duracaoDaTarefa, setDuracaoDaTarefa] = useState("00:00:00");
  const [duracaoDaTarefaHora, setDuracaoDaTarefaHora] = useState(0);
  const [duracaoDaTarefaMinuto, setDuracaoDaTarefaMinuto] = useState(0);
  const [duracaoDaTarefaSegundo, setDuracaoDaTarefaSegundo] = useState(0);

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa: textoDaTarefa,
        //tempo: duracaoDaTarefa,
        duracaoEmSegundos:
          duracaoDaTarefaHora * 3600 +
          duracaoDaTarefaMinuto * 60 +
          duracaoDaTarefaSegundo,
        status: "todo",
        disabled: "true",
        id: uuidv4(),
      },
    ]);
    setTextoDaTarefa("");
    // setDuracaoDaTarefa("00:00");
    setDuracaoDaTarefaHora(0);
    setDuracaoDaTarefaMinuto(0);
    setDuracaoDaTarefaSegundo(0);
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa" className={style.label}>
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={textoDaTarefa}
          onChange={(evento) => setTextoDaTarefa(evento.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <span className={style.label}>Duração</span>
        <input
          type="number"
          placeholder="horas"
          step="1"
          name="hora"
          //value={duracaoDaTarefa}
          value={duracaoDaTarefaHora}
          onChange={(evento) =>
            setDuracaoDaTarefaHora(Number(evento.target.value))
          }
          id="hora"
          min="00"
          required
        />
        <input
          type="number"
          placeholder="minutos"
          step="1"
          name="minuto"
          //value={duracaoDaTarefa}
          value={duracaoDaTarefaMinuto}
          onChange={(evento) =>
            setDuracaoDaTarefaMinuto(Number(evento.target.value))
          }
          id="minuto"
          min="00"
          required
        />
        <input
          type="number"
          placeholder="segundos"
          step="1"
          name="segundo"
          //value={duracaoDaTarefa}
          value={duracaoDaTarefaSegundo}
          onChange={(evento) =>
            setDuracaoDaTarefaSegundo(Number(evento.target.value))
          }
          id="segundo"
          min="00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

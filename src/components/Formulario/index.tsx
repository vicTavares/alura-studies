import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import { Botao } from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

export interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function FormularioDeTarefa({ setTarefas }: Props) {
  const [textoDaTarefa, setTextoDaTarefa] = useState("");
  //const [duracaoDaTarefa, setDuracaoDaTarefa] = useState("00:00:00");
  const [duracaoDaTarefaHora, setDuracaoDaTarefaHora] = useState<
    number | undefined
  >();
  const [duracaoDaTarefaMinuto, setDuracaoDaTarefaMinuto] = useState<
    number | undefined
  >();
  const [duracaoDaTarefaSegundo, setDuracaoDaTarefaSegundo] = useState<
    number | undefined
  >();

  const duracaoDaTarefaEmSegundos =
    (duracaoDaTarefaHora || 0) * 3600 +
    (duracaoDaTarefaMinuto || 0) * 60 +
    (duracaoDaTarefaSegundo || 0);

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa: textoDaTarefa,
        //tempo: duracaoDaTarefa,
        duracaoEmSegundos: duracaoDaTarefaEmSegundos,
        status: "todo",
        disabled: "true",
        id: uuidv4(),
      },
    ]);
    setTextoDaTarefa("");
    // setDuracaoDaTarefa("00:00");
    setDuracaoDaTarefaHora(undefined);
    setDuracaoDaTarefaMinuto(undefined);
    setDuracaoDaTarefaSegundo(undefined);
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
        <div className={style.div_font}>
          {" "}
          <input
            alt="horas"
            type="number"
            placeholder="horas"
            step="1"
            name="hora"
            //value={duracaoDaTarefa}
            value={duracaoDaTarefaHora || ""}
            onChange={(evento) =>
              setDuracaoDaTarefaHora(
                evento.target.value === ""
                  ? undefined
                  : Number(evento.target.value)
              )
            }
            id="hora"
            min="0"
          />{" "}
          : <label htmlFor="hora">Hora(s)</label>
        </div>

        <div className={style.div_font}>
          {" "}
          <input
            type="number"
            placeholder="minutos"
            step="1"
            name="minuto"
            value={duracaoDaTarefaMinuto || ""}
            onChange={(evento) => {
              console.log(evento.target.value);
              setDuracaoDaTarefaMinuto(
                evento.target.value === ""
                  ? undefined
                  : Number(evento.target.value)
              );
            }}
            id="minuto"
            min="0"
          />{" "}
          : <label htmlFor="minuto">Minuto(s)</label>
        </div>

        <div className={style.div_font}>
          {" "}
          <input
            type="number"
            placeholder="segundos"
            step="1"
            name="segundo"
            //value={duracaoDaTarefa}
            value={duracaoDaTarefaSegundo || ""}
            onChange={(evento) =>
              setDuracaoDaTarefaSegundo(
                evento.target.value === ""
                  ? undefined
                  : Number(evento.target.value)
              )
            }
            id="segundo"
            min="0"
          />{" "}
          : <label htmlFor="segundo">Segundo(s)</label>
        </div>
      </div>
      <Botao
        disabled={duracaoDaTarefaEmSegundos === 0 || textoDaTarefa === ""}
        type="submit"
      >
        Adicionar
      </Botao>
    </form>
  );
}

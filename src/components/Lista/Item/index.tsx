import { useEffect, useState } from "react";
import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
  disabled?: boolean;
  estaFocado?: boolean;
}

export function formataHora(duracaoEmSegundos: number) {
  // deve retornar string nesse formato: 12:59:00
  const hora = String(Math.round(duracaoEmSegundos / 3600));
  const minuto = String(Math.round((duracaoEmSegundos % 3600) / 60));
  const segundo = String((duracaoEmSegundos % 3600) % 60);
  const horaFormatadaDeSegundos =
    hora.padStart(2, "0") +
    ":" +
    minuto.padStart(2, "0") +
    ":" +
    segundo.padStart(2, "0");
  return horaFormatadaDeSegundos;
}

export function Item({
  tarefa,
  duracaoEmSegundos,
  id,
  status,
  disabled,
  selecionaTarefa,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !disabled && isFocused) {
        selecionaTarefa({
          tarefa,
          duracaoEmSegundos,
          id,
          status,
        });
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [isFocused]);

  useEffect(() => {
    // codigo rodado quando os estados do array mudar
    return () => {
      // codigo rodado quando o componente Item for desmontado (removido pelo React)
    };
  }, []);

  return (
    <li
      tabIndex={0}
      className={` 
      ${style.item}  
      ${status === "selected" ? style.itemSelecionado : ""} 
      ${status === "done" ? style.itemCompletado : ""} 
      ${status === "doing" ? style.itemExecutando : ""}
      ${disabled ? style.itemDesabilitado : ""}
      `}
      onFocus={() => {
        setIsFocused(true);
      }}
      /* onFocus={() => {
        if (event.key === "Enter") {
        }
      }}*/
      onBlur={() => {
        setIsFocused(false);
      }}
      // onFocus={() => {
      //setFocado(true);
      //

      //if(e.keyCode == 13)
      //}}

      onClick={() => {
        !disabled &&
          selecionaTarefa({
            tarefa,
            duracaoEmSegundos,
            id,
            status,
          });
      }}
    >
      <h3> {tarefa} </h3>
      <span>{formataHora(duracaoEmSegundos)} </span>

      {status === "done" && (
        <span className={style.concluido} aria-label="tarefa concluída"></span>
      )}
    </li>
  );
}

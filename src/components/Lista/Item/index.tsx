import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
  disabled?: boolean;
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
  return (
    <li
      className={` 
      ${style.item}  
      ${status === "selected" ? style.itemSelecionado : ""} 
      ${status === "done" ? style.itemCompletado : ""} 
      ${status === "doing" ? style.itemExecutando : ""}
      ${disabled ? style.itemDesabilitado : ""}
      
  
      
     

      `}
      onClick={() => {
        if (status === "todo" && disabled == false) {
          selecionaTarefa({
            tarefa,
            duracaoEmSegundos,
            id,
            status,
          });
        }
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

import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
  disabled?: boolean;
}

export function Item({
  tarefa,
  tempo,
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
            tempo,
            id,
            status,
          });
        }
      }}
    >
      <h3> {tarefa} </h3>
      <span>{tempo} </span>

      {status === "done" && (
        <span className={style.concluido} aria-label="tarefa concluída"></span>
      )}
    </li>
  );
}

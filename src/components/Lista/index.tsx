import style from "./Lista.module.scss";
import { Item } from "./Item";
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export function Lista({ tarefas, selecionaTarefa }: Props) {
  const existeAlgumaTarefaDoing = tarefas.some(
    (tarefa) => tarefa.status === "doing"
  );

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tarefas.length === 0 && (
        <h3 className={style.informTarefa}>Nenhuma tarefa adicionada.</h3>
      )}
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
            disabled={
              tarefas.length === 0 ||
              (existeAlgumaTarefaDoing && item.status === "todo")
            }
            // disabled={duracaoDaTarefaEmSegundos === 0 || textoDaTarefa === ""}
          />
        ))}
      </ul>
    </aside>
  );
}

//export default Lista;

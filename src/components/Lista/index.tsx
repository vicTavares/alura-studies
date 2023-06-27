import React, { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  //function Lista({ tarefas }: { tarefas: ITarefa[] }) {

  // requisicao

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

/*function Lista({ tarefas }: { tarefas: ITarefa[] }) {
//function Lista(props: { tarefas: ITarefa[] }) {
  // Lista transferida para App.tsx em pages

  const [tarefas, setTarefas] = useState(props.tarefas);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([
            ...tarefas,
            { tarefa: "Estudar Estado", tempo: "05:00:00" },
          ]);
        }}
      >
        {" "}
        Estudos do dia{" "}
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            //tarefa={item.tarefa} //import internal individually
            //tempo={item.tempo} /import internal individually
            key={index}
            {...item} //importa todos os itens do arquivo de props item
          />
        ))}
      </ul>
    </aside>
  );
}
*/

export default Lista;

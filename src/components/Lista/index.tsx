import React from "react";
import style from "./Lista.module.scss";
import Item from "./Item";

function Lista() {
  const tarefas = [
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
    {
      id: "id",
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            //tarefa={item.tarefa} //importa intem individuamente
            //tempo={item.tempo} //importa intem individuamente
            key={index}
            {...item} //importa todos os itens do arquivo de props item
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

import React from "react";

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
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3> {item.tarefa} </h3>
            <span> {item.tempo} </span>
          </li>
        ))}

        <li>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <h3>React</h3>
          <span>02:00:00</span>
        </li>
        <li>
          <h3>Javascript</h3>
          <span>01:00:00</span>
        </li>
      </ul>
    </aside>
  );
}

export default Lista;

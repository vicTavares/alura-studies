export interface ITarefa {
  tarefa: string;
  duracaoEmSegundos: number;
  id: string;
  status: "todo" | "doing" | "done" | "selected";
  // TODO: trocar estes atributos para status: 'doing' | 'done' | 'todo'
}

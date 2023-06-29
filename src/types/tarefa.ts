export interface ITarefa {
  tarefa: string;
  tempo: string;
  id: string;
  // TODO: trocar estes atributos para status: 'doing' | 'done' | 'todo'
  selecionado: boolean;
  completado: boolean;
}

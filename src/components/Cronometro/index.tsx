import { Botao } from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  tarefaAlvo: ITarefa | undefined;
  finalizarTarefa: () => void;
  iniciarTarefa: () => void;
}

export function Cronometro({
  tarefaAlvo,
  finalizarTarefa,
  iniciarTarefa,
}: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (tarefaAlvo?.tempo) {
      setTempo(tempoParaSegundos(tarefaAlvo.tempo));
    }
  }, [tarefaAlvo]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        disabled={tarefaAlvo?.status === "doing"}
        onClick={() => {
          iniciarTarefa();
          regressiva(tempo);
        }}
      >
        Iniciar
      </Botao>
    </div>
  );
}

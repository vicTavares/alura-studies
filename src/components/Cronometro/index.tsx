import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
}
export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }

  console.log("conversao:", tempoParaSegundos("01:01:01"));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Start!</Botao>
    </div>
  );
}

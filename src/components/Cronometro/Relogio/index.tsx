import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0"); // alterar o arquivo de configuracao tsconfig.json com "downlevelIteration": true,
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0"); //.padStart e a quantidade de caracteres minimo iniciais e qual o caractere que deve ser preenchido(2,'0')
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}

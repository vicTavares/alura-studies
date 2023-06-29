import React from "react";
import style from "./Botao.module.scss";
import { Children } from "react";

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

//class Botao extends React.Component<{ texto: string }> {

//interface BotaoProps {
//children: React.ReactNode;
//}

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

//class Botao extends React.Component<BotaoProps> {
class Botao1 extends React.Component<{
  // type?: "button" | "submit" | "reset" | undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}> {
  // Necessrio adicionar no React.Component a propriedade type?: string para suportar opcionalmente a tipagem onde esse componente for utilizado
  render() {
    const { type = "button", onClick } = this.props; // a propriedade padrao do botao e button podendo ser alterada opcionalmente pelo React.Component<{ type?: string }
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button> //  {this.props.type} {this.props.children}
    );
  }
}

/* class Botao extends React.Component {
  render() {
    return (
      <button clasName={style.botao}>
        {this.props.children}
      </button>
    )
  }
}*/

// TODO: trocar export deafult por export nomeado neste e nos demais componentes

export default Botao;

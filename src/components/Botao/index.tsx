import React from "react";
import style from "./Botao.module.scss";

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

//class Botao extends React.Component<{ texto: string }> {

//interface BotaoProps {
//children: React.ReactNode;
//}

//class Botao extends React.Component<BotaoProps> {
class Botao extends React.Component<{
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}> {
  // Necessrio adicionar no React.Component a propriedade type?: string para suportar opcionalmente a tipagem onde esse componente for utilizado
  render() {
    const { type = "button" } = this.props; // a propriedade padrao do botao e button podendo ser alterada opcionalmente pelo React.Component<{ type?: string }
    return (
      <button type={type} className={style.botao}>
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

export default Botao;

import React from "react";
import style from "./Botao.module.scss";

//import React, { Component } from "react";
//import ReactDOM from "react-dom";

//class Botao extends React.Component<{ texto: string }> {

interface BotaoProps {
  children: React.ReactNode;
}

class Botao extends React.Component<BotaoProps> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
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

import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Botao({ onClick, type, children, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

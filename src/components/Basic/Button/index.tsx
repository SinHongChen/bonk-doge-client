import React from "react";
import { SubmitBtn } from "./Style";

export interface ButtonProps {
  type: "delete" | "submit" | "update" | "link";
  children?: React.ReactNode;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  style?:React.CSSProperties;
  className?:string;
}

const typeColorList = {
    delete:"red",
    submit:"var(--text-color-2)",
    update:"var(--text-color-2)",
    link:"var(--text-color-2)"
}

const Button = ({ type,children,onClick,style,className }: ButtonProps) => {
  return (
    <SubmitBtn style={style} className={className} onClick={onClick} borderColor={typeColorList[type]}>{children}</SubmitBtn>
  );
};

export default Button;

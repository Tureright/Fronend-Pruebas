import React from "react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="card" style={{ border: "2px solid", width: "350px" }}>
      <div className="card-title">Título de la Tarjeta</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;

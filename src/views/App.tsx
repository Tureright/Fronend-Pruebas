import React from "react";
import Titulo from "./Titulo";
import Card, { CardBody } from "../components/Card";
import List from "../components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  //const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  //La variable de contenido
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <CardBody title="El titulo del carbody" text="El texto del carbody" />
      {list.length ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
    </Card>
  );
}
export default App;

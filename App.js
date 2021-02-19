import React from 'react';
import Container from "react-bootstrap/Container";
import ListaCarti from "./listacarti.js";
import Adaug from "./adaug.js";

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.`;

const lista = [
  {
    id: 1,
    src: "imagini/harry.png",
    titlu: "Harry Potter Si Piatra Filosofala",
    text: text,
    autpret: "J.K. Rowling, pret: 30.32 Lei"
  },
  {
    id: 2,
    src: "imagini/coraline.jpg",
    titlu: "Coraline",
    text: text,
    autpret: "Neil Gaiman, pret: 27.37 Lei"
  },
  {
    id: 3,
    src: "imagini/cal.png",
    titlu: "Calutul alb",
    text: text,
    autpret: "Elizabeth Goudge, pret: 23.4 Lei"
  },
  {
    id: 4,
    src: "imagini/urs.png",
    titlu: "Un urs pe nume Paddington",
    text: text,
    autpret: "Michael Bond, pret: 29.81 Lei"
  }
];

const App = () => {
  return (
    <Container>
      <h1>Carti pentru copii</h1>
      <ListaCarti listaCarti={lista} /> 
      <Adaug /> 
    </Container>
  );
}

export default App;
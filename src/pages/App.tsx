import React from "react";
import { Circle, Container, Header, Title } from "./styles";
import { FiChevronLeft } from "react-icons/fi";


function App() {
  return (
    <Container>
      <Header>
        <Circle><FiChevronLeft size={24}/></Circle>
        <Title>School</Title>
      </Header>
    </Container>
  );
}

export default App;

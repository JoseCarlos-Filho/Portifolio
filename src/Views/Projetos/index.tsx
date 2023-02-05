import Cabecalho from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const Projetos = () => {
  return (
    <div>
      <Cabecalho />
      <h1>Página Projetos</h1>
      <Container>
        <Row>
          <Col sm={4}>Card 1</Col>
          <Col sm={4}>Card 2</Col>
          <Col sm={4}>Card 3</Col>
        </Row>
        <Row>
          <Col sm>Card 4</Col>
          <Col sm>Card 5</Col>
          <Col sm>Card 6</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projetos;

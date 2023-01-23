import { Nav, Image, Container } from "react-bootstrap";
import Foto from "./assets/minhafoto.jpeg";

const Cabecalho = () => {
  return (
    <header className="header">
      <Container
        fluid
        style={{ backgroundColor: "lightgray" }}
        className="header__container d-flex justify-content-center"
      >
        <Image
          className="header__container__image py-5 w-25 h-25"
          roundedCircle
          src={Foto}
        />
      </Container>
      <Nav
        className="w-100 d-flex flex-column p-3"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li">
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">PROJETO</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">SOBRE</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Cabecalho;

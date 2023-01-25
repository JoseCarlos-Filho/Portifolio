import { Card, Nav, Image, Container } from "react-bootstrap";
import Foto from "./assets/minhafoto.jpeg";
import { FaHome } from "react-icons/Fa";

const Cabecalho = () => {
  return (
    <header className="header">
      <Nav
        className="header__nav w-100 justify-content-end p-3"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" href="/home">
            <FaHome />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-1">
            PROJETOS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-2">
            SOBRE
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container
        fluid
        // style={{ backgroundColor: "lightgray" }}
        className="header__container d-flex justify-content-evenly"
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Frontend Developer</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              José Carlos Rodrigues Filho
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Image
          className="header__container__image py-5 w-25 h-25"
          roundedCircle
          src={Foto}
        />
      </Container>
    </header>
  );
};

export default Cabecalho;

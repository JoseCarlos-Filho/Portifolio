import { Nav } from "react-bootstrap";
import { FaHome } from "react-icons/Fa";
import { AiOutlineFundProjectionScreen } from "react-icons/Ai";
import { FcAbout } from "react-icons/Fc";

const Cabecalho = () => {
  return (
    <header className="header">
      <Nav
        className="header__nav w-100 justify-content-end p-3"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="li" className="p-5">
          <Nav.Link className="header__nav__nav-link" href="/home">
            Home
            <FaHome />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-1">
            Projetos
            <AiOutlineFundProjectionScreen />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-2">
            Sobre
            <FcAbout />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Cabecalho;

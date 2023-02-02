import { Nav } from "react-bootstrap";
import { FaHome } from "react-icons/Fa";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/Ai";
import { FcAbout } from "react-icons/Fc";

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
            <h2 className="ps-2">Home</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-1">
            <AiOutlineFundProjectionScreen />
            <h2 className="ps-2">Projetos</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-2">
            <FcAbout />
            <h2 className="ps-2 header__nav__tittle">Sobre</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="header__nav__nav-link" eventKey="link-3">
            <AiOutlineContacts />
            <h2 className="ps-2 header__nav__tittle">Contato</h2>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Cabecalho;

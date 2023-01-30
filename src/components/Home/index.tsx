import { Image, Container, Badge } from "react-bootstrap";
import Foto from "./assets/minhafoto.jpeg";
import Background from "./assets/background1.jpeg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="backgroundImage mx-auto w-100"
    >
      <Container className="d-flex justify-content-evenly align-items-center">
        <h1 className="fs-1 text-white d-flex flex-column">
          José Carlos Rodrigues Filho
          <Badge bg="secondary">Frontend Developer</Badge>
        </h1>
        <Image roundedCircle className="py-5 w-25 h-25" src={Foto} />
      </Container>
    </div>
  );
};

export default Home;

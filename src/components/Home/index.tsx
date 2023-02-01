import { Image, Container, Badge, Card } from "react-bootstrap";
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
          <Badge bg="secondary" className="boxCard mt-4">
            Frontend Developer
          </Badge>
        </h1>
        <Image roundedCircle className="py-5 w-25 h-25" src={Foto} />
      </Container>
      <div className="d-flex justify-content-center">
        <div className="boxCard w-50 p-3 bg-secondary rounded-3">
          <span className="fs-3 text-white text-center">
            Desenvolvedor frontend com contribuições de projetos permanentes no
            GitHub, construção de single page application, landing pages,
            websites modernos com metodologia ágil.
          </span>
        </div>
      </div>
      {/* <div className="d-flex justify-content-around">
        <div className="w-25">
          <h2 className="fs-3 text-white text-center">
            Desenvolvedor frontend com contribuições de projetos permanentes no
            GitHub, construção de single page application, landing pages,
            websites modernos com metodologia ágil.
          </h2>
        </div>
        <Card className="w-25  bg-secondary">
          <Card.Body className="fs-3 text-white text-center">
            Desenvolvedor frontend com contribuições de projetos permanentes no
            GitHub, construção de single page application, landing pages,
            websites modernos com metodologia ágil.
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
};

export default Home;

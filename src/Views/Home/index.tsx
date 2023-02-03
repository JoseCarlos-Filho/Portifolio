import { Image, Container, Badge, Card } from "react-bootstrap";
import Foto from "./assets/minhafoto.jpeg";
import Background from "./assets/background1.jpeg";
import Footer from "../../components/Footer";
import Cabecalho from "../../components/Header";

const Home = () => {
  return (
    <>
      <Cabecalho />
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
        className="backgroundImage mx-auto w-100"
      >
        <Container className="d-flex justify-content-evenly align-items-center">
          <h1 className="fs-1 text-white d-flex flex-column">
            José Carlos Rodrigues Filho
            <Badge bg="secondary" className="boxCard mt-4">
              <h1 className="">Frontend Developer</h1>
            </Badge>
          </h1>
          <Image
            style={{ boxShadow: "5px 5px 10px #be86d1", borderRadius: "2rem" }}
            className="my-5 w-25 h-25 fade-in-image"
            src={Foto}
          />
        </Container>
        <div className="d-flex justify-content-center">
          <div className="boxCard w-50 mt-4 p-4 bg-secondary rounded-3">
            <p className="fs-3 text-white text-center textInfo">
              Desenvolvedor frontend com contribuições de projetos permanentes
              no GitHub, construção de single page application, landing pages,
              websites modernos com metodologia ágil.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

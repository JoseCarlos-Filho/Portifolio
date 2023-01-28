import { Image, Container } from "react-bootstrap";
import Foto from "./assets/minhafoto.jpeg";

const Home = () => {
  return (
    <div className="imgBackground">
      <Container
        fluid
        // style={{ backgroundColor: "lightgray" }}
        className="d-flex justify-content-center"
      >
        <Image
          className="header__container__image py-5 w-25 h-25"
          roundedCircle
          src={Foto}
        />
      </Container>
    </div>
  );
};

export default Home;

import Cabecalho from "../../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect } from "react";
import ApiGit from "../../services/api";

const Projetos = () => {
  useEffect(() => {
    async function getRepo() {
      const { data } = await ApiGit.octokit.request(
        "GET /repos/josecarlos-filho/Barbearia-Alura",
        {
          owner: "josecarlos-filho",
          repo: "Barbearia-Alura",
        }
      );
      console.log(data);
      return data;
    }
    getRepo();
  });

  return (
    <div>
      <Cabecalho />
      <h1>Página Projetos</h1>
      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Card style={{ width: "18rem" }} className="mb-5">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto 1</Card.Title>
                <Card.Text>
                  Barbearia Alura desenvovido com as techs HTML5 e CSS3
                </Card.Text>
                <Button variant="primary">Deploy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projetos;

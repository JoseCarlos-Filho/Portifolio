import Cabecalho from "../../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ApiGit from "../../services/api";
import { IPropsCardRepo } from "../../components/CardProjects/types";
import CardProjetos from "../../components/CardProjects";

const Projetos = () => {
  const [data, setdata] = useState<IPropsCardRepo[]>([{}] as IPropsCardRepo[]);

  useEffect(() => {
    const gitHub = new ApiGit();
    // gitHub.getRepositorio("josecarlos-filho", "Barbearia-Alura");
    gitHub.listRepos("josecarlos-filho").then((repos) => setdata(repos));
  }, []);

  return (
    <div>
      <Cabecalho />
      <h1>Página Projetos</h1>
      <Container className="mt-5">
        {data
          ? data.map(
              ({ id, name, description }: IPropsCardRepo, index: number) => {
                return (
                  <Row key={index}>
                    <Col sm={4}>
                      <CardProjetos
                        id={id}
                        name={name}
                        description={description}
                      />
                    </Col>
                  </Row>
                );
              }
            )
          : null}
      </Container>
    </div>
  );
};

export default Projetos;

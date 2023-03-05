import Cabecalho from "../../components/Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ApiGit from "../../services/api";
import { IPropsCardRepo } from "../../components/CardProjects/types";
import CardProjetos from "../../components/CardProjects";

const pinned = [
  "Barbearia-Alura",
  "Lista-Tarefa-VueJS2x",
  "Projeto-Buscador-de-CEP",
  "Dashboard",
  "Gallery-Photos",
  "Challenge-Criptografia",
];

const Projetos = () => {
  const [data, setdata] = useState<IPropsCardRepo[]>([{}] as IPropsCardRepo[]);

  // const arrayRepo = [
  //   "Barbearia-Alura",
  //   "Lista-Tarefa-VueJS2x",
  //   "Projeto-Buscador-de-CEP",
  //   "Dashboard",
  //   "Gallery-Photos",
  //   "Challenge-Criptografia",
  // ];

  useEffect(() => {
    const gitHub = new ApiGit();

    const pinnedRepo = pinned.map((pinned) => {
      gitHub.getRepositorio("josecarlos-filho", pinned.name);
    });

    console.log(pinnedRepo);

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
                  <div key={index}>
                    <CardProjetos
                      id={id}
                      name={name}
                      description={description}
                    />
                  </div>
                );
              }
            )
          : null}
      </Container>
    </div>
  );
};

export default Projetos;

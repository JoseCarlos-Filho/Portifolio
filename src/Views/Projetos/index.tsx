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
  const [dataRepo, setDataRepo] = useState<IPropsCardRepo[]>([
    {},
  ] as IPropsCardRepo[]);

  useEffect(() => {
    const gitHub = new ApiGit();

    const set: any = new Set();

    pinned.map((name) => {
      gitHub.getRepositorio("josecarlos-filho", name).then((value: any) => {
        set.add(value);
        setDataRepo([...set]);
      });
    });

    // Metodo get que lista todos os repositórios
    gitHub.listRepos("josecarlos-filho").then((repos) => setdata(repos));
  }, []);

  return (
    <div>
      <Cabecalho />
      <Container className="m-5 row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {dataRepo
          ? dataRepo.map(
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

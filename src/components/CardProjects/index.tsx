import { Card, Button } from "react-bootstrap";
import { IPropsCardRepo } from "./types";

const CardProjetos = ({ id, name, description }: IPropsCardRepo) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-5 col-sm-3" id={String(id)}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Deploy</Button>
      </Card.Body>
    </Card>
  );
};
export default CardProjetos;

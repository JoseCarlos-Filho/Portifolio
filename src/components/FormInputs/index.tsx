import { Form, InputGroup, Button } from "react-bootstrap";
// import InputGroup from "react-bootstrap/InputGroup";

const FormInputs = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <InputGroup className="mx-5 mt-5 w-50">
          <InputGroup.Text id="basic-addon1">Nome: </InputGroup.Text>
          <Form.Control
            id="name"
            placeholder="digite seu nome"
            aria-label="digite seu nome"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="m-5 w-50">
          <InputGroup.Text id="basic-addon2">e-mail: </InputGroup.Text>
          <Form.Control
            placeholder="digite seu e-mail"
            aria-label="digite seu e-mail"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label
          className="mb-1 ms-5 w-50 d-flex justify-content-center"
          htmlFor="labelArea"
        >
          Deixe sua mensagem
        </Form.Label>
        <InputGroup className="mb-5 w-50">
          <InputGroup.Text>
            Info ao
            <br />
            desenvolvedor:{" "}
          </InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button className="w-25 p-3" variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </>
  );
};

export default FormInputs;

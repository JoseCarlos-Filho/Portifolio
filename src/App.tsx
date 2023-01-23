import { Button, CardImg } from "react-bootstrap";
import Cabecalho from "./components/Header";
function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Button variant="primary">Primary</Button>{" "}
      <Button className="btn-outro" variant="primary">
        Teste
      </Button>{" "}
    </div>
  );
}

export default App;

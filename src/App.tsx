import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./Views/Contato";
import Home from "./Views/Home";
import Projetos from "./Views/Projetos";
import Sobre from "./Views/Sobre";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { Senyor } from "./components/Senyor";
import { senyoresAPI } from "./datos/senyores";

function App() {
  const [senyores, setSenyores] = useState([...senyoresAPI]);
  const [marcadorSenyores, setMarcadorSenyores] = useState(0);

  const actualizarMarcador = () => {
    setMarcadorSenyores(senyores.filter((senyor) => senyor.marcado).length);
  };

  const marcarTodos = (e) => {
    e.preventDefault();
    setSenyores(senyores.map((senyor) => ({ ...senyor, marcado: true })));
    actualizarMarcador(); // Funciona al segon click
  };

  return (
    <div className="contenedor-general container-xl">
      <Header marcadorSenyores={marcadorSenyores} marcarTodos={marcarTodos} />
      <main onLoad={actualizarMarcador} className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Senyor key={senyor.id} senyor={senyor} />
        ))}
      </main>
    </div>
  );
}

export default App;

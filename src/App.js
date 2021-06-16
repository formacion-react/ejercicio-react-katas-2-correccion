import { useState } from "react";
import { Boton } from "./componentes/Boton";
import { Numero } from "./componentes/Numero";

function App() {
  const [numero, setNumero] = useState(0);
  const incrementaNumero = () => {
    if (numero === 10) {
      return;
    }
    setNumero(numero + 1);
  };
  const decrementaNumero = () => {
    if (numero === 0) {
      return;
    }
    setNumero(numero - 1);
  };
  return (
    <div className="contenedor">
      <Boton accion={decrementaNumero}>-</Boton>
      <Numero numero={numero} />
      <Boton accion={incrementaNumero}>+</Boton>
    </div>
  );
}

export default App;

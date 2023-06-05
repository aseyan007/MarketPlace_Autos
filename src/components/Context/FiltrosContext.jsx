import { createContext } from "react";
import { useContext } from "react";
import { AutosContext } from "./AutosContext"; 

export const FiltrosContext = createContext();

function FiltrosProvider({ children }) {
  const { autos, setAutosFiltrados, search } = useContext(AutosContext);

  const filtrarAutos = () => {
    let autosFiltrados = autos.filter((auto) => {
      return (
        auto.modelo.toLowerCase().includes(search.toLowerCase()) ||
        auto.marca.toLowerCase().includes(search.toLowerCase())
      );
    });

    setAutosFiltrados(autosFiltrados);
  };

  const estadoGlobalFiltros = {
    filtrarAutos,
  };
  return (
    <FiltrosContext.Provider value={estadoGlobalFiltros}>
      {children}
    </FiltrosContext.Provider>
  );
}

export default FiltrosProvider;

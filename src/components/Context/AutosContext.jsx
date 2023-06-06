import { useState, useEffect, createContext } from "react";

export const AutosContext = createContext();

function AutosProvider({ children }) {
  const currentAutosInLocalStorage = JSON.parse(localStorage.getItem("autos"))
  const [autos, setAutos] = useState( currentAutosInLocalStorage.length ? currentAutosInLocalStorage:  []);
  const [autosFavoritos, setAutosFavoritos] = useState([]);
  const [search, setSearch] = useState("");
  const [autosFiltrados, setAutosFiltrados] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [publicaciones, setPublicaciones] = useState([]);

  

  const getAutos = async () => {
    try {
      const response = await fetch("/autos.json");
      if (!response.ok) {
        alert("Error al obtener los datos de autos");
      }
      const data = await response.json();
      setAutos(data);
      setAutosFiltrados(data);
      setAutosFavoritos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (autos.length === 0) {
      getAutos();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("autos", JSON.stringify(autos));
  }, [autos]);

  const crearNuevoAuto = (auto) => {
    setAutos([auto, ...autos]);
    
  };

  const eliminarAuto = (id) => {
    const autoEliminado = autos.filter((auto) => auto.id !== id);
    setAutos(autoEliminado);
  };

  const agregarAutoAlCarrito = (auto) => {
    const findID = carrito.find((item) => auto.id === item.id);

    if (findID) {
      const autosEnCarrito = carrito.map((item) =>
        item.id === findID.id
          ? { ...auto, cantidad: findID.cantidad + 1 }
          : item
      );

      return setCarrito(autosEnCarrito);
    }

    setCarrito([...carrito, { ...auto, cantidad: 1 }]);
  };

  const enviarNuevoAutoAPublicaciones = (auto) => {
    const findID = publicaciones.find((item) => auto.id === item.id);

    if (findID) {
      const autoNuevoEnPublicaciones = publicaciones.map((item) =>
        item.id === findID.id
          ? { ...auto, cantidad: findID.cantidad + 1 }
          : item
      );

      return setPublicaciones(autoNuevoEnPublicaciones);
    }

    setPublicaciones([...publicaciones, { ...auto, cantidad: 1 }]);
  };

  const estadoGlobalAutos = {
    autos,
    setAutos,
    search,
    setSearch,
    autosFiltrados,
    setAutosFiltrados,
    agregarAutoAlCarrito,
    carrito,
    setCarrito,
    autosFavoritos,
    setAutosFavoritos,
    crearNuevoAuto,
    eliminarAuto,
    publicaciones,
    setPublicaciones,
    enviarNuevoAutoAPublicaciones,
  };

  return (
    <AutosContext.Provider value={estadoGlobalAutos}>
      {children}
    </AutosContext.Provider>
  );
}

export default AutosProvider;

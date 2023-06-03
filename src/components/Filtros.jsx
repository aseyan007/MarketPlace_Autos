import React from "react";
import { Form } from "react-bootstrap";

function Filtros({ search, setSearch, precioFiltrado, setPrecioFiltrado }) {
  return (
    <Form>
      <Form.Group className="inputBusquedaHome mt-5 mb-5">
        <Form.Group
          type="text"
          placeholder="🍳 Busca tu modelo"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      <div className="contenedorFiltros">
        <Form.Select
        className="inputBusquedaFiltros"
          as="select"
          value={precioFiltrado}
          onChange={(e) => setPrecioFiltrado(e.target.value)}
        >
          <option value="ordenarPorPrecio">Buscar por precio</option>
          <option value="ascendente">Menor a Mayor</option>
          <option value="descendente">Mayor a Menor</option>
        </Form.Select>
        <Form.Select
        className="inputBusquedaFiltros"
          as="select"
          value={añoFiltrado}
          onChange={(e) => setPrecioFiltrado(e.target.value)}
        >
          <option value="ordenarPorPrecio">Buscar por marca</option>
          <option value="ascendente">Menor a Mayor</option>
          <option value="descendente">Mayor a Menor</option>
        </Form.Select>
        <Form.Select
        className="inputBusquedaFiltros"
          as="select"
          value={marcaFiltrada}
          onChange={(e) => setPrecioFiltrado(e.target.value)}
        >
          <option value="ordenarPorPrecio">Buscar por año</option>
          <option value="ascendente">Menor a Mayor</option>
          <option value="descendente">Mayor a Menor</option>
        </Form.Select>
      </div>
    </Form>
  );
}

export default Filtros;

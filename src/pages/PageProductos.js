import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table";

export default function PageProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const resp = await axios.get("http://localhost:8080/producto/findAll");
    setProductos(resp.data);
  };

  return (
    <div>
      <h1>CELUMANIA</h1>

      <Link className="btnAddProd" to={"/createProd"}>
        <img src="https://img.icons8.com/ios-glyphs/40/null/add--v1.png" />
      </Link>

      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Nombre</h1>
            </th>
            <th>
              <h1>Descripcion</h1>
            </th>
            <th>
              <h1>Precio</h1>
            </th>
            <th>
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Table
              idProd={producto.idProd}
              nameProd={producto.nameProd}
              descriptionProd={producto.descriptionProd}
              precioProd={producto.precioProd}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

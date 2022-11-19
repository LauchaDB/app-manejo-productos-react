import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function PageEditProd() {
  const param = useParams();
  console.log(param);
  const [nameProd, setNameProd] = useState(param.nameProd);
  const [descriptionProd, setDescriptionProd] = useState(param.descriptionProd);
  const [precioProd, setPrecioProd] = useState(param.precioProd);

  const editProducto = () => {
    axios.post("http://localhost:8080/producto/create", {
      idProd: param.idProd,
      nameProd: nameProd,
      descriptionProd: descriptionProd,
      precioProd: precioProd,
    });
  };
  return (
    <div>
      <h1>Editar producto</h1>

      <div class="login-box">
        <form>
          <div class="user-box">
            <input
              type="text"
              id="nomIng"
              required=""
              value={nameProd}
              onChange={(event) => setNameProd(event.target.value)}
            />
            <label>Nombre</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              id="descIng"
              required=""
              value={descriptionProd}
              onChange={(ev) => setDescriptionProd(ev.target.value)}
            />
            <label>Descripcion</label>
          </div>
          <div class="user-box">
            <input
              type="number"
              id="precIng"
              required=""
              value={precioProd}
              onChange={(ev) => setPrecioProd(ev.target.value)}
            />
            <label>Precio</label>
          </div>
          <Link to={"/"} onClick={editProducto}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            EDITAR
          </Link>
        </form>
      </div>
    </div>
  );
}

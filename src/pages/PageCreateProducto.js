import axios from "axios";

export default function PageCreateProd() {
  const createProducto = () => {
    axios.post("http://localhost:8080/producto/create", {
      nameProd: document.getElementById("nomIng").value,
      descriptionProd: document.getElementById("descIng").value,
      precioProd: document.getElementById("precIng").value,
    });
  };

  return (
    <div>
      <h1>Crear nuevo producto</h1>

      <div class="login-box">
        <form>
          <div class="user-box">
            <input type="text" id="nomIng" required="" />
            <label>Nombre</label>
          </div>
          <div class="user-box">
            <input type="text" id="descIng" required="" />
            <label>Descripcion</label>
          </div>
          <div class="user-box">
            <input type="number" id="precIng" required="" />
            <label>Precio</label>
          </div>
          <a href="/" onClick={createProducto}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CREAR
          </a>
        </form>
      </div>
    </div>
  );
}

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Table(params) {
  const prod = {
    idProd: params.idProd,
    nameProd: params.nameProd,
    descriptionProd: params.descriptionProd,
    precioProd: params.precioProd,
  };

  const deleteProd = () => {
    axios.delete("http://localhost:8080/producto/delete/" + params.idProd);
  };
  return (
    <tr>
      <td>{prod.nameProd}</td>
      <td>{prod.descriptionProd}</td>
      <td>{prod.precioProd}</td>
      <td>
        <div className="btnsActions">
          <div>
            <button className="btnDelete" id="btnDelete" onClick={deleteProd}>
              <img src="https://img.icons8.com/small/20/null/delete-forever.png" />
            </button>
          </div>

          <div>
            <Link
              to={
                "/editProd/" +
                prod.idProd +
                "/" +
                prod.nameProd +
                "/" +
                prod.descriptionProd +
                "/" +
                prod.precioProd
              }
              className="btnEdit"
              id="btnEdit"
            >
              <img src="https://img.icons8.com/small/20/null/pencil.png" />
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
}

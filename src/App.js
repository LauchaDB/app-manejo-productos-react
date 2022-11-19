import "./App.css";
import PageProductos from "./pages/PageProductos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageEditProd from "./pages/PageEditProducto";
import PageCreateProd from "./pages/PageCreateProducto";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageProductos />} />
        <Route
          path="/editProd/:idProd/:nameProd/:descriptionProd/:precioProd"
          element={<PageEditProd />}
        />
        <Route path="/createProd" element={<PageCreateProd />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

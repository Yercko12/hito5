import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404 - Página no encontrada :C </h1>
    <p>La página que buscas no existe, intenta buscar de nuevo uwu </p>
    <Link to="/">Volver al inicio</Link>
  </div>
);

export default NotFound;

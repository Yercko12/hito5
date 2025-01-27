import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

const Home = ({ onSelectPizza }) => {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((err) => setError("Error al obtener las pizzas"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="pizza-container" style={{ display: "flex", gap: "5px" }}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <div className="card-body">
              <img src={pizza.img} alt={pizza.name} style={{ width: "200px", height: "150px" }} />
              <h3 className="card-title">Pizza {pizza.name}</h3>
              <p className="card-text">Descripción: {pizza.desc}</p>
              <p><strong>🍕Ingredientes:</strong></p>
              <ul className="puntos">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="card-text"><strong>Precio:</strong> ${pizza.price}</p>
              <button onClick={() => navigate(`/pizza/${pizza.id}`)} className="btn btn-primary">👀 Ver más</button>
              <button className="btn btn-secondary ms-2">Añadir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Pizza = () => {
    const { pizzaId } = useParams(); 
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
            .then((response) => response.json())
            .then((data) => setPizza(data))
            .catch(() => setError("Error al obtener los detalles de la pizza"));
    }, [pizzaId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!pizza) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="pizza-detail">
            <Header />
            <img src={pizza.img} alt={pizza.name} />
            <h1>Pizza {pizza.name}</h1>
            <p><strong>Descripción:</strong> {pizza.desc}</p>
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <p><strong>Precio:</strong> ${pizza.price}</p>
            <button className="btn btn-secondary ms-2">Volver al inicio</button>
            <button className="btn btn-secondary">Añadir al carrito</button>
        </div>
    );
};

export default Pizza;

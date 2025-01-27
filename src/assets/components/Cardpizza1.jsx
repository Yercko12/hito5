import React from "react";

const CardPizza1 = ({ pizza }) => {
  return (
    <div className="card-pizza">
      <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ width: "200px", height: "150px" }}/>
      <div className="card-body">
      <h3 className="card-title"> Pizza {pizza.name} </h3>
       <ul className="puntos">
        <p>🍕ingredientes:</p>
        {pizza.ingredients.map((ingredient, index) => (
          <li  key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="card-text">Precio: ${pizza.price}</p>
      <button className="btn btn-primary">👀Ver más</button>
      <button className="btn btn-secondary ms-2">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza1;
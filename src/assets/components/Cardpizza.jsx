import React from 'react'

const Cardpizza = (props) => {
  return (
    <div className='col-md-4 mb-4'>
          <div className="card">
        <img src= {props.imagen} className='card-img-top'/>
        <div className="card-body">
        <h3 className="card-title">{props.titulo} </h3>
        <p className="card-text">🍕ingredientes: {props.ingredientes} </p>
        <p className="card-text">Precio: ${props.precio} </p>
        <button className="btn btn-primary">👀Ver más</button>
        <button className="btn btn-secondary ms-2">Añadir</button>
        </div>
    </div>
    </div>
   
  );
};

export default Cardpizza;
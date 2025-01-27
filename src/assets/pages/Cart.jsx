import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]); 
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas") 
      .then((response) => response.json())
      .then((data) => {
        
        const pizzasWithCount = data.map((pizza) => ({ ...pizza, count: 1 }));
        setCart(pizzasWithCount);
      })
      .catch(() => setError("Error al cargar las pizzas del carrito."));
  }, []);

  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count + (increment ? 1 : -1)) }
          : item
      )
    );
  };

  
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  if (error) {
    return <p>{error}</p>;
  }

  if (!cart.length) {
    return <p>Cargando pizzas del carrito...</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "150px", height: "100px" }}
          />
          <h4>{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => updateQuantity(item.id, true)}>+</button>
          <button onClick={() => updateQuantity(item.id, false)}>-</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;

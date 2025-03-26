import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./plants.jsx"
import Cart from "./cart.jsx"

//import PlantItem from "./plant";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function addToCart(plant) {

    const itemInCart = cart.find((item) => item.id === plant.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };


  return (

    <>
      <header>
        <p>Plant Store</p>
      </header>
      <main>
        <PlantList
          plants={plants}
          addToCart={addToCart}
        />

        <Cart
          items={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />
      </main>
    </>
  );
}

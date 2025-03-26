import "./index.css";
import CartItem from "./cartItem.jsx";

export default function Cart({
    items,
    addToCart,
    removeFromCart
}) {
    return (
        <section className="cart">
            <h1>Cart</h1>
            <ul>
                {items.map((item) =>
                    <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                )}
            </ul>
        </section>
    );
}
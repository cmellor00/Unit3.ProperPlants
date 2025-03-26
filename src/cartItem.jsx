import "./index.css";

export default function CartItem({
    addToCart,
    item,
    removeFromCart,
}) {

    return (
        <li className="cart-item">
            <h2>{item.name}</h2>
            <p className="cart-item-emoji">{item.image}</p>

            <div className="quantity-controls">
                <button onClick={() => removeFromCart(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
            </div>
        </li>
    );
}
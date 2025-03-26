import "./index.css";


export default function PlantItem({
    addToCart,
    plant
}) {
    console.log("PlantItem props:", { plant, addToCart });
    return (
        <li>
            <h2>{plant.id}. {plant.name}</h2>
            <p className="plant-emoji">{plant.image}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </li>
    );
}
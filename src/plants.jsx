import "./index.css";
import PlantItem from "./plant.jsx";

export default function PlantList({
    addToCart,
    plants,
}) {
    return (
        <section className="plants">
            <ul>
                {plants.map((plant) => (
                    <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </ul>
        </section>
    );
}
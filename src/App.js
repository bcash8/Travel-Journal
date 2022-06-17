import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data.js";

let data = Data;

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.key}
                item={item}
            />
        )
    });

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
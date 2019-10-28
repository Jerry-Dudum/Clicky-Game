import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="character-card" onClick={() => props.click(props.id)}>
            <img className="character-image" alt={props.name} src={props.image} />
        </div>
    );
}

export default Card;
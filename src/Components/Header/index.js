import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="text-center">Clicky Game</div>
            <div className="text-center">{props.info}</div>
            <div className="text-center">Score: {props.score} Highscore: {props.highScore}</div>
        </nav>
    );
}

export default Navbar;
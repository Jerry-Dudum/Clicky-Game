import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar">
            <div className="spacing text-center">Clicky Game</div>
            <div className="spacing text-center">{props.info}</div>
            <div className="spacing text-center">Score: {props.score} Highscore: {props.highScore}</div>
        </nav>
    );
}

export default Header;
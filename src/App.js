import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import characters from "./cardinfo.json";
import Description from './components/Description';

class App extends React.Component {

    state = {
        score: 0,
        highScore: 0,
        info: "Click an Image to Start the Game",
        characters
    };

    restart = () => {
        this.state.characters.forEach((character) => (
            character.clicked = false
        ));
        this.setState({
            score: 0,
            info: "Incorrect!"
        });
    };

    win = () => {
        this.state.characters.forEach((character) => (
            character.clicked = false
        ));
        this.setState({
            score: 0,
            info: "YOU WIN!"
        });
    }

    handleClick = id => {
        const chosen = this.state.characters.find((character) => character.id === id)
        if (chosen.clicked === false) {
            chosen.clicked = true;
            this.state.characters.sort(() => Math.random() - 0.5);
            if (this.state.score + 1 > this.state.highScore) {
                this.setState({
                    highScore: this.state.highScore + 1
                });
            }
            if (this.state.score + 1 === 10) {
                this.win();
            }
            else {
                this.setState({
                    score: this.state.score + 1,
                    info: "Correct!"
                });
            }
        }
        else {
            this.state.characters.sort(() => Math.random() - 0.5);
            this.restart();
        }
    }
    render() {
        return (
            <div>
                <Header info={this.state.info} score={this.state.score} highScore={this.state.highScore} />
                <Description />
                <Wrapper>
                    {this.state.characters.map((character) => (
                        <Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            click={this.handleClick}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;
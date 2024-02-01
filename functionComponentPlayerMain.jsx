import React, { Component } from "react";

import Player from "./functionComponentPlayer";
class MainComponent extends Component {
    state = {
        players: [
            { name: "Jack", score: 21 },
            { name: "Steve", score: 30 },
            { name: "Martha", score: 44 },
            { name: "Bob", score: 15 },
        ]
    }
    handleIncrementScore = (name) => {
        let { players } = this.state;
        let fnd = players.find((ele) => ele.name === name);
        fnd.score++;
        this.setState({ players: players })
    }
    render() {
        let { players } = this.state;
        return (
            <div className="container">
                <Player players={players} clickScore={this.handleIncrementScore} />
            </div>
        )
    }
}
export default MainComponent;
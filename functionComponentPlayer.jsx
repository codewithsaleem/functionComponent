import React, { useState } from "react";

function Player(props) {
    const [players, setPlayers] = useState(props.players);

    const clickScore = (name) => {
        setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
                player.name === name ? { ...player, score: player.score + 1 } : player
            )
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {players.map((ele, index) => (
                        <h3 key={index}>
                            {ele.name} Score = {ele.score}
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => clickScore(ele.name)}
                            >
                                1Point
                            </button>
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Player;

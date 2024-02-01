import React, { Component } from "react";

import Lecture from "./functionComponentLectures";
class MainComponent extends Component {
    state = {
        lectures: [
            { name: "Lecture 1 : Introduction to React", likes: 0 },
            { name: "Lecture 2 : State and Props", likes: 0 },
            { name: "Lecture 3 : Component Lifecycle", likes: 0 },
            { name: "Lecture 4 : Functional Components", likes: 0 },
        ]
    }
    handleLike = (name) => {
        let { lectures } = this.state;
        let fnd = lectures.find((ele) => ele.name === name);
        fnd.likes++;
        this.setState({ lectures: lectures })
    }
    render() {
        let { lectures } = this.state;
        return (
            <div className="container">
                <Lecture lectures={lectures} clickLike={this.handleLike} />
            </div>
        )
    }
}
export default MainComponent;
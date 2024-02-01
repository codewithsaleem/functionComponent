import React, { Component } from "react";

import Hello from "./functionComponentHello";
import Bye from "./functionComponentBye";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Hello name="Saleem" course="React"/>
                <Bye topic="Function Components"/>
            </div>
        )
    }
}
export default MainComponent;
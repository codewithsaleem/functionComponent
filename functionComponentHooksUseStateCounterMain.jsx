import React, { Component } from "react";

import CounterHooks from "./functionComponentHooksUseStateCounter";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                 <CounterHooks />
            </div>
        )
    }
}
export default MainComponent;
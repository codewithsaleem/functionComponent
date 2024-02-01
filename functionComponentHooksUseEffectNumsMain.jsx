// import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import ShowNumsHooks from "./functionComponentHooksUseEffectNums";
// class MainComponent extends Component {
//     render() {
//         const numbers = [2,3,5,7,11,13,15,17];
//         return (
//             <div className="container">
//                 <h2>Number and Squares</h2>
//                 {numbers.map((ele) => (
//                     <Link to={`/showNums/${ele}`} key={ele}>Num = {ele}&nbsp;</Link>
//                 ))}

//                 <Switch>
//                     <Route path="/showNums/:num" component={ShowNumsHooks}/>
//                 </Switch>
//             </div>
//         )
//     }
// }
// export default MainComponent;


import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import DisplayHooks from "./functionComponentHooksUseEffectNums";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <h2>Info System</h2>
                <Link to={`/display/1`}>Info-1</Link>

                <Switch>
                    <Route path="/display/:id" component={DisplayHooks} />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;
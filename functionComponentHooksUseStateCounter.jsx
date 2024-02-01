// import React, { useState } from "react";

// function CounterHooks() {
//     const [count, setCount] = useState(0);

//     function addToCounter(num) {
//         setCount(count + num);
//     }
//     return (
//         <div className="container">
//             <h2>Counter Hooks Funtion Demo</h2>
//             <h4>You clicked {count}  times!</h4>
//             <button className="btn btn-danger m-2" onClick={() => addToCounter(-1)}>Decrement</button>
//             <button className="btn btn-primary m-2" onClick={() => addToCounter(1)}>Increment</button>
//         </div>
//     )
// }
// export default CounterHooks;



import React, { useState } from "react";

function CounterHooks() {
    const [countA, setCountAFn] = useState(0);
    const [countB, setCountBFn] = useState(0);

    function incrementAB(name) {
        name === "A" ? setCountAFn(countA + 1) : setCountBFn(countB + 1)
    }
    return (
        <div className="container">
            <h2>Counter Hooks Funtion Demo</h2>
            <h4>You clicked A : {countA} and B : {countB} times!</h4>
            <button className="btn btn-primary m-2" onClick={() => incrementAB("A")}>Click A</button>
            <button className="btn btn-primary m-2" onClick={() => incrementAB("B")}>Click B</button>
        </div>
    )
}
export default CounterHooks;
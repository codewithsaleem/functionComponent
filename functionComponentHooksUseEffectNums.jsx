// import React, { useState, useEffect } from "react";

// function ShowNumsHooks(props) {
//     const [num, setNum] = useState(0);
//     const [square, setSquare] = useState(0);

//     let n1 = props.match.params.num;
//     useEffect(() => {
//         setNum(n1);
//         setSquare(n1 * n1);
//     }, [n1])
//     return (
//         <div className="container">
//             Function Code <br />
//             Number : {num}, Square : {square} <br />
//         </div>
//     )
// }

// export default ShowNumsHooks;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "./httpServiceRouter.js"
function DisplayHooks(props) {
    const [info, setInfo] = useState(0);
    let id = props.match.params.id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await http.get(`/displayinfo/${id}`);
                let { data } = response;
                setInfo(data);
            } catch (error) {
                // Handle error
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [id]);
    
    return (
        <div className="container">
            Hooks Code <br />
            Id : {id} <br />
            Info : {info} <br />
            <Link to={`/display/${+id + 1}`}>Next</Link>
        </div>
    )
}

export default DisplayHooks;
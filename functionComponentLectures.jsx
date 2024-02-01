import React from "react";

function Lecture(props) {
    let lecs = props.lectures;
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {lecs.map((ele, index) => (
                        <h3>
                            {ele.name} Likes = {ele.likes}
                            <button className="btn btn-primary" onClick={() => props.clickLike(ele.name)}>Increment</button>
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Lecture;
// import React from "react";

// function Product(props) {
//     let prod = props.products;
//     return (
//         <div className="container">
//             <div className="row text-center">
//                 {prod.map((ele, index) => (
//                     <React.Fragment>
//                         <div className="col-sm-3 bg-info m-1">
//                             {ele.name} <br />
//                             Code : {ele.code} <br />
//                             Price : {ele.price} <br />
//                             Quantity : {ele.qty} <br />
//                             <button className="m-1 btn-outline-light text-dark" onClick={() => props.clikIncrement(ele.code)}>Increase</button>
//                             <button className="m-1 btn-outline-light text-dark" onClick={() => props.clikDecrement(ele.code)} disabled={ele.qty === 0}>
//                                 Decrease
//                             </button>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default Product;





import React, {useState} from "react";

function Product(props) {
    const [prod, setProd] = useState(props.products);
    const clikIncrement = (code) => {
        setProd((pr) =>
            pr.map((pro) =>
                pro.code === code ? { ...pro, qty: pro.qty + 1 } : pro
            )
        );
    };
    const clikDecrement = (code) => {
        setProd((pr) =>
            pr.map((pro) =>
                pro.code === code ? { ...pro, qty: pro.qty - 1 } : pro
            )
        );
    };
    return (
        <div className="container">
            <div className="row text-center">
                {prod.map((ele, index) => (
                    <React.Fragment>
                        <div className="col-sm-3 bg-info m-1">
                            {ele.name} <br />
                            Code : {ele.code} <br />
                            Price : {ele.price} <br />
                            Quantity : {ele.qty} <br />
                            <button className="m-1 btn-outline-light text-dark" onClick={() => clikIncrement(ele.code)}>Increase</button>
                            <button className="m-1 btn-outline-light text-dark" onClick={() => clikDecrement(ele.code)} disabled={ele.qty === 0}>
                                Decrease
                            </button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
export default Product;
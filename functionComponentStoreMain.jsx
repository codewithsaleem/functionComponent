import React, { Component } from "react";

import Product from "./functionComponentStore";
class MainComponent extends Component {
    state = {
        products: [
            { name: "Coca Cola", code: "C321", price: 20, qty: 10 },
            { name: "5Star", code: "S430", price: 15, qty: 0 },
            { name: "Maggi", code: "M244", price: 26, qty: 22 },
            { name: "Pepsi", code: "P115", price: 20, qty: 0 },
            { name: "Diary Milk", code: "C355", price: 20, qty: 10 },
            { name: "Mirinda", code: "S478", price: 15, qty: 0 },
            { name: "Kitkat", code: "M282", price: 26, qty: 22 },
            { name: "Red Bull", code: "P164", price: 20, qty: 18 },
        ]
    }

    handleIncrement = (code) => {
        let { products } = this.state;
        let fnd = products.find((ele) => ele.code === code);
        fnd.qty++;
        this.setState({ products: products })
    }
    handleDecrement = (code) => {
        let { products } = this.state;
        let fnd = products.find((ele) => ele.code === code);
        fnd.qty--;
        this.setState({ products: products })
    }

    render() {
        let { products } = this.state;
        return (
            <div className="container">
                <Product products={products} clikIncrement={this.handleIncrement} clikDecrement={this.handleDecrement} />
            </div>
        )
    }
}
export default MainComponent;
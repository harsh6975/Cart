import React from "react";
import CartItem from "./CartItem";
import "./index.css";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          price: 99,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 9990,
          title: "Lapi",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncrease = (products) => {
    console.log("increase");
    const { product } = this.state;
    const index = product.indexOf(products);
    product[index].qty += 1;
    this.setState({
      product,
    });
  };
  handleDecrease = (products) => {
    console.log("decrease");
    const { product } = this.state;
    const index = product.indexOf(products);
    if (product[index].qty - 1 === 0) {
      this.handleDelete(product[index].id);
      return;
    }
    product[index].qty -= 1;
    this.setState({
      product,
    });
  };
  handleDelete = (id) => {
    console.log("delete");
    const { product } = this.state;
    const items = product.filter((item) => item.id !== id);
    this.setState({
      product: items,
    });
  };
  render() {
    const { product } = this.state;
    return (
      <div className="cart">
        {product.map((product, index) => {
          return (
            <CartItem
              product={product}
              key={index}
              onIncreaseQty={this.handleIncrease}
              onDecreaseQty={this.handleDecrease}
              onDel={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;

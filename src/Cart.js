import React from "react";
import CartItem from "./CartItem";
import "./index.css";

const Cart =(props)=>{
    const { product } = props;
    return (
      <div className="cart">
        {product.map((product, index) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={props.onIncreaseQty}
              onDecreaseQty={props.onDecreaseQty}
              onDel={props.onDel}
            />
          );
        })}
      </div>
    );
  
}

export default Cart;

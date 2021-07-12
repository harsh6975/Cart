import React from 'react';
import "./index.css";


const CartItem = (props)=> {
  // constructor () {
  //   super();
  //   this.state = {
  //     price: 999,
  //     title: 'Mobile Phone',
  //     qty: 1,
  //     img: ''
  //   }
  //   // this.increaseQuantity = this.increaseQuantity.bind(this);
  // }
  // increaseQuantity = () => {
  //    //this.state.qty=this.state.qty+2
  //    //setState 1
  //    const {x}=this.props.product;
  //    this.setState({
  //      qty: x.qty+1,
      
  //    });
     
     //state 2
  //    this.setState(prev=>{
  //      return{
  //        qty:prev.qty+1,
  //      }
  //     })
  // }
//  decreaseQuantity = () => {
//     const {qty}=this.state;
//    if(this.props.qty===0){
//      return;
//     }
//     this.setState(prev=>{
//       return{
//         qty:prev.qty-1,
//      }
//      })
// }
  
    const { price, title, qty,img } = props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={()=>props.onIncreaseQty(props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={()=>props.onDecreaseQty(props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={()=>props.onDel(props.product.id)}
            />
          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
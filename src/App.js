import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        // {
        //  price: 99,
        //  price: 99,
        //  title: "Mobile Phone",
        //  qty: 1,
        //  img: "",
        //  id: 1,
        // },
        // {
        //  price: 999,
        //  title: "Phone",
        //  qty: 1,
        //  img: "",
        //  id: 2,
        //},
        // {
        //  price: 9990,
        //  title: "Lapi",
        //  qty: 1,
        //     //  img: "",
        //  id: 3,
        //  },
      ],
      preload: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      // .get()
      // .then((snapsots)=>{
      //     console.log('snapsots',snapsots);
      //     snapsots.docs.map((doc)=>{
      //         console.log(doc.data())
      //         return '';
      //     })
      //     const product=snapsots.docs.map((doc)=>{
      //       const data= doc.data();
      //       data['id']=doc.id
      //       return data;
      //     })

      //     this.setState({
      //        product,
      //        preload:false
      //     })

      .onSnapshot((snapsots) => {
        console.log("snapsots", snapsots);
        snapsots.docs.map((doc) => {
          console.log(doc.data());
        });
        const product = snapsots.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          product,
          preload: false,
        });
      });
  }

  addProduct = () => {
    firebase
      .firestore()
      .collection("products")
      .add({
        title: "Washing machine",
        price: 10009,
        qty: 1,
        img: "",
      })
      .then((docRef) => {
        console.log("product added", docRef);
      })
      .catch((error) => {
        console.log("erro", error);
      });
  };

  handleIncrease = (products) => {
    console.log("increase");
    const { product } = this.state;
    const index = product.indexOf(products);
    // product[index].qty += 1;
    // this.setState({
    //   product,
    // });
    const docRef = this.db.collection("products").doc(product[index].id);
    docRef
      .update({
        qty: product[index].qty + 1,
      })
      .then(() => {
        console.log("Update");
      })
      .catch(() => {
        console.log("error");
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
    // product[index].qty -= 1;
    // this.setState({
    //   product,
    // });
    const docRef = this.db.collection("products").doc(product[index].id);
    docRef
      .update({
        qty: product[index].qty - 1,
      })
      .then(() => {
        console.log("Update");
      })
      .catch(() => {
        console.log("error");
      });
  };
  handleDelete = (id) => {
    console.log("delete");
    const { product } = this.state;
    // const items = product.filter((item) => item.id !== id);
    // this.setState({
    //   product: items,
    // });
    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Update");
      })
      .catch(() => {
        console.log("error");
      });
  };

  getCount = () => {
    const { product } = this.state;
    let count = 0;
    product.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  render() {
    const { product } = this.state;
    return (
      <div className="App">
        <Navbar onCount={this.getCount()} />
        <Cart
          product={product}
          onIncreaseQty={this.handleIncrease}
          onDecreaseQty={this.handleDecrease}
          onDel={this.handleDelete}
        />
        <button onClick={this.addProduct}>Add products</button>
        {this.state.preload && <h1>loading</h1>}
      </div>
    );
  }
}

export default App;

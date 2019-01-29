import React, { Component } from 'react';
import {Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Mainpage from "./components/Mainpage"
import Addaccount from "./components/Addaccount"
import Addproducts from "./components/Addproducts"
import Filterproducts from "./components/Filterproducts"
import Orderform from "./components/Orderform"
import Orderconfirmform from "./components/Orderconfirmform"
import Thankyou from "./components/Thankyou"
import { Link } from "react-router-dom"

const usersAPI = "https://uumbrella.herokuapp.com/users/"
const productsAPI = "https://uumbrella.herokuapp.com/products/"

const grabDrop = document.getElementById("#dropDown")

class App extends Component {

  constructor() {
    super () 
    this.state = {
      users: [],
      userActive: 2,
      products: [],
      isSignedUp: false,
      product_owner: 3,
      product_name: "",
      product_sku: "",
      product_size: "",
      dist_price: "",
      retail_price: "",
      description: "",
       is_used: true,
       showItems: false
    }
  }

  async componentDidMount() {
    let responce = await fetch(usersAPI)
    let json = await responce.json()
    console.log("jsonlog", json)
    this.loadProducts()
    this.setState ({
      users: json
    })
  }
  getFormData = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }
  handleSelected = () => {
    this.setState({
        showItems:true
    })
  }
  
  postProduct = () => {
    let post = {
      product_owner: this.state.product_owner, 
      product_name: this.state.product_name, 
      product_sku: this.state.product_sku, 
      product_size: this.state.product_size,
      dist_price: this.state.dist_price,
      retail_price: this.state.retail_price,
      description: this.state.description
    }
    fetch(productsAPI, {
      method: "POST", 
      body: JSON.stringify(post), 
      headers: {
        "Content-Type": "application/json", 
      }
    })
    .then (sendProduct => sendProduct.json())
    .then(this.movieList)
    .then(alert(`You added the product ${this.state.product_name}`))
  }

// populateProducts = () => {
//   var selectProductsDiv = document.getElementsByClassName("orderList")
//   selectProductsDiv.addEventListener
// }
loadProducts = () => {
  fetch(productsAPI)
  .then(res => res.json())
  .then(res => this.setState({products: res}))

}

menus = () => {
  for (let i = 0; i < this.state.users.length; i++) {
      var dropdownMenu = document.createElement("option")
      grabDrop.appendChild(dropdownMenu)
      dropdownMenu.innerHTML = this.state.users[i].company_acct_name
      var item = JSON.stringify({
          name: this.state.users[i].company_acct_name,
      })
      dropdownMenu.setAttribute('value', item)
  }
}
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Link to={"/"}>
        <div className="title">
          <div className="uulogo">
            <img className="umbrella" alt="ultimaUmbrella" src={require('./components/ultimaUmbrella.png')} />
          </div>
          <div className="titleText">
              Ultima Umbrella
          </div>
        </div></Link>   
          <Route path ="/" exact component={Login} />
          <Route path ="/signup" render={() => (<Signup users={this.state.users} />)}/>
          <Route path ="/mainpage" render={() => (<Mainpage users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/addaccount" render={() => (<Addaccount handleInfo={this.handleInfo} users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/addproducts" render={() => (<Addproducts getFormData={this.getFormData} postProduct={this.postProduct} users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/filterproducts" render={() => (<Filterproducts users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/orderform" render={() => (<Orderform handleSelected={this.handleSelected} showItems={this.state.showItems}users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/orderconfirmform" render={() => (<Orderconfirmform users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/thankyou" render={() => (<Thankyou />)}/>
      </div>
    )
  }
}

export default App;

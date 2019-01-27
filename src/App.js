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

const usersAPI = "https://uumbrella.herokuapp.com/users"

const grabDrop = document.getElementById("#dropDown")

class App extends Component {

  constructor() {
    super () 
    this.state = {
      users: [],
      userActive: 2,
      products: [],
      isSignedUp: false,
    }
  }

  async componentDidMount() {
    let responce = await fetch(usersAPI)
    let json = await responce.json()
    console.log("jsonlog", json)
    this.setState ({
      users: json
    })
  }

  // async componentDidMount() {
  //   let responce = await fetch(productsAPI)
  //   let json = await responce.json()
  //   console.log("jsonlog", json)
  //   this.setState ({
  //     products: json
  //   })
  // }

  // async componentDidMount () {
  //   this.loadUsers()
  //   this.loadProducts()
  // }

// loadUsers = () => {
//   fetch(usersAPI)
//   .then(response => response.json())
//   .then(responce => this.setState({users: responce}))
// }
// loadProducts = () => {
//   fetch(productsAPI)
//   .then(res => res.json())
//   .then(res => this.setState({products: res}), console.log(this.state.products))
// }
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
    console.log(this.state.users)
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
          <Route path ="/addaccount" render={() => (<Addaccount users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/addproducts" render={() => (<Addproducts users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/filterproducts" render={() => (<Filterproducts users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/orderform" render={() => (<Orderform users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/orderconfirmform" render={() => (<Orderconfirmform users={this.state.users} products={this.state.products}/>)}/>
          <Route path ="/thankyou" render={() => (<Thankyou />)}/>
      </div>
    )
  }
}

export default App;

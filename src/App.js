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
const productsAPI = "https://uumbrella.herokuapp.com/products"

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
  async componentDidMount () {
    this.loadUsers()
    this.loadProducts()
  }

loadUsers = () => {
  fetch(usersAPI)
  .then(response => response.json())
  .then(responce => this.setState({users: responce}))
}
loadProducts = () => {
  fetch(productsAPI)
  .then(res => res.json())
  .then(res => this.setState({products: res}))
}

  render() {
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
          <Route path ="/signup" render={() => (<Signup />)}/>
          <Route path ="/mainpage" render={() => (<Mainpage />)}/>
          <Route path ="/addaccount" render={() => (<Addaccount />)}/>
          <Route path ="/addproducts" render={() => (<Addproducts />)}/>
          <Route path ="/filterproducts" render={() => (<Filterproducts />)}/>
          <Route path ="/orderform" render={() => (<Orderform />)}/>
          <Route path ="/orderconfirmform" render={() => (<Orderconfirmform />)}/>
          <Route path ="/thankyou" render={() => (<Thankyou />)}/>
      </div>
    );
  }
}

export default App;

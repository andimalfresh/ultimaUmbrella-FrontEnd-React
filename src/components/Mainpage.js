import React from "react"
import { Link } from "react-router-dom"

const Mainpage  = props => {

return (
    <div className="componentContainer">
        <div className="navMenu">
          NavMenu  
        </div>
        <div className="contentDiv">
        <Link to={"/orderform"}><button>Make Order</button></Link>
        <Link to={"/addproducts"}><button>Add Account</button></Link>
        <Link to={"/addproducts"}><button>Add Products</button></Link>
        <Link to={"/signup"}><button>Edit Info</button></Link>
        <Link to={"/filterproducts"}><button>Product List</button></Link>
        </div>
    </div>
    )


}

export default Mainpage
import React from "react"
import { Link } from "react-router-dom"

const Mainpage  = props => {

return (
    <div className="componentContainer">
            Select Option Below
        <div className="contentDiv">
            <div className="buttonRow">
                <Link to={"/addaccount"}><button className="navButton">Add Account</button></Link>
                <Link to={"/filterproducts"}><button className="navButton">Filter Products</button></Link>
                <Link to={"/addproducts"}><button className="navButton">Add Products</button></Link>
                <Link to={"/orderform"}><button className="navButton">Place Order</button></Link>
                <Link to={"/signup"}><button className="navButton">Edit Info</button></Link>
                
            </div>
        </div>
    </div>
    )


}

export default Mainpage
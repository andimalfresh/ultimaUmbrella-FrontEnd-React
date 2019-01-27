import React from "react"
import { Link } from "react-router-dom"

const Mainpage  = props => {

return (
    <div className="componentContainer">
            Select Option Below
        <div className="contentDiv">
            <div className="buttonRow">
                <Link to={"/orderform"}><button>Make Order</button></Link>
                <Link to={"/addaccount"}><button>Add Account</button></Link>
                <Link to={"/addproducts"}><button>Add Products</button></Link>
                <Link to={"/signup"}><button>Edit Info</button></Link>
                <Link to={"/filterproducts"}><button>Filter Products</button></Link>
            </div>
        </div>
    </div>
    )


}

export default Mainpage
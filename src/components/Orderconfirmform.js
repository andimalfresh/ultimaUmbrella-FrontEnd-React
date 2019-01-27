import React from "react"
import { Link } from "react-router-dom"

const Orderconfirm  = props => {

return (
    <div className="componentContainer">
    Order Confirm 
    <form>
        <input name="login" placeholder="Login"/>
        <input name="password" placeholder="Password"/>
        <div className="buttonRow">
                <Link to={"/thankyou"}><button>Place Order</button></Link>
        </div>
    </form>
    </div>
    )


}

export default Orderconfirm
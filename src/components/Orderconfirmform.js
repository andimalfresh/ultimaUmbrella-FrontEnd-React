import React from "react"
import { Link } from "react-router-dom"

const Orderconfirm  = props => {

return (
    <div className="componentContainer">
        Please Confirm your Order
        <div className="contentDiv">
            <div className="buttonRow">
                    <Link to={"/orderform"}><button>Go Back</button></Link>
                    <Link to={"/thankyou"}><button>Place Order</button></Link>
            </div>
        </div>
    </div>
    )


}

export default Orderconfirm
import React from "react"
import { Link } from "react-router-dom"

const Orderform  = props => {

return (
        <div className="componentContainer">
                Order Form
            <div className="contentDiv">
                 <ul className="orderList"> 
                     <li>
                         <div className="orderItem">
                            Order Item
                         </div>
                         <div className="orderInput">
                            Quantity :<input className="itemQuantity" />
                        </div>
                    </li>
                    <li>
                         <div className="orderItem">
                            Order Item
                         </div>
                         <div className="orderInput">
                            Quantity :<input className="itemQuantity" />
                        </div>
                    </li>
                    <li>
                         <div className="orderItem">
                            Order Item
                         </div>
                         <div className="orderInput">
                            Quantity :<input className="itemQuantity" />
                        </div>
                    </li>
                    <li>
                         <div className="orderItem">
                            Order Item
                         </div>
                         <div className="orderInput">
                            Quantity :<input className="itemQuantity" />
                        </div>
                    </li>
                    <li>
                         <div className="orderItem">
                            Order Item
                         </div>
                         <div className="orderInput">
                            Quantity :<input className="itemQuantity" />
                        </div>
                    </li>
                 </ul>
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button>Main Page</button></Link>
                        <Link to={"/orderconfirmform"}><button>Make Order</button></Link>
                </div>
            </div>
        </div>
    )


}

export default Orderform
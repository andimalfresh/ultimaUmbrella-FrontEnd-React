import React, {Fragment} from "react"
import { Link } from "react-router-dom"

const Orderform  = props => {
    let movieList = props.users.map(userList => {
        return (
            <Fragment>
                <ul className="list-group-item d-flex justify-content-between">
                    <li>{userList.id}</li>
                </ul>
            </Fragment>
        )
    })

return (
        <div className="componentContainer">
                Order Form
            <div className="contentDiv">
            <select>
                <option value="volvo"></option>
            </select>{movieList}

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
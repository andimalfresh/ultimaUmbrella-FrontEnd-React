import React from "react"
import { Link } from "react-router-dom"

const Orderform  = props => {

return (
        <div className="componentContainer">
                Order Form
            <div className="contentDiv">
            <select value={props.value} onChange={props.handleChange}>
                    <option className="dropOpening" defaultValue>Select An Distributor.</option>
            {props.users.map((users) => <option>{users.company_acct_name}</option>)}
            </select>
                 <ul className="orderList"> 
                 {/* <select value={props.value} onChange={props.handleChange}>
                    <option className="dropOpening" defaultValue>Select An Distributor.</option>
                    {props.users.map((users) => <option>{users.company_acct_name}</option>)}
                </select> */}
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
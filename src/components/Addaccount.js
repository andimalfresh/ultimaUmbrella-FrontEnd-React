import React from "react"
import { Link } from "react-router-dom"



const Addaccount  = props => {

return (
    <div className="componentContainer">
        Add Account 
        <div className="contentDiv">
        <select value={props.value} onChange={props.handleChange}>
                    <option className="dropOpening" defaultValue>Select An Distributor.</option>
            {props.users.map((users) => <option>{users.company_acct_name}</option>)}
            </select>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu </button></Link>
                                    <button>Add Account</button>
                                    {/* //add account sets isUSED to true */}
                                    <button>Delete Acct</button>
            </div>
        </div>
    </div>
    )


}

export default Addaccount
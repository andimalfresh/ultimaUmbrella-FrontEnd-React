import React from "react"
import { Link } from "react-router-dom"


const Addaccount  = props => {

return (
    <div className="componentContainer">
        Add Account 
        <div className="contentDiv">
        <select value={props.value} onChange={props.handleSelection}>
                    <option className="dropOpening" defaultValue disabled selected>Select An Distributor.</option>
            {props.users.map((users) => <option className="accountOption">{users.company_acct_name}</option>)}
            </select>
            <div className="accountInfoDiv"></div>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu </button></Link>
            <Link to={"/mainpage"}><button>Add Account</button></Link> 
                                    <button>Delete Acct</button>
            </div>
        </div>
    </div>
    )


}

export default Addaccount
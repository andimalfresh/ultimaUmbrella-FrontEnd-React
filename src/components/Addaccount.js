import React from "react"
import { Link } from "react-router-dom"


const Addaccount  = props => {
        // const accountInfo = props.users.filter((acct) => { (acct.id === 3) {
        //         return (
        //             <div>
        //                 <div>{props.users[i].company_acct_name}</div>
        //                 <div>{props.users[i].email_address1}</div>
        //                 <div>{props.users[i].phone_number1}</div>
        //                 <div>{props.users[i].email_address1}</div>
        //             </div>
        //         )
        //     }
        
return (
    <div className="componentContainer">
        Add Account 
        <div className="contentDiv">
        <select value={props.value} onChange={props.handleSelection}>
                    <option className="dropOpening" defaultValue disabled selected>Select An Distributor.</option>
            {props.users.map((users) => <option className="accountOption">{users.company_acct_name}</option>)}
            </select>
            <div className="accountInfoDiv">
                {/* {accountInfo} */}
            </div>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button className="navButton">Main Menu </button></Link>
            <Link to={"/mainpage"}><button className="navButton">Add Account</button></Link> 
                                    <button className="navButton">Delete Acct</button>
            </div>
        </div>
    </div>
    )


}

export default Addaccount
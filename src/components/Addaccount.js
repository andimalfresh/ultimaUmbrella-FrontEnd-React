import React from "react"
import { Link } from "react-router-dom"

const Addaccount  = props => {

return (
    <div className="componentContainer">
        Add Account 
        <div className="navMenu">
          NavMenu  
        </div>
        <div className="contentDiv">
            <select>
                <option value="volvo">Select a Distributor</option>
            </select>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu </button></Link>
                                    <button>Add Account</button>
            </div>
        </div>

    </div>
    )


}

export default Addaccount
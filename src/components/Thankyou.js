import React from "react"
import { Link } from "react-router-dom"

const Thankyou  = props => {

return (
        <div className="componentContainer">
        Thank You for your Order
            <div className="contentDiv">
                <div className="buttonRow">
                <Link to={"/mainpage"}><button>Back to Main Page</button></Link>
                </div>
            </div>
        </div>
    )


}

export default Thankyou
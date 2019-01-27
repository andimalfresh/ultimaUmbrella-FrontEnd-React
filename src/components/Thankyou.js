import React from "react"
import { Link } from "react-router-dom"

const Thankyou  = props => {

return (
        <div className="componentContainer">
        Thank You 
        <form>
            <input name="login" placeholder="Login"/>
            <input name="password" placeholder="Password"/>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Back to Main Page</button></Link>
            
            </div>
        </form>
        </div>
    )


}

export default Thankyou
import React from "react"
import { Link } from "react-router-dom"

const Orderform  = props => {

return (
        <div className="componentContainer">
            Order Form
        <form>
            <input name="login" placeholder="Login"/>
            <input name="password" placeholder="Password"/>
            <div className="buttonRow">
                <Link to={"/mainpage"}><button>Main Page</button></Link>
                <Link to={"/orderconfirmform"}><button>Make Order</button></Link>
            </div>
        </form>
        </div>
    )


}

export default Orderform
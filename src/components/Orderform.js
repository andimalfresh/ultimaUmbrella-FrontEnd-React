import React from "react"
import { Link } from "react-router-dom"

const Orderform  = props => {

return (
        <div className="componentContainer">
                Order Form
            <div className="contentDiv">
                <form>
                    <input name="login" placeholder="Login"/>
                    <input name="password" placeholder="Password"/>
                </form>
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button>Main Page</button></Link>
                        <Link to={"/orderconfirmform"}><button>Make Order</button></Link>
                </div>
            </div>
        </div>
    )


}

export default Orderform
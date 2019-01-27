import React from "react"
import { Link } from "react-router-dom"

const Signup  = props => {

return (
        <div className="componentContainer">
        Signup
        <form>
            <label>name</label>
            <input name="username" placeholder="Username"/>
            <label>password</label>
            <input name="password" placeholder="Password"/>
            <label>company</label>
            <input name="password" placeholder="Company"/>
            <label>distributor</label>
            <input name="dist_boolean" placeholder="Distributor"/>
            <label>email</label>
            <input name="email" placeholder="Email"/>
            <label>phonenumber</label>
            <input name="phone" placeholder="Phonenumber"/>
            <label>mailing address</label>
            <input name="mailing" placeholder="Mailing Address"/>
            <label>delivery address</label>
            <input name="delivery" placeholder="Delivery Address"/>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Update</button></Link>
            <Link to={"/mainpage"}><button>Signup</button></Link>
            </div>
        </form>
        </div>
    )


}

export default Signup
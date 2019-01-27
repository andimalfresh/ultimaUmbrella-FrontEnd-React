import React from "react"
import { Link } from "react-router-dom"

const Login  = props => {

return (
        <div className="componentContainer">
            Welcome To Ultima Umbrella
            <div className="contentDiv">
                <form className="loginForm">
                    <label>Login:</label>
                    <input name="login" placeholder="enter username"/>
                    <label>Password:</label>
                    <input name="password" placeholder="enter password"/>
                </form>
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button>Login</button></Link>
                        <Link to={"/signup"}><button>Signup</button></Link>
                        
                </div>
            </div>
        </div>
    )


}

export default Login
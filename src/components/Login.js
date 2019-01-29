import React from "react"
import { Link } from "react-router-dom"

const Login  = props => {
return (
        <div className="componentContainer">
            Welcome To Ultima Umbrella
            <div className="contentDiv">
                <form className="loginForm">
                    <label>Login:</label>
                    <input name="login" placeholder="enter username" className="textInput" />
                    <label>Password:</label>
                    <input name="password" placeholder="enter password" className="textInput" crypt="bcrypt"  work="cost:11" salt="username"/>
                </form>
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button className="navButton">Login</button></Link>
                        <Link to={"/signup"}><button className="navButton">Signup</button></Link>                        
                </div>
            </div>
        </div>
    )


}

export default Login
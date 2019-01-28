import React from "react"
import { Link } from "react-router-dom"

const Signup  = props => {

return (
        <div className="componentContainer">
        Signup
            <div className="contentDiv">
                <form>
                    <label>name</label>
                    <input name="username" className="textInput" placeholder="Username"/>
                    <label>password</label>
                    <input name="password" className="textInput" placeholder="Password"/>
                    <label>company</label>
                    <input name="password" className="textInput" placeholder="Company"/>

                    <label>Distributor ?</label>
                    <div className="distributor">
                        
                        <label> 
                            <input 
                                type="radio" 
                                name="distributor" 
                                value="true"
                                // checked={distributor === true}
                                // onChange={this._handleRadio} 
                                />
                                Yes
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input 
                                type="radio" 
                                name="distributor" 
                                value="false"
                                // checked={distributor === false}
                                // onChange={this._handleRadio} 
                                />
                                No
                        </label>
                    </div>



                    <label>email</label>
                    <input name="email" className="textInput" placeholder="Email"/>
                    <label>phonenumber</label>
                    <input name="phone" className="textInput" placeholder="Phonenumber"/>
                    <label>mailing address</label>
                    <input name="mailing" className="textInput" placeholder="Mailing Address"/>
                    <label>delivery address</label>
                    <input name="delivery" className="textInput" placeholder="Delivery Address"/>
                </form>
                <div className="buttonRow">
                    <Link to={"/mainpage"}><button>Update</button></Link>
                    <Link to={"/mainpage"}><button>Signup</button></Link>
                </div>
            </div>
        </div>
    )


}

export default Signup
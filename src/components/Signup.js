import React from "react"
import { Link } from "react-router-dom"

const Signup  = props => {

return (
        <div className="componentContainer">
        Signup
            <div className="contentDiv">
                <form>
                    <label>Name</label>
                    <input name="user_name"  onChange={props.getFormData }className="textInput" placeholder="Username"/>
                    <label>Password</label>
                    <input name="password" onChange={props.getFormData} className="textInput" placeholder="Password"/>
                    <label>Company</label>
                    <input name="company_acct_name" onChange={props.getFormData} className="textInput" placeholder="Company"/>

                    <label>Distributor</label>
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



                    <label>Email</label>
                    <input name="email_address1" onChange={props.getFormData} className="textInput" placeholder="Email"/>
                    <label>Phonenumber</label>
                    <input name="phone_number1" onChange={props.getFormData} className="textInput" placeholder="Phonenumber"/>
                    <label>Mailing address</label>
                    <input name="mailing_address" onChange={props.getFormData} className="textInput" placeholder="Mailing Address"/>
                    <label>Delivery address</label>
                    <input name="delivery_address" onChange={props.getFormData} className="textInput" placeholder="Delivery Address"/>
                </form>
                <div className="buttonRow">
                    <Link to={"/mainpage"}><button className="navButton" onClick={props.updateUser}>Update</button></Link>
                    <Link to={"/mainpage"}><button className="navButton" onClick={props.postUser}>Signup</button></Link>
                </div>
            </div>
        </div>
    )


}

export default Signup
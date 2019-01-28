import React from "react"
import { Link } from "react-router-dom"

const Addproducts  = props => {

return (
    <div className="componentContainer">
        Add Products
        <div className="contentDiv">
        <form>
            <label>name</label>
            <input name="product_name" className="textInput" placeholder="enter name here"/>
            <label>password</label>
            <input name="product_sku" className="textInput" placeholder="enter sku here"/>
            <label>company</label>
            <input name="product_size" className="textInput" placeholder="enter size here"/>
            <label>distributor</label>
            <input name="dist_price" className="textInput" placeholder="enter price here"/>
            <label>email</label>
            <input name="retail_price" className="textInput" placeholder="enter retail price here"/>
            <label>phonenumber</label>
            <input name="description" className="textInput" placeholder="enter product description"/>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu</button></Link>
            <Link to={"/addproduct"}><button>Save Product</button></Link>
            </div>
        </form>
        </div>
    </div>
    )


}

export default Addproducts
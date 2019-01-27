import React from "react"
import { Link } from "react-router-dom"

const Addproducts  = props => {

return (
    <div className="componentContainer">
        Add Products
        <div className="contentDiv">
        <form>
            <label>name</label>
            <input name="product_name" placeholder="enter name here"/>
            <label>password</label>
            <input name="product_sku" placeholder="enter sku here"/>
            <label>company</label>
            <input name="product_size" placeholder="enter size here"/>
            <label>distributor</label>
            <input name="dist_price" placeholder="enter price here"/>
            <label>email</label>
            <input name="retail_price" placeholder="enter retail price here"/>
            <label>phonenumber</label>
            <input name="description" placeholder="enter product description"/>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu</button></Link>
            <button>Save Product</button>
            </div>
        </form>
        </div>
    </div>
    )


}

export default Addproducts
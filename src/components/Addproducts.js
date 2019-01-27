import React from "react"
import { Link } from "react-router-dom"

const Addproducts  = props => {

return (
    <div className="componentContainer">
        Add Products
        <div className="navMenu">
          NavMenu  
        </div>
        <div className="contentDiv">
        <form>
            <label>name</label>
            <input name="product_name" placeholder="Product Name"/>
            <label>password</label>
            <input name="product_sku" placeholder="Product Sku"/>
            <label>company</label>
            <input name="product_size" placeholder="Product Size"/>
            <label>distributor</label>
            <input name="dist_price" placeholder="Distributor Price"/>
            <label>email</label>
            <input name="email" placeholder="Retail Price"/>
            <label>phonenumber</label>
            <input name="phone" placeholder="Phonenumber"/>
            <label>mailing address</label>
            <input name="mailing" placeholder="Mailing Address"/>
            <label>delivery address</label>
            <input name="delivery" placeholder="Delivery Address"/>
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
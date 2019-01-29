import React from "react"
import { Link } from "react-router-dom"

const Addproducts  = props => {

return (
    <div className="componentContainer">
        Add Products
        <div className="contentDiv">
        <form>
            <label>Product Name</label>
            <input name="product_name" className="textInput" onChange={props.getFormData} placeholder="enter name here"/>
            <label>Prod. SKU</label>
            <input name="product_sku" className="textInput" onChange={props.getFormData} placeholder="enter sku here"/>
            <label>Product Size</label>
            <input name="product_size" className="textInput" onChange={props.getFormData} placeholder="enter size here"/>
            <label>Wholesale Price</label>
            <input name="dist_price" className="textInput" onChange={props.getFormData} placeholder="enter price here"/>
            <label>Retail Price</label>
            <input name="retail_price" className="textInput" onChange={props.getFormData} placeholder="enter retail price here"/>
            <label>Description</label>
            <input name="description" className="textInput" onChange={props.getFormData} placeholder="enter product description"/>
            <div className="buttonRow">
            <Link to={"/mainpage"}><button>Main Menu</button></Link>
            <input type="submit" className="submitButton" onClick={props.postProduct} value="Save Product" />
            </div>
        </form>
        </div>
    </div>
    )


}

export default Addproducts
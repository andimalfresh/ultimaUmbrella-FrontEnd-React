import React from "react"
import { Link } from "react-router-dom"

const Filterproducts  = props => {

return (
    <div className="componentContainer">
        Add Products
        <div className="navMenu">
          NavMenu  
        </div>
        <div className="contentDiv">
        <select>
            <option value="volvo">Select a Distributor</option>
        </select>
        <span> THIS IS WHERE PRODUCTS ARE MAPPED WITH A TRUE/FALSE SLIDER NEXT TO THEM</span>
        </div>
        <div className="buttonRow">
        <Link to={"/mainpage"}><button>Main Menu</button></Link>
                <button>Save Products</button>
        </div>
    </div>
    )


}

export default Filterproducts
import React from "react"
import { Link } from "react-router-dom"

const Orderconfirm  = props => {

return (
    <div className="componentContainer">
        Please Confirm your Order
        <div className="contentDiv">
            <div className="orderDiv">
                <div className="productRow">
                  <div className="productName">
                        Hibuscus Gin
                  </div>
                  <div className="productPrice">
                        (3x)19.99
                  </div> 
                </div>
                <div className="productRow">
                  <div className="productName">
                        Purple Daze
                  </div>
                  <div className="productPrice">
                        (3x)19.99
                  </div> 
                </div>
                <div className="productRow">
                  <div className="productName">
                        Woodcutters Whiskey
                  </div>
                  <div className="productPrice">
                        (3x)19.99
                  </div> 
                </div>
                <div className="productRow">
                  <div className="productName">
                        Single Malt Whiskey
                  </div>
                  <div className="productPrice">
                        (3x)19.99
                  </div> 
                </div>
                <div className="productRow">
                    <div className="productName">
                            Rye Whiskey 
                    </div>
                    <div className="productPrice">
                            (3x)19.99
                    </div> 
                </div>
                <div className="productRow">
                    <div className="productName">
                            g102 Juice  
                    </div>
                    <div className="productPrice">
                            (3x)19.99
                    </div>
                    </div> 
                    <div className="productTotalRow">
                    <div className="productTotal"> 
                            Total : 
                    </div>
                    <div className="productTotalPrice">
                              $359.82 
                    </div>
                    
                </div>
            </div>
            <div className="buttonRow">
                    <Link to={"/orderform"}><button className="navButton">Go Back</button></Link>
                    <Link to={"/thankyou"}><button className="navButton">Place Order</button></Link>
            </div>
        </div>
    </div>
    )


}

export default Orderconfirm
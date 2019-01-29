import React from "react"
import { Link } from "react-router-dom"

const Filterproducts  = props => {

    const items = props.products.map((prods) => {
        return (
        <div className={`${props.showFilterItems ? '' : 'hidden'}`}>
          <ul className="orderList"> 
              <li className="orderRow">
                  <div className="orderItem">
                    {prods.product_name}
                  </div>
                  <div className="delButtonDiv"><button className="delButton" onClick={props.deleteItem}>Delete </button> 
                  </div>
              </li>
          </ul>
          </div>
          )})

return (
        <div className="componentContainer">
                Filter Products
            <div className="contentDiv">
            <select onChange={props.handleSelectedFilter} value={props.value}>
                    <option className="dropOpening" defaultValue disabled selected>Select An Distributor.</option>
            {props.users.map((users) => <option >{users.company_acct_name}</option>)}
            </select>
        {items}
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button className="navButton">Main Page</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Filterproducts
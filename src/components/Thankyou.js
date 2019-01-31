import React from "react"
import { Link } from "react-router-dom"

class Thankyou extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {

return (
        <div className="componentContainer">
        Thank You for your Order
            <div className="contentDiv">
            <div className="coloredLine">
                Your order from :
            </div>
            <div>
                Idlewild Spirits and Distillery
            </div>
            <div>
                HAS BEEN PLACED
            </div>
            <div className="coloredLine">
                It will be Delivered to:
            </div>
            <div>
                LambChop the Dog
            </div>
            <div>
                91A Sagewood Ct Tanderville,Co 80478
            </div>
            <div>
                (970)679-8548
            </div>
            <div className="bottomMessage">
                You should be recieving a SMS message confiming your order soon.
                Thank you for using Ultima Umbrella.
            </div>


                <div className="buttonRow">
                <Link to={"/mainpage"}><button className="navButton">Back to Main Page</button></Link>
                </div>
            </div>
        </div>
        )
    }

}

export default Thankyou
import React from 'react';

class AddressSection extends React.Component {

  render(){
    return(
      <div>
        <p>Please enter your delivery/billing address details:</p>
        <div className="field">
          <label className="label" htmlFor="deliveryBillingAddress">Number and Street Name</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Enter your Number and Street Name" name="deliveryBillingAddress" onChange={this.props.handlechange}/>
            <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
          </div>
          {this.props.deliveryBillingAddress && <small>{this.props.deliveryBillingAddress}</small>}
        </div>

        <div className="field">
          <label className="label" htmlFor="deliveryBillingPostcode">Postcode</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Enter your Postcode" name="deliveryPostCode" onChange={this.props.handlechange}/>
            <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
          </div>
          {this.props.deliveryPostCode && <small>{this.props.deliveryPostCode}</small>}
        </div>

        <div className="field">
          <label className="label" htmlFor="deliveryBillingCity">City</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Enter your City" name="deliveryBillingCity" onChange={this.props.handlechange}/>
            <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
          </div>
          {this.props.deliveryBillingCity && <small>{this.props.deliveryBillingCity}</small>}
        </div>
      </div>
    );
  }

}
export default AddressSection;

import React from 'react';


const AddressSection = ({ handleChange, data }) => {
  return(
    <div>
      <p>Please enter your delivery/billing address details:</p>

      <div className="field">
        <label className="label" htmlFor="deliveryBillingAddress">Number and Street Name</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Enter your Number and Street Name" name="deliveryBillingAddress" onChange={handleChange}/>
          <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
        </div>
        {data.errors.deliveryBillingAddress &&<small>{data.errors.deliveryBillingAddress}</small>}
      </div>

      <div className="field">
        <label className="label" htmlFor="deliveryBillingPostcode">Postcode</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Enter your Postcode" name="deliveryPostCode" onChange={handleChange} />
          <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
        </div>
        {data.errors.deliveryPostCode && <small>{data.errors.deliveryPostCode}</small>}
      </div>

      <div className="field">
        <label className="label" htmlFor="deliveryBillingCity">City</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Enter your City" name="deliveryBillingCity" onChange={handleChange} />
          <span className="icon is-small is-left"><i className="fas fa-home"></i></span>
        </div>
        {data.errors.deliveryBillingCity && <small>{data.errors.deliveryBillingCity}</small>}
      </div>

    </div>
  );
};

export default AddressSection;

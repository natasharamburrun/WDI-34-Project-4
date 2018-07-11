import React from 'react';
import axios from 'axios';
import {CardElement, injectStripe} from 'react-stripe-elements';

//Create the payment form component
//CardElement inputs for all of the major card fields: the card number, the expiration date, and the CVC


class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  //Create a token to securely transmit card information

  submit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken({ name: 'Name' })
      .then(token => {
        console.log(token);
        axios({
          url: '/api/charge',
          method: 'POST',
          body: token.id,
          data:
          {
            source: token.id,
            amount: this.state
          }
          // headers: { 'Content-Type': 'text/plain' }
        })
          .then(res => console.log(res.data));
      });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        {/* creates a card type element that mounts the page when Component renders */}
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

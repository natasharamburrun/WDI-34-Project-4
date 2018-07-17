import React from 'react';
import axios from 'axios';
import {CardElement, injectStripe} from 'react-stripe-elements';


//Create the payment form component
//CardElement inputs for all of the major card fields: the card number, the expiration date, and the CVC


class CheckoutForm extends React.Component {

  state = { complete: false };

  //Create a token to securely transmit card information

  submit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken({ name: 'Name' })
      .then(token => {
        console.log(token);
        axios({
          url: '/api/charge',
          method: 'POST',
          data: {
            ...token,
            amount: this.props.amount * 100
          }
        })
          .then(() => this.setState({ complete: true }));
      });
  }

  render() {
    if(this.state.complete) return <h2 className="title is-2">Purchase Successful</h2>;

    return (
      <div className="checkout">
        <p>Please enter your card details below to complete your purchase</p><br/>
        <CardElement />
        {/* creates a card type element that mounts the page when Component renders */}
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

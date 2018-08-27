
import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import User from '../../lib/User';
import {CardElement, injectStripe} from 'react-stripe-elements';
import AddressSection from '../orders/AddressSection';

//Create the payment form component
//CardElement inputs for all of the major card fields: the card number, the expiration date, and the CVC

//**test card**//
//card n0: 4242 4242 4242 4242
//exp: 02/20
//cvv: 123
//zip: 12345


class CheckoutForm extends React.Component {

  state = {complete: false};


  //Create a token to securely transmit card information
  componentDidMount= () => {
    //added a get User in case users refreshes the browser and user instance is lost...
    axios({
      method: 'GET',
      url: '/api/user',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => User.setCurrentUser(res.data))
      .catch();
  }


  submit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken({ name: 'Name' })
      .then(token => {
        console.log(token);
        axios({
          url: '/api/charge',
          method: 'POST',
          payee: User.getCurrentUser().username || '',
          UserEmail: User.getCurrentUser().email || '',
          data: {
            ...token,
            amount: this.props.amount * 100
          }
        })
          .then(() => this.setState({ complete: true }));
      });
  }

  render() {
    if(this.state.complete)
      return <h2 className="title is-2">Purchase Successful</h2>;
    <strong>Order Number{this.state.id}</strong>;

    return (
      <div className="checkout">
        <form onSubmit={this.handleSubmit}>
          <div className="columns">
            <div className="column is-half">
              <h3 className="title is-size-3">Proceed to order</h3>
              <AddressSection handlechange={this.handlechange}/><br/>
              <p>Please enter your payment details:</p>
              <CardElement />
              <br/>
              {/* creates a card type element that mounts the page when Component renders */}
              <strong>Order Total £{this.props.amount}</strong><br/>
              <button onClick={this.submit}>SUBMIT MY ORDER</button>
            </div>
          </div>
        </form>
        <br/>
        <img className="paymentMethods" src="http://www.easy-lettingstelford.co.uk/images/stripe_credit-card-logos.png" />
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

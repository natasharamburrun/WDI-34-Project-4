import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../payment/CheckoutForm';
import axios from 'axios';

class Payment extends React.Component {

  constructor() {
    super();
  }
  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }));
  }


  render() {
    return (
      <StripeProvider apiKey="pk_test_PjW7wZQs7SGqM4qnWg47WytW">
        <div className="cardpayment">
          <Elements>
            <CheckoutForm amount={this.state.item.price}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Payment;

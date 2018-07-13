import React from 'react';
import axios from 'axios';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../payment/CheckoutForm';


class PaymentPage extends React.Component {

  constructor() {
    super();
    this.state = {
      item: {}
    };
  }

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className="content-payment">
        <h3 className="title is-3">Payment</h3>
        <StripeProvider apiKey="pk_test_PjW7wZQs7SGqM4qnWg47WytW">
          <div className="cardpayment">
            <Elements>
              <CheckoutForm amount={this.state.item.price}/>
            </Elements>
          </div>
        </StripeProvider>

      </div>
    );
  }
}

export default PaymentPage;

// import ordersummary
//shopping bag
import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
// import User from '../../lib/User';

class OrderShowPage extends React.Component{


  componentDidMount= () => {
    axios({
      method: 'GET',
      url: `/api/orders/${this.props.id}`,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    });
  }

  render() {
    return (
      <section>
        <h1>orderpage</h1>


      </section>
    );
  }
}

export default OrderShowPage;

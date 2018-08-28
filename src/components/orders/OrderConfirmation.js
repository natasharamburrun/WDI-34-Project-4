// OrderSummary page
// import React from 'react';
//
// class OrderConfirmation extends React.Component {
//
//   state = {
//     userName: '',
//     email: '',
//     order: {}
//   }
//
//   componentDidMount(){
//     console.log('this.props.history.location.state.user', this.props.history.location.state.user);
//     const user = this.props.history.location.state.user;
//     const userName = user.username;
//     const email = user.email;
//     const order = user.orders[user.orders.length - 1];
//     this.setState({userName, email, order});
//
//   }
//   render() {
//     return (
//       <section>
//         <div className="columns">
//           <div className="column is-two-thirds">
//             <h3 className="title is-size-3">Thank you {this.state.userName} for your order !</h3><br/>
//             <h5 className="subtitle is-size-5 is-italic">
//               Your order <strong>{this.state.order._id}</strong>
//             </h5>
//           </div>
//
//         </div>
//
//       </section>
//     );
//   }
// }
//
// export default OrderConfirmation;

// import React from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
//
// class ItemsShow extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {};
//   }
//
//   componentDidMount(){
//     axios.get(`/api/items/${this.props.match.params.id}`)
//       .then(res => this.setState({ item: res.data }))
//       .catch(err => this.setState({ error: err.message }));
//   }
//
//   render(){
//     return(
//       if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
//       if(!this.state.item) return <h2 className="title is-2">Loading...</h2>;
//
//
//
//
//     );
//   }
//
// }
//
// export default ItemsShow;

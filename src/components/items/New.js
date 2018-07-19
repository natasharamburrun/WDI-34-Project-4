import React from 'react';
import axios from 'axios';
import ItemsForm from './Form';
import Auth from '../../lib/Auth';

class ItemsNew extends React.Component {

  state = {
    errors: {},
    images: {},
    item: {}
  };
  
  handleChange = ({ target: { name, value }}) => {
    const item = { ...this.state.item, [name]: value };
    this.setState({ item }, () => console.log(this.state));
  }

  handleFilestack = result => {
    const item = { ...this.state.item, image: result.filesUploaded[0].url };
    this.setState({ item });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/items',
      method: 'POST',
      data: this.state.item,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/items'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <div className="card-content-new">
        <div className="content-font">
          <h3 className="title"><strong>Sell an item</strong></h3>
          <h3 className="title">Boost your shopping budget and re-claim space in your wardrobe by selling your designer pieces</h3>
          <img src= 'https://i.imgur.com/WRsRDLd.png?1'/>
          <ItemsForm
            handleFilestack={this.handleFilestack}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
        </div>
      </div>

    );
  }
}


export default ItemsNew;

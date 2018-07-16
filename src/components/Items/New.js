import React from 'react';
import axios from 'axios';
import ItemsForm from './Form';
import Auth from '../../lib/Auth';

class ItemsNew extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount() {
    axios({
      url: '/api/items',
      method: 'GET'
    })
      .then(res => {
        // console.log(res.data);
        const options = res.data.map(item => {
          return { value: item._id, label: item.name };
        });
        // console.log(options);
        this.setState({ options });
      });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/items',
      method: 'POST',
      data: this.state,
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

import React from 'react';
import axios from 'axios';
import ItemsForm from './Form';
import Auth from '../../lib/Auth';

class ItemsNew extends React.Component {

  state = {}

  componentDidMount() {
    axios({
      url: '/api/items',
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);
        const options = res.data.map(item => {
          return { value: item._id, label: item.name };
        });
        console.log(options);
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
      <ItemsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}


export default ItemsNew;

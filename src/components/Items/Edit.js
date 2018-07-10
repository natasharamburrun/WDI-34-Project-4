import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import ItemsForm from './Form';

class ItemsEdit extends React.Component {

  state = {}

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => {

        this.setState(res.data);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/cupcakes'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <ItemsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}/>
    );
  }
}

export default ItemsEdit;

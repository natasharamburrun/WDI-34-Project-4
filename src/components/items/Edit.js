import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import ItemsForm from './Form';

class ItemsEdit extends React.Component {

  state = {
    errors: {},
    images: {},
    item: {}
  };

  handleChange = ({ target: { name, value }}) => {
    const item = { ...this.state.item, [name]: value };
    this.setState({ item }, ()=> console.log(this.state));
  }

  handleFilestack = result => {
    const item = { ...this.state.item, image: result.filesUploaded[0].url };
    this.setState({ item });
  }

  componentDidMount() {
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => this.setState({ item: res.data} ));

  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/items/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state.item,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/items'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <ItemsForm
        handleFilestack={this.handleFilestack}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}/>
    );
  }
}

export default ItemsEdit;

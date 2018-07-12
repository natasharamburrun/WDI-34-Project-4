import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import UsersForm from './form';

class UsersEdit extends React.Component {

  state = {
    selectedOptions: [],
    errors: {}
  };

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => {

        this.setState(res.data);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  render() {
    return (
      <UsersForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}/>
    );
  }
}

export default UsersEdit;

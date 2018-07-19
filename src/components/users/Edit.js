import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import UsersForm from './Form';

class UsersEdit extends React.Component {

  state = {
    errors: {},
    user: {}
  };

  handleChange = ({ target: { name, value }}) => {
    const user = { ...this.state.user, [name]: value };
    this.setState({ user });
  }

  componentDidMount() {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => {
        this.setState({ user: res.data });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state.user,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleFilestack = result => {
    const user = { ...this.state.user, image: result.filesUploaded[0].url };
    this.setState({ user });
  }


  render() {
    return (
      <div className="container-content-edit">
        <div className="media-content-image">
          <UsersForm
            handleFilestack={this.handleFilestack}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}/>
        </div>
      </div>
    );
  }
}

export default UsersEdit;

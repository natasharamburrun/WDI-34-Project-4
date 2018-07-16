import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import ReactFilestack from 'filestack-react';

import UsersForm from './form';

class UsersEdit extends React.Component {

  state = {
    selectedOptions: [],
    errors: {},
    user: {}
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

  handleFilestack = result => {
    const user = { ...this.state.user, image: result.filesUploaded[0].url };
    this.setState({ user });
  }


  render() {
    return (
      <div className="container-content">
        <div className="media-content-image">
          <ReactFilestack
            apikey={'AbEqJmhCVTTmU0EfzPrSoz'}
            options={{
              accept: ['image/*'],
              maxSize: 500 * 500,
              maxFiles: 1
            }}
            onSuccess={this.handleFilestack}
            render={({ onPick }) => (
              <div>
                <button onClick={onPick}>Upload Photo</button>
                <img src={this.state.filesUploaded} />
              </div>
            )}
          />
        </div>
        <div className="media-content-image">
          <UsersForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}/>
        </div>
      </div>
    );
  }
}

export default UsersEdit;

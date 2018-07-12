import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class UsersShow extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      // .then(res => this.setState({ user: res.data })), () => console.log(this.state.user.username)))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/users'));
  }


  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title is-2">Loading...</h2>;
    return (
      <section className="user-show">
        <figure className="media-content-image">
          <p className="image is-128x128">
            <img src="{this.state.users.image}" />
          </p>
        </figure>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h4 className="title">Username: {this.state.user.username}</h4>
              <h4 className="title">Email: {this.state.user.email}</h4>
              <h4 className="title">Bio: {this.state.user.bio}</h4>
            </div>
          </div>
        </article>
        <div className="media-right">
          <Link className="button" to={`/users/${this.state.user._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </section>
    );
  }
}
export default UsersShow;

import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
// import ReactFilestack from 'filestack-react';

class UsersShow extends React.Component {

    state = {
      user: {}
    };

    componentDidMount(){
      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState({ user: res.data }))
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

  // handleFilestack = (res) => {
  //   this.setState({ filesUploaded: res.filesUploaded[0].url });
  // }


  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title is-2">Loading...</h2>;
    return (
      <section className="user-show">
        <figure className="media-content-image">
          <p className="image is-128x128">
            <img src={this.state.user.image} />
          </p>
        </figure>

        {/* /* <ReactFilestack
            apikey={'AbEqJmhCVTTmU0EfzPrSoz'}
            options={{
              accept: ['image/*'],
              maxSize: 500 * 500,
              maxFiles: 1
            }}
            onSuccess={this.handleFilestack}
            render={({ onPick }) => (
              <div>
                <img src={this.state.filesUploaded} />
                <button onClick={onPick}>Upload Photo</button>
              </div>
            )}
          /> */}

        <article className="media">
          <div className="media-content">
            <div className="content">
              <h4 className="title">Username: {this.state.user.username}</h4>
              <h4 className="title">Email: {this.state.user.email}</h4>
              <h4 className="title">Bio: {this.state.user.bio}</h4>
            </div>
            <div className="media-right">
              {/* <Link className="button" to={`/users/${this.state.user._id}/edit`}>Edit</Link> */}
              <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
export default UsersShow;

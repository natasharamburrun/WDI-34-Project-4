import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class UsersShow extends React.Component {

    state = {
      user: {},
      deletePressed: false
    };

    componentDidMount(){

      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
        .catch(err => this.setState({ error: err.message }));
    }

    handleToggle = () => {
      this.setState({ deletePressed: !this.state.deletePressed });
    }

  handleDelete = () => {
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => Flash.setMessage('success', 'Profile successfully deleted'))
      .then(() => this.props.history.push('/'));
  }
  
  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.user) return <h2 className="title is-2">Loading...</h2>;
    return (
      <section className="user-show">
        <hr />
        <article className="media-profileinfo">
          <div className="media-content">
            <div className="content-img">
              <figure className="media-content-image">
                <p className="image is-256x256">
                  <img src={this.state.user.image} />
                </p>
              </figure>
            </div>
            <div className="content-info">
              <h4 className="title"><strong>{this.state.user.username}</strong></h4>
              <h4 className="title">{this.state.user.bio}</h4>
            </div>
          </div>
        </article>
        <hr />
        {/* Items picture */}
        <article className="container-profileforsale">
          <div className="columns">
            <div className="column is-one-third-desktop is-half-tablet">
              <div className="content">
                <h4 className="title">Items for sale</h4>
                <figure className="image">
                  {this.state.user.items && this.state.user.items.map((item) =>
                    <div key={item._id}>
                      <Link to={`/items/${item._id}`}>
                        <img src={item.image} />
                      </Link>
                    </div>
                  )}
                </figure>
              </div>

              {/* ***********ADD FOLLOWS ************* */}

              {/* ***********ADD FAVOURITE *********** */}

            </div>
          </div>
        </article>
        <hr />
        {/* Delete Profile */}
        <article className="admin-deleteprofile">
          <div className="deleteprofile">
            {!this.state.deletePressed ? (
              <div className="content">
                {Auth.getPayload().sub === this.state.user._id && <button onClick={this.handleToggle} className="button warning">Delete Profile</button>}
              </div>
            ) : (
              <div className="delete">
                <button onClick={this.handleDelete} className="button">Confirm</button>
                {' '}
                <button onClick={this.handleToggle} className="button">Cancel</button>
              </div>
            )}
          </div>
        </article>
      </section>
    );
  }
}
export default UsersShow;

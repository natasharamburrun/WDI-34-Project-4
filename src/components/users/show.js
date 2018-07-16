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
        .then(res => this.setState({ user: res.data }, () => console.log(this.state)))
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
            <img src={this.state.user.image} />
          </p>
        </figure>

        <article className="media">
          <div className="media-content">
            <div className="content">
              <h4 className="title"><strong>{this.state.user.username}</strong></h4>
              <h4 className="title">{this.state.user.bio}</h4>
              {Auth.getPayload().sub === this.state.user._id && <button onClick={this.handleDelete}   className="button">Delete Profile</button>}
            </div>
            <div className="container-bottom">
              {/* ***********ADD FOR SALE ITEMS *********** */}
              {/* Items picture */}
              <div className="column is-multiline">
                <div className="content">
                  <figure className="image is-square">
                    {this.state.user.items && this.state.user.items.map((item) =>
                      <div key={item._id}>
                        <img src={item.image} />
                      </div>
                    )}
                  </figure>
                </div>

                {/* ***********ADD FOLLOWS ************* */}

                {/* ***********ADD FAVOURITE *********** */}

              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
export default UsersShow;

import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

class HomeIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }));
  }
  render(){
    return(
      <section className="section-homepage">
        <div className="card-content-about">
          <div className="content-font">
            <h3 className="title">Welcome to Designer Marketplace</h3>
            <h3 className="title">The online marketplace to BUY and SELL Luxury Pre-Owned Fashion. </h3>
            <h3 className="title">Please join our community and sign in to view and purchase items. </h3>

            <div className="card-content-join">
              <p>Join our community now</p><br/>
              <div className="update-button">
                <Link to="/login" className="button">Sign in</Link>
              </div>
              <p>or</p>
              <div className="update-button">
                <Link to="/register" className="button">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
        < hr/>
        <div className="container-content-homepage">
          <div className="columns is-multiline">
            {this.state.items.map(item =>
              <div key={item._id} className="column is-one-quarter-desktop is-half-tablet">
                {!Auth.isAuthenticated() && <Link to={'/login'}>
                  <div className="card is-3by2">
                    {/* <div className="card-image"> */}
                    <figure className="image is-250x250">
                      <img src={item.image} />
                    </figure>
                    {/* </div> */}
                    <div className="card-content-homepage">
                      <div className="content">
                        <h2 className="title">{item.designerName}</h2>
                        <h2 className="title">{item.itemDescription}</h2>
                        <h2 className="title">£{item.price}</h2>
                      </div>
                    </div>
                  </div>
                </Link>}
              </div>
            )}
          </div>
        </div>
        <footer className="footer">
          <div className="content">
            <h4 className= "title-5">Visit Us</h4>
            <h4 className="footerSocialmedia">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-square"></i>
            </h4>
            <h4 className= "title-5">Payment Accepted</h4>
            <h4 className="paymentaccepted">
              <i className="fab fa-cc-stripe"></i>
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
            </h4>
            <h6 className="title-6"> DESIGNER MARKETPLACE -
              EUROPE’S LEADING ONLINE MARKETPLACE FOR BUYING AND SELLING PRE-OWNED LUXURY FASHION.</h6>
          </div>
        </footer>
      </section>
    );
  }

}

export default HomeIndex;

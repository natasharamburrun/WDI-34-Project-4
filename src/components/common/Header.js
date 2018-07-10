import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  state = {
    navbarOpen: false
  }
  render() {
    return (
      <section className="hero is-small">
        {/* Hero Navbar head*/}
        <div className="hero-head">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sheOO-Hc2fYdmjp84I9f3vFtPf4zKni4d2Ed5QfE_litEH-3" height="50" />
              </Link>

              <a role="button"
                className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                onClick={this.toggleNavbar}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
              <div className="navbar-end">
                <Link to="/items"  className="navbar-item">All Items</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Hero content: will be in the middle  */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Title
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
        </div>

        {/* Hero footer: will stick at the bottom */}
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
export default withRouter(Header);

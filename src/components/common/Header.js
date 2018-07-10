import React from 'react';

const Home = () => {
  return (

    <section className="hero is-primary is-small">
      {/* Hero head: will stick at the top  */}
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Home
                </a>
                <a className="navbar-item">
                  Examples
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
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
};

export default Home;

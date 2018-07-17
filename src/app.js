import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PaymentPage from './components/pages/PaymentPage';
import UsersIndex from './components/Users/Index';
import UsersShow from './components/Users/Show';
import UsersEdit from './components/Users/Edit';
import ItemsIndex from './components/Items/Index';
// import ItemsBags from './components/Items/bags';
import ItemsShow from './components/Items/Show';
import ItemsNew from './components/Items/New';
import ItemsEdit from './components/Items/Edit';
import AuthLogin from './components/auth/login';
import AuthRegister from './components/auth/register';
import Header from './components/common/Header';
import FlashMessages from './components/common/FlashMessages';
import ProtectedRoute from './components/common/ProtectedRoute';
import NotFound from './components/pages/NotFound';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <FlashMessages />

          <section className="section">
            <div className="container">
              <Switch>
                <ProtectedRoute path="/users/:id/edit" component={UsersEdit} />
                <ProtectedRoute path="/items/:id/edit" component={ItemsEdit} />
                <Route path="/items/:id/checkout" component={PaymentPage}/>
                <ProtectedRoute path="/items/new" component={ItemsNew} />
                <Route path="/users/:id" component={UsersShow}/>
                <Route path="/items/categories/:category" component={ItemsIndex} />
                <Route path="/items/:id" component={ItemsShow} />
                <Route path="/users" component={UsersIndex}/>
                <Route path="/items" component={ItemsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>

        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

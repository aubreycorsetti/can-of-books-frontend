import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Welcome from './Welcome';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {

    return (
      <>
      {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome/>}
            >
            </Route>
            <Route
              exact path="/About"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/Profile"
              element={<Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

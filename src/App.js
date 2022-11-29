import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Content from './Content';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
      {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}

      {this.props.auth0.isAuthenticated ? <Content/> : <h2>Please sign in!</h2>}
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
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

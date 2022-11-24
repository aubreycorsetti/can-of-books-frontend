import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><p>&copy; Aubrey & Brenda 2022</p></Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;

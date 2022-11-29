import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';



export default withAuth0(class Welcome extends Component {
  render() {
    return (
      <>
        
        <div>Please Login to see your book collection.</div>
        {/* {this.props.auth0.isAuthenticated ? <BestBooks /> : <h2>Please sign in!</h2>} */}
      </>  
    )
  }
})

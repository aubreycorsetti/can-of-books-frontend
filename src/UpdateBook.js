import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  render() {

    console.log('books we are updating: ', this.props.books);

    return (
      <>
      {  }
        <Modal show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton>Update Book</Modal.Header>
          <Form onSubmit={this.props.handleUpdateBookSubmit} >
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateBook.title} />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateBook.author} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateBook.description} />
            </Form.Group>
            <Button type="submit" >Update Book</Button>
          </Form>
        </Modal>
      </>
    )
  }
}

export default UpdateBookForm

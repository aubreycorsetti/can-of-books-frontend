import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class AddBooks extends React.Component{
  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.hideModal}>
      <Form onSubmit={this.props.bookSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Button type="submit">Add Book</Button>
      </Form>
    </Modal>
    )
  }
}
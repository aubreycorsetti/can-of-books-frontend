import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  handleBookSubmit = (event) => {
    event.preventDefault();

    let bookToUpdate = {
      title: event.target.title.value || this.props.books.title,
      author: event.target.author.value || this.props.books.author,
      description: event.target.description.value || this.props.books.description,
      _id: this.props.books._id,
      value: this.props.books.value
    }

    this.props.updatedBooks(bookToUpdate);

  }

  render() {

    console.log('books we are updating: ', this.props.books);

    return (
      <Container>
        <Form onSubmit={this.handleBookSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.books.title} />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder={this.props.books.author} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.books.description} />
          </Form.Group>
          <Button type="submit">Update Book</Button>
        </Form>
      </Container>
    )
  }
}

export default UpdateBookForm
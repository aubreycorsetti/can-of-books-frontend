import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, ListGroup } from 'react-bootstrap';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(results);
      this.setState({
        books: results.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log(error);
    }
  }
 

  render() {
    let book = this.state.books.map((book) => (
      <BestBooks
      book={book}
      key={book._id}
      deleteBook={this.state.deleteBook}
      />
    ));
    console.log(this.state.books);
    return (
      <>
        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((books) => (
            <Carousel.Item key={books._id}>
              <img
                className="images"
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                alt={books.title}
              />
              <Carousel.Caption>
                <h3>{books.title}</h3>
                <h4>{books.author}</h4>
                <p>{books.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found</h3>
        )}
        <Container>
              <Button 
              key={book._id}
              variant="dark"
              onClick={() => this.state.postBooks(this.state.books._id)}>Add Book
              </Button>
          <ListGroup>
            {this.state.books.map((books) => (
              <ListGroup.Item>
              <h3>{books.title}</h3>
              <h4>{books.author}</h4>
              <Button 
              key={book._id}
              variant="dark"
              onClick={() => this.state.deleteBook(this.state.books._id)}>Delete
              </Button>
            </ListGroup.Item> 
            ))}
          </ListGroup>
        </Container>
     

      </>
    )
  }
}


export default BestBooks;

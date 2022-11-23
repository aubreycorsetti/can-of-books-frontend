import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, ListGroup } from 'react-bootstrap';
import UpdateBookForm from './UpdateBook';
import AddBooks from './AddBooks';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isModalShown: false,
      showUpdateForm: false

    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // console.log(results);
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

  updatedBooks = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBooksObj = await axios.put(url, bookToUpdate);
      let newBooksArr = this.state.books.map(book => {
        return book._id === bookToUpdate._id ? updatedBooksObj.data : book;
      });
      this.setState({
        books: newBooksArr
      });
    } catch (error) {
      console.log(error);
    }
  }

  postBooks = async (aBook) => {
    try {
      let addedBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, aBook);
      this.setState({
        books: [...this.state.books, addedBook.data]
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleShowModal = () => {
    //show the modal
    this.setState({
      isModalShown: true
    })


  }

  hideModal = () => {
    this.setState({
      isModalShown: false
    })
  }


  handleBookSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    let newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      description: event.target.description.value 
    }
    console.log(newBook)

    this.postBooks(newBook);

  }


  render() {

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
            variant="dark"
            onClick={this.handleShowModal}>Add Book
          </Button>
          <ListGroup>
            {this.state.books.map((books) => (
              <ListGroup.Item>
                <h3>{books.title}</h3>
                <h4>{books.author}</h4>
                <Button
                  key={books._id}
                  variant="dark"
                  onClick={() => this.deleteBooks(books._id)}>Delete
                </Button>
                <Button
                  variant="dark"
                  onClick={() => this.setState({ showUpdateForm: true })}>Update Book
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm 
          books= {this.props.books} 
          updatedBooks= {this.props.updatedBooks}
          />
        }
        <AddBooks show={this.state.isModalShown} hideModal={this.hideModal} bookSubmit={this.handleBookSubmit}/>
      </>
    )
  }
}


export default BestBooks;

import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, ListGroup } from 'react-bootstrap';
import AddBooks from './AddBooks';
import UpdateBook from './UpdateBook'



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isModalShown: false,
      showUpdateForm: false,
      updateBook: null
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
  //Update book 
  showUpdateBookModal= ()=>{
    this.setState({showUpdateForm:true})
  }
  handleUpdateBookSubmit = (event) => {
    event.preventDefault();
    let bookToUpdate = {
      title: event.target.title.value || this.state.updateBook.title,
      author: event.target.author.value || this.state.updateBook.author,
      description: event.target.description.value || this.state.updateBook.description,
      _id: this.state.updateBook._id,
      __v:this.state.updateBook.__v
    }
    this.updatedBooks(bookToUpdate);
    this.setState({showUpdateForm:false, updateBook: null})

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
            {this.state.books.map((book) => (
              <ListGroup.Item key={book._id}>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
                <Button
                  key={book._id}
                  variant="dark"
                  onClick={() => this.deleteBooks(book._id)}>Delete
                </Button>
                <Button
                  variant="dark"
                  onClick={() => this.setState({ showUpdateForm: true, updateBook: book })}> Update Book
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>

        {
          this.state.showUpdateForm &&
          <UpdateBook 
          show={this.state.showUpdateForm} 
          hideModal={()=> this.setState({showUpdateForm:false})} 
          updateBook={this.state.updateBook} 
          handleUpdateBookSubmit={this.handleUpdateBookSubmit}
        />
        }

        <AddBooks 
          show={this.state.isModalShown} 
          hideModal={this.hideModal} 
          bookSubmit={this.handleBookSubmit}
        />

        
      </>
    )
  }
}


export default BestBooks;

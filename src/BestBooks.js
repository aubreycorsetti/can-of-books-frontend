import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
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


  render() {
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

      </>
    )
  }
}

export default BestBooks;

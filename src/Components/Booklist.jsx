// import { Container } from 'react-bootstrap'
// import romance from '../books/romance.json'
// import SingleBook from './SingleBook'

// const Booklist = (props) =>{
//     const  BookGeneres = props 
//     return(
//         <Container>
//         {romance.map((BookGeneres)) => {
//             return (
//                 <SingleBook/>
//             )
//         }}
//         </Container>
//     )
// }
// export default Booklist
// BookList.js
import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
    state = {
        search: ''
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { books } = this.props;
        const { search } = this.state;

        const filteredBooks = books.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Form.Group className='mb-3'>
                            <Form.Control
                                type="text"
                                placeholder="Search by title"
                                value={search}
                                onChange={this.handleSearch}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {filteredBooks.map((book) => (
                        <SingleBook key={book.asin} book={book} />
                    ))}
                </Row>
            </Container>
        );
    }
}

export default BookList;


// import library from '../books/fantasy.json'
// import romance from '../books/romance.json'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Col, Container, Row } from 'react-bootstrap';
// const SingleBook = (book) => {
// return(
//     <>
//     <Container>
//         <Row>
//        {library.map(()=> {return (
//         <Col md={3}>
//     <Card>
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body>
//         <Card.Title> {book.title}</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//         )})} 
//        </Row>
//        </Container>

//     </>
// )
// }
// export default SingleBook
// import React from 'react';
// import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// const SingleBook = (props) => {
//   const { book } = props;

//   return (
//     <Container>
//       <Row>
//         <Col md={3}>
//           <Card>
//             <Card.Img variant="top" src={book.img} />
//             <Card.Body>
//               <Card.Title>{book.title}</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default SingleBook;

// Nel tuo componente SingleBook
import React, { Component } from 'react';
import { Card, Col, } from 'react-bootstrap';
import ToggleButtonExample from './Checked';
import ListGroup from 'react-bootstrap/ListGroup';
import CommentsArea from './CommentArea';


class SingleBook extends Component {
  state = {
    selected: false
  }

  handleToggle = (isChecked) => {
    this.setState({ selected: isChecked });
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (

      <Col md={3}>
        <Card  >
          <Card.Img onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ border: this.state.selected ? '3px solid red' : '1px solid black' }}
            variant="top"
            src={book.img}
          />
          <Card.Body>
            <Card.Title >{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
            <ToggleButtonExample />
            {this.state.selected && (
              <CommentsArea book={book} />)}
          </Card.Body>
        </Card>
      </Col >

    );
  }
}

export default SingleBook;



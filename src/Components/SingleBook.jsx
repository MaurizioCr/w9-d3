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
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CheckedButton() {
  const [checked, setChecked] = useState(false);
  class SingleBook extends Component {

    render() {
      const { book } = this.props;


      return (
        <Container>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category}
                  </Card.Text>
                  <ButtonGroup>
                    <ToggleButton
                      type="checkbox"
                      variant="primary"
                      checked={checked}
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Checked
                    </ToggleButton>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  //problema con checked
  export default SingleBook;



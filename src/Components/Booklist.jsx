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
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  return (
    <>
   
      
       
      {books.map((book, i) => (
         
          <SingleBook key={i}  book={book} />
          
          ))}
          
         
    
      
    </>
  );
}

export default BookList;

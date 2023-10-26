// import { Component } from "react";
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Container, Spinner } from "react-bootstrap";
// import { Alert } from "react-bootstrap";
// import { Form } from "react-bootstrap";

// class Comments extends Component {
//     state = {
//         comments: [],
//         commento: {
//             comment: '',
//             rate: '',
//             elementId: ''
//         },
//         isLoading: false,
//         isError: false
//     }
//     handleFormSubmit = async (e) => {
//         e.preventDefault()
//         console.log('Ora inviamo il commento!')
//         try {
//             const res = await fetch(
//                 'https://striveschool-api.herokuapp.com/api/comments/',
//                 {
//                     // oggetto di configurazione
//                     method: 'POST',
//                     body: JSON.stringify(this.state.commento),
//                     headers: {
//                         'Content-Type': 'application/json',
//                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"

//                     },
//                 }
//             )
//             if (res.ok) {
//                 // prenotazione salvata
//                 // alert('Prenotazione salvata!')
//                 // svuotare il form?? settiamo lo state!
//                 // possiamo ripristinare lo stato iniziale di "reservation" nello state
//                 this.setState({
//                     comment: {
//                         comment: '',
//                         rate: '',
//                         elementId: ''
//                     },
//                     // e i campi si svuoteranno :)
//                     showAlert: true, // così faccio apparire l'Alert di Bootstrap!
//                 })
//             } else {
//                 throw new Error(
//                     "C'è stato un errore nel salvataggio della prenotazione"
//                 )
//             }
//         } catch (error) {
//             console.log('errore', error)
//         }
//     }

//     getComments = () => {
//         fetch("https://striveschool-api.herokuapp.com/api/comments/", {
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"
//             }
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     throw new Error('Errore nel recupero commenti!')
//                 }
//             })
//             .then((data) => {
//                 console.log('DATI RECUPERATI', data)
//                 console.log('fetch completata, DATI RECUPERATI', data)

//                 this.setState({
//                     comments: data,
//                     isLoading: false,
//                 })
//             })
//             .catch((error) => {
//                 console.log('ERROR!', error)
//                 this.setState({
//                     isLoading: false,
//                     isError: true,
//                 })
//             })
//     }


//     render() {
//         return (
//             <Container>
//                 {
//                     // operatore SHORT CIRCUIT &&
//                     this.state.showAlert === true && (
//                         <Alert variant="info">Prenotazione Salvata!</Alert>
//                     )
//                 }

//                 {/* giocando con le classi CSS */}
//                 {/* <Alert
//                 variant="info"
//                 className={this.state.showAlert ? 'd-block' : 'd-none'}
//                 // se showAlert è true, la classe sarà 'd-block', se è false sarà 'd-none'
//               >
//                 Prenotazione Salvata!
//               </Alert> */}

//                 <Form onSubmit={this.handleFormSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Commenta il libro"
//                             value={this.state.commento.comment}
//                             onChange={
//                                 // setto lo state ogni volta che scrivo una lettera nel campo "Nome"
//                                 (e) => {
//                                     this.setState({
//                                         // qui dentro va inserito il NUOVO OGGETTO STATE
//                                         // che verrà "fuso" con l'oggetto esistente
//                                         commento: {
//                                             // grazie allo spread operator ...
//                                             // il mio oggetto "reservation" parte
//                                             // trascinandosi dentro tutte le coppie esistenti nello state
//                                             ...this.state.commento,
//                                             comment: e.target.value,
//                                         },
//                                         // VIETATO FARE
//                                         // this.state.reservation.name = e.target.value <-- VIETATISSIMO!
//                                         // perchè lo state è read-only
//                                     })
//                                 }
//                             }
//                             required
//                         />
//                         <Form.Control
//                             type="number"
//                             placeholder="voto da 1 a 5"
//                             value={this.state.commento.comment}
//                             onChange={
//                                 // setto lo state ogni volta che scrivo una lettera nel campo "Nome"
//                                 (e) => {
//                                     this.setState({
//                                         // qui dentro va inserito il NUOVO OGGETTO STATE
//                                         // che verrà "fuso" con l'oggetto esistente
//                                         commento: {
//                                             // grazie allo spread operator ...
//                                             // il mio oggetto "reservation" parte
//                                             // trascinandosi dentro tutte le coppie esistenti nello state
//                                             ...this.state.commento,
//                                             rate: e.target.value,
//                                         },
//                                         // VIETATO FARE
//                                         // this.state.reservation.name = e.target.value <-- VIETATISSIMO!
//                                         // perchè lo state è read-only
//                                     })
//                                 }
//                             }
//                             required
//                         />

//                     </Form.Group>
//                     <ListGroup>
//                         {this.state.isLoading && (
//                             <div className="text-center mb-2">
//                                 <Spinner animation="border" variant="info" />
//                             </div>
//                         )}
//                         <h2 className="text-center">Commenti</h2>
//                         {this.state.comments.map((comment) => {
//                             return (
//                                 <ListGroup.Item key={comment.elementId}>
//                                     {comment.rate} {comment.comment}
//                                 </ListGroup.Item>
//                             )
//                         })}
//                     </ListGroup >
//                 </Form>
//             </Container>
//         )
//     }
// }



// export default Comments

// import React, { Component } from 'react';
// import { ListGroup, Container, Spinner, Alert, Form } from 'react-bootstrap';
// import AddComment from './AddComment';

// class Comments extends Component {
//     state = {
//         comments: [],
//         commento: {
//             comment: '',
//             rate: '',
//             elementId: '',
//         },
//         isLoading: true,
//         isError: false,
//         showAlert: false,
//     };





//     getComments = () => {
//         fetch('https://striveschool-api.herokuapp.com/api/comments/', {
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"
//             },
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Errore nel recupero dei commenti');
//                 }
//             })
//             .then((data) => {
//                 this.setState({
//                     comments: data,
//                     isLoading: false,
//                 });
//             })
//             .catch((error) => {
//                 console.error('Errore:', error);
//                 this.setState({
//                     isLoading: false,
//                     isError: true,
//                 });
//             });
//     };

//     render() {
//         return (
//             <>
//                 <AddComment />
//                 <Container>

//                     <ListGroup>
//                         {this.state.isLoading ? (
//                             <div className="text-center mb-2">
//                                 <Spinner animation="border" variant="info" />
//                             </div>
//                         ) : (
//                             <>
//                                 <h2 className="text-center">Commenti</h2>
//                                 {this.state.comments.map((comment) => (
//                                     <ListGroup.Item key={comment._id}>
//                                         {comment.rate} {comment.comment}
//                                     </ListGroup.Item>
//                                 ))}
//                             </>
//                         )}
//                     </ListGroup>

//                 </Container>
//             </>
//         );
//     }
// }

// export default Comments;

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

class CommentsArea extends Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        // Esegui una richiesta per ottenere i commenti relativi al libro
        // this.props.book è il libro selezionato
        const { asin } = this.props.book;
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"

            },
        })
            .then((response) => response.json())
            .then((data) => this.setState({ comments: data }))
            .catch((error) => console.error('Errore nel recupero dei commenti:', error));
    }

    render() {
        return (
            <Container>
                <h2>Comments Area</h2>
                <AddComment book={this.props.book} />
                <CommentsList comments={this.state.comments} />
            </Container>
        );
    }
}

export default CommentsArea;

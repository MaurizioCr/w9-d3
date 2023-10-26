// import { Component } from "react";
// import { ListGroup, Container, Spinner, Alert, Form } from 'react-bootstrap';


// class AddComment extends Component {
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

//     componentDidMount() {
//         this.getComments();
//     }
//     handleFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch(
//                 'https://striveschool-api.herokuapp.com/api/comments/',
//                 {
//                     method: 'POST',
//                     body: JSON.stringify(this.state.commento),
//                     headers: {
//                         'Content-Type': 'application/json',
//                         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"

//                     },
//                 }
//             );

//             if (res.ok) {
//                 this.setState({
//                     commento: {
//                         comment: '',
//                         rate: '',
//                         elementId: '',
//                     },
//                     showAlert: true,
//                 });
//                 this.getComments(); // Aggiorna i commenti dopo aver inviato un nuovo commento
//             } else {
//                 throw new Error('C\'è stato un errore nel salvataggio del commento');
//             }
//         } catch (error) {
//             console.log('Errore:', error);
//         }
//     };
//     render() {
//         console.log(this.state)
//         return (
//             <Container>
//                 {
//                     this.state.showAlert && (
//                         <Alert variant="info">Commento salvato con successo!</Alert>
//                     )
//                 }
//                 < Form onSubmit={this.handleFormSubmit} >
//                     <Form.Group className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Commento"
//                             value={this.state.commento.comment}
//                             onChange={(e) =>
//                                 this.setState({
//                                     commento: {
//                                         ...this.state.commento,
//                                         comment: e.target.value,
//                                     },
//                                 })
//                             }
//                             required
//                         />
//                         <Form.Control
//                             type="number"
//                             placeholder="Voto da 1 a 5"
//                             value={this.state.commento.rate}
//                             onChange={(e) =>
//                                 this.setState({
//                                     commento: {
//                                         ...this.state.commento,
//                                         rate: e.target.value,
//                                     },
//                                 })
//                             }
//                             required
//                         />
//                     </Form.Group>
//                 </Form >
//             </Container>
//         )
//     }
// }
// export default AddComment
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
    state = {
        comment: '',
        rate: 1,
    };

    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value });
    };

    handleRateChange = (e) => {
        this.setState({ rate: parseInt(e.target.value, 10) });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // Invia il commento al backend
        const { comment, rate } = this.state;
        const { book } = this.props;

        const newComment = {
            comment,
            rate,
            elementId: book.asin,
        };

        fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjZjNGY2ZTNkZDAwMTQ5NWU0NWMiLCJpYXQiOjE2OTgzMjYyMTIsImV4cCI6MTY5OTUzNTgxMn0.CJR_MLMm3DlQAnSCUCZbS0ta3A1gB6GWSnlTIBqP1Ik"
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Commento salvato con successo!');
                    this.setState({ comment: '', rate: 1 });
                } else {
                    console.error('Errore nel salvataggio del commento.');
                }
            })
            .catch((error) => console.error('Errore nella richiesta:', error));
    };

    render() {
        return (
            <div>
                <h4>Add a Comment</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Your comment..."
                            value={this.state.comment}
                            onChange={this.handleCommentChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.rate}
                            onChange={this.handleRateChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Comment
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddComment;

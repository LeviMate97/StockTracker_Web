import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddDepModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'PurchaseHistories/Purchase' + '/' + event.target.Ticket.value + '/'
            + event.target.Quantity.value + '/' + event.target.Date.value, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(this.props.onHide)
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Purchase / Sell
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Ticket">
                                        <Form.Label>Ticket</Form.Label>
                                        <Form.Control type="text" name="Ticket" required
                                            placeholder="Ticket" />
                                    </Form.Group>
                                    <Form.Group controlId="Quantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" name="Quantity" required
                                            placeholder="Quantity" />
                                    </Form.Group>
                                    <Form.Group controlId="Date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date"
                                         max={new Date().toISOString().split("T")[0]}
                                          name="Date" required
                                            placeholder="Date" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Add
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
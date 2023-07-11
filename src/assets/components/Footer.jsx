import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MyImage from '../images/me.jpg';

export default function Footer({ name, age, address, occupation, quote }) {
    return (
        <Fragment>
            <div className="container-fluid p-4 footer">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 " align="center">

                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src={MyImage} />
                            <Card.Body>
                                <Card.Title>Name: {name}</Card.Title>
                                <Card.Text>
                                    <ListGroup as="ul">
                                        <ListGroup.Item as="li"><span className="fw-bold">Age: </span>{age} </ListGroup.Item>
                                        <ListGroup.Item as="li"><span className="fw-bold">Address: </span>{address} </ListGroup.Item>
                                        <ListGroup.Item as="li"><span className="fw-bold">Occupation: </span>{occupation} </ListGroup.Item>
                                        <ListGroup.Item as="li"><span className="fw-bold">Favorite Quote: </span>
                                            <span className="blockquote fst-italic">{quote} </span>
                                        </ListGroup.Item>

                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

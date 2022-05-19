import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, title, picture, description } = props.data;
    const navigate = useNavigate();
    return (
        <Card style={{ width: '18rem' }} className='my-3'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <button className='mx-auto d-block btn btn-dark' onClick={() => navigate(`/checkout/${_id}`)}>Book this service</button>
            </Card.Body>
        </Card>
    );
};

export default Service;
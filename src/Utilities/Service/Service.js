import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { _id, title, picture, description } = props.data;
    const navigate = useNavigate();
    return (
        <div className='mb-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='mx-auto d-block btn btn-dark' onClick={() => navigate(`/checkout/${_id}`)}>Book this service</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
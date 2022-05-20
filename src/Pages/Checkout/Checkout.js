import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../CustomHooks/useData'

const Checkout = () => {
    const { title } = useParams();
    return (
        <div>
            <h1 className='text-center'>Thanks for booking '{title}'</h1>
        </div>
    );
};

export default Checkout;
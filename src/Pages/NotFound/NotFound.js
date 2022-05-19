import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-center text-danger'>404</h1>
            <h4 className='text-center'>Sorry! We can't find this page!</h4>
        </div>
    );
};

export default NotFound;
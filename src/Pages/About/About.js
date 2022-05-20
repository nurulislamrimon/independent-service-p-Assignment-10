import React from 'react';
import myPhoto from '../../images/MyPhoto.jpg';
import './About.css'

const About = () => {
    return (
        <section className='about-container d-flex p-2'>
            <img src={myPhoto} height='100' width='100' className='rounded-circle' alt="my photo" />
            <div className='ms-3'>
                <h1>Nurul Islam Rimon</h1>
                <p>I'm a student of Honours second year. I love technology. I'll work to make daily life easier.</p>
            </div>
        </section>
    );
};

export default About;
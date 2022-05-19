import React, { useEffect, useState } from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import firstPhoto from '../../images/boysFishing.jpg';
import secondPhoto from '../../images/buffalo.jpg';
import thirdPhoto from '../../images/reflectedFisherman.jpg';
import Service from '../../Utilities/Service/Service';
import useData from '../../CustomHooks/useData';



const Home = () => {
    const { datas, setDatas } = useData();
    return (
        <div>
            <section className="carousel-section">
                <h1 className='text-center'>Beauty of Nature</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={firstPhoto}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={secondPhoto}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={thirdPhoto}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="services-container mb-3">
                <h1 className='text-center mt-3'>I love to work for people</h1>
                <div className='d-grid services-items-container'>
                    {datas.map((data) => <Service key={data._id} data={data}></Service>)}
                </div>
            </section>
        </div>
    );
};

export default Home;
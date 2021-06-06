import React from 'react';
import {Carousel} from 'react-bootstrap';
import logo from '../logo.svg';

const Main = () => {
    const imageHeight = window.innerHeight - 42;
    return (
        <Carousel className='bg-secondary'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                    style={{height: imageHeight}}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="Second slide"
                    style={{height: imageHeight}}
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="Third slide"
                    style={{height: imageHeight}}
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Main;
import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.scss';

export default function Cards({ title, images }) {
    console.log(title, images);
    return (
        <>
            <Card className='Card'>
                <Card.Img variant="top" src={images["Poster Art"]["url"]} width={`${images["Poster Art"]["width"]}px`} height={`${images["Poster Art"]["height"]}px`} />
                <Card.Body>
                    <Card.Title className='card-title'>{title}</Card.Title>
                </Card.Body>
            </Card>

        </>
    )
}

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Home/Cards';
import { processAPIdata } from '../../utility';
import './MovieFeed.scss';

export default function MovieFeed() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await processAPIdata("movie");
            console.log(result);
            setMoviesData(result);
        }
        fetchData()
    }, [])

    return (
        <>
            <Container>
                <div className='movies'>
                    {moviesData.length > 0 ?
                        moviesData.slice(0, 21).map((ele, idx) => (
                            <Card key={idx} title={ele.title} images={ele.images} />
                        ))
                        : (<p className="loading">Loading... </p>)}
                </div>
            </Container>
        </>
    )
}

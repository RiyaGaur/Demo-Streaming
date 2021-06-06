import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Home/Cards';
import { processAPIdata } from '../../utility';
import './SeriesFeed.scss';

export default function SeriesFeed() {
    const [seriesData, setSeriesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await processAPIdata("series");
            console.log(result);
            setSeriesData(result);
        }
        fetchData()
    }, [])

    return (
        <>
            <Container>
                <div className='series'>
                    {seriesData.length > 0 ?
                        seriesData.slice(0, 21).map((ele, idx) => (
                            <Card key={idx} title={ele.title} images={ele.images} />
                        ))
                        : (<p className="loading" style={{ textAlign: "left", marginBottom: "243px" }}>Loading... </p>)}
                </div>
            </Container>
        </>
    )
}

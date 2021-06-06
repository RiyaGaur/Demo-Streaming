import React from 'react';
import Footer from '../Home/Footer';
import Title from '../Navbar/Title';
import Topbar from '../Navbar/Topbar';
import SeriesFeed from './SeriesFeed';

export default function Series() {
    return (
        <>
            <Topbar />
            <Title name="Series" />
            <SeriesFeed />
            <Footer />
        </>
    )
}

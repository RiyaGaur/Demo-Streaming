import React from 'react';
import Footer from '../Home/Footer';
import MovieFeed from './MovieFeed';
import Title from '../Navbar/Title';
import Topbar from '../Navbar/Topbar';


export default function Movies() {
    return (
        <>
            <Topbar />
            <Title name="Movies" />
            <MovieFeed />
            <Footer />
        </>
    )
}

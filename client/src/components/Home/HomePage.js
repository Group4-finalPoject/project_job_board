import React from 'react';
import Navigation from './Navbar/Navigation';
import Card from 'react-bootstrap/Card';

// import { useState } from 'react';

function Home() {
    return (
        <>
            <div>   
                <Navigation/>
                <div className='homeBody'>
                <h1>HOME</h1>
                <Card className='jobPostings'>
                <h1>BASE</h1>
                </Card>




                </div>
            </div>
        </>
    )
}
export default Home;
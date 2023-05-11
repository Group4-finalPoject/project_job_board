import React from 'react';
import Navigation from './Navbar/Navigation';
import Card from 'react-bootstrap/Card';
// import JobPostings from './jobPostings'
import JobPostings from '../forms/JobPostings';

// import { useState } from 'react';

function Home() {
    return (
        <>
            <div>   
                
                <div className='homeBody'>
                <Navigation/>
                <h1>HOME</h1>
                <Card className='jobPostings'>
                    <h1>Postings:</h1>
                    <JobPostings />
                </Card>
                </div>
            </div>
        </>
    )
}
export default Home;
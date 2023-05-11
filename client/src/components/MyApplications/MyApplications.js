import React from 'react';
import Card from 'react-bootstrap/Card';
import Navigation from '../Home/Navbar/Navigation';





function MyApplications(){

    return (
        <>
            <div className='homeBody'>
                <Navigation/>
                <h1>My Applications</h1>
                <Card className='jobPostings'>
                    <h1>Postings:</h1>
                <div className='singlePost'>
                    <Card className='jobPostCard' style={{ width: '18rem', margin: '15px' }}>
                        <Card.Body>
                        <Card.Title>JOB NAME</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                     </Card>
                </div>
                </Card>
            </div>
        </>
    );
}

export default MyApplications;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function LogIn() {

  return (
    <>
      <div className=''>
        <Card>
          <h1 className='mainCard2'>
              Log in!
          </h1>
          <Card className='btnCard'>
              <section className='main1'>
                <Button variant="success" className='loginBtn' >
                  Log in
                </Button>{''}
                <Button variant="success"className='signUpBtn' >
                  Sign up
                </Button>{''}
              </section>
            </Card>
        </Card>
        
      </div>
    </>
  );
}

export default LogIn;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LogOrSignUp() {
  const text = 'some text';
  return (
    <>
      <div className='background'>
        <Card>
          <h1 className='mainCard'>
              Welcome!
          </h1>
          
          <Card>
          <section className='main1'>
          <Button variant="success" className='loginBtn'>Log in</Button>{''}
          <Button variant="success"className='signUpBtn'>Sign</Button>{''}
          </section>
          </Card>


        </Card>
      </div>
    </>
  );
}

export default LogOrSignUp;
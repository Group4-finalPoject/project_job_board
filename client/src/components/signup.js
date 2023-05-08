import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SignUpForm from './forms/signUpForm';




function SignUp() {
  // const text = 'some text';

  return (
    <>
      <div className='signupCardBody'>
        <Card className='signupCardStyles'>
          <h1 className='mainCard2'>
              Sign up!
          </h1>
          <SignUpForm/>
          <Card className='btnCard'>
              <section className='main1'>
                <Button variant="success" className='loginBtn' >
                  assign
                </Button>{''}
                <Button variant="success"className='signUpBtn' >
                  assign
                </Button>{''}
              </section>
            </Card>
        </Card>
        
      </div>
    </>
  );
}

export default SignUp;
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogIn from './logIn'
import SignUp from './signup';


function LogOrSignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  

  return (
    <>
      <div className='backgroundBody'>

        {showLogin ?
        (<LogIn onClose={() => setShowLogin(false)}/>) :
        showSignup ?
        (<SignUp onClose={() => setShowSignup(false)}/>) :       
        (<div className=''>
          <Card>
            <h1 className='mainCard1'>
                Welcome!
            </h1>
            <Card className='btnCard'>
              <section className='main1'>
                <Button variant="success" className='loginBtn' onClick={() => setShowLogin(true)}>
                  Log in
                </Button>{''}
                <Button variant="success"className='signUpBtn' onClick={() => setShowSignup(true)}>
                  Sign up
                </Button>{''}
              </section>
            </Card>
          </Card>
        </div>)}
      </div>
    </>
  );
}

export default LogOrSignUp;


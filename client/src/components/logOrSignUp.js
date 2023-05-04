import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogIn from './logIn'
import SignUp from './signIn';


function LogOrSignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  

  return (
    <>
      <div className='backgroundBody'>

        {showLogin ?
        (<LogIn/>) :
        showSignup ?
        (<SignUp/>) :       
        (<div className='menu'>
          <Card>
            <h1 className='mainCard'>
                Welcome!
            </h1>
            <Card className='btnCard'>
              <section className='main1'>
                <Button variant="success" className='loginBtn' onClick={() => setShowLogin(true)}>
                  Log in
                </Button>{''}
                <Button variant="success"className='signUpBtn' onClick={() => setShowSignup(true)}>
                  Sign in
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


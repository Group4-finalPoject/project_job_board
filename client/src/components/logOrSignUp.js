import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogIn from './logIn'
import SignIn from './signIn';


function LogOrSignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  

  return (
    <>
      <div className='background'>
        {showLogin ?
        (<LogIn/>) :
        showSignin ?
        (<SignIn/>) :       
        (<Card>
          <h1 className='mainCard'>
              Welcome!
          </h1>
          <Card className='btnCard'>
            <section className='main1'>
              <Button variant="success" className='loginBtn' onClick={() => setShowLogin(true)}>
                Log in
              </Button>{''}
              <Button variant="success"className='signUpBtn' onClick={() => setShowSignin(true)}>
                Sign in
              </Button>{''}
            </section>
          </Card>
        </Card>)}
      </div>
    </>
  );
}

export default LogOrSignUp;


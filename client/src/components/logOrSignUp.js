import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogIn from './logIn'
import SignUp from './signup';
import { useNavigate } from 'react-router-dom';

function LogOrSignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();



  const handleLogIn = () => {
  }
  

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
            <p>Let's Find that Dream job of yours!</p>
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


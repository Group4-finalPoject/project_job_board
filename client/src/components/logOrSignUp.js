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
  const handleLogInScreen = () => {
    navigate('/login')
    setShowLogin(true)
  }
   const handleSignUpScreen = () => {
    navigate('/signup')
    setShowSignup(true)
  }

  return (
    < >
      <div className='backgroundBody'>

        {showLogin ?
        (<LogIn onClose={() => setShowLogin(false)}/>) :
        showSignup ?
        (<SignUp onClose={() => setShowSignup(false)}/>) :       
        (<div className='welcomeCard'>
          <Card className='welcomeCardStyle'>
            <h1 className='mainCard1'>
                Welcome to GitJobs,
            </h1>
            <p>Let's Find that Dream job of yours!</p>
            <Card className='btnCard'>
              <section className='main1'>
                <Button variant="dark" className='loginBtn' onClick={() => handleLogInScreen() }>
                  Log in
                </Button>{''}
                <Button variant="dark"className='signUpBtn' onClick={() =>  handleSignUpScreen()}>
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


import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SignUpForm from './forms/signUpForm';
import { useNavigate } from 'react-router-dom';



function SignUp() {
  const navigate = useNavigate();
 const handleLogInScreen = () => {
    navigate('/login')
  }

  return (
    <div className='backgroundBody'>
      <div className='signupCardBody'>
        <Card className='signupCardStyles '>
          <h1 className='mainCard2'>
              Sign up!
          </h1>
          <SignUpForm/>
          {/* <Card className='btnCard'> */}
              <section className='main1'>
                <Button variant="success" className='loginBtn'onClick={() => handleLogInScreen() } >
                  login
                </Button>{''}
                <Button variant="success"className='signUpBtn' onClick={() => handleLogInScreen() }>
                  Back
                </Button>{''}
              </section>
            {/* </Card> */}
        </Card>
        
      </div>
    </div>
  );
}

export default SignUp;
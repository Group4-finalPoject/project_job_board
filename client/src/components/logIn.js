import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoginForm from './forms/loginForm';
import { useNavigate } from 'react-router-dom';



function LogIn() {
  const navigate = useNavigate();

  return (
    <>
      <div className='loginCardBody'>
        <Card className='loginCardStyles'>
          <h1 className='mainCard2'>
              Log in!
          </h1>
          <LoginForm/>
          <Card className='btnCard'>
              <section className='main1'>
                <Button variant="dark"className='signUpBtn' >
                  Go Premium
                </Button>{''}
              </section>
            </Card>
        </Card>
        
      </div>
    </>
  );
}

export default LogIn;

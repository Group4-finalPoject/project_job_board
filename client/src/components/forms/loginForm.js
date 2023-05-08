import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




function LoginForm() {

  const navigate = useNavigate();



  const handleLogIn = () => {
    navigate('/Home')
  }


 
  return (

    <div className='test'>
     <Form className='loginForm'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me." />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleLogIn()}>
          Login
        </Button>
      </Form>
    </div>

  );
}

export default LoginForm;
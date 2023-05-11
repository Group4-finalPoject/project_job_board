import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';



function LoginForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        variables: { email, password },
      });
      // console.log(response);
      const token = response.data.login.token;
      // console.log(token);
    Auth.login(token);
    } catch (err) {
      console.error(err);
};
setEmail('');
setPassword('');
}

  const handleLogIn = () => {
    navigate('/Home')
  }



  return (

    <div className='test'>
      <Form.Text className="text-muted">
      </Form.Text>
      <Form className='loginForm' onSubmit={handleFormSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleLogIn()}>
          Login
        </Button>
      </Form>
    </div>

  );
}

export default LoginForm;
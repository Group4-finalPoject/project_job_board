import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


function SignUpForm() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleSignedUp = async (e) => {
    e.preventDefault();

    try {
      const response = await addUser({
        variables: { email, password },
      });

      const token = response.data.addUser.token;

      Auth.login(token);
    } catch (err) {
      console.error(err);

    };
    setEmail('');
    setPassword('');

  }
 
  return (
    <div>
      <Form.Text className="text-muted">

        </Form.Text>
       <Form className='signUpForm' >
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Subscribe to email updates?" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick= {handleSignedUp}>
        Register
      </Button>
    </Form>
    </div>
   
  );
}

export default SignUpForm;
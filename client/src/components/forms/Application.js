import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function JobApplication() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* email */}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
        {/* Phone number */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="(xxx)-xxx-xxxx" />
      </Form.Group>
      {/* first name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      {/* Last name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      {/* DOB */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>D.O.B</Form.Label>
        <Form.Control type="text" placeholder="mm/dd/yy" />
      </Form.Group>
        {/*  salary */}
        <InputGroup className="mb-3">
        <InputGroup.Text>Salary Expecation</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="All my information is accurate and can be validated at inteview." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JobApplication;
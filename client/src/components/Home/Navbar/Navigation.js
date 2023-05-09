import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';


const GET_APPLIED_JOBS = gql`
  query GetUserAppliedJobs($userId: ID!) {
    user(id: $userId) {
      id
      username
      appliedJobs {
        jobId
        salary
        name
        company
      }
    }
  }
`;

function AppliedJobs({ userId }) {
  const { loading, error, data } = useQuery(GET_APPLIED_JOBS, {
    variables: { userId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { username, appliedJobs } = data.user;

  return (
    <NavDropdown title="Saved Applications" id="basic-nav-dropdown">
      <NavDropdown.Item disabled>User: {username}</NavDropdown.Item>
      {appliedJobs.map((job) => (
        <NavDropdown.Item key={job.jobId}>
          Name: {job.name}
          <br />
          Company: {job.company}
          <br />
          Salary: {job.salary}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
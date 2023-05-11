import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';



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
  const navigate = useNavigate();
  const handleMyApps = () => {
  navigate('/MyApplications')
}

  return (
    <Navbar bg="dark" expand="lg">
      <Container className='TESTER'>
        <Navbar.Brand href="#home" className='gitJobs'>GitJobs</Navbar.Brand>
        <Navbar.Collapse className='d-flex ' id="basic-navbar-nav d-flex ">
          <Nav className="navBtns">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=> handleMyApps()}>My Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Saved Jobs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resume Tool</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Premium Subscription
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
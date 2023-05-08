import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='TESTER'>
        <Navbar.Brand href="#home">GitJobs</Navbar.Brand>
        <Navbar.Collapse className='d-flex ' id="basic-navbar-nav d-flex ">
          <Nav className="navBtns">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Applications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Saved Jobs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resume Tool</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Premium Subscription
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
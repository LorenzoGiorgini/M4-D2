import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);


export default MyNavbar
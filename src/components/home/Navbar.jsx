import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../assets/css/Navbar.css';
import logo from '../../assets/images/gallery/logo.png'; // Replace with the correct path to your logo

const OurJourneyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar fixed-top">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} alt="Logo" className="brand-logo" /> {/* Added logo here */}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/">
            <Nav.Link className="nav-link">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="nav-link">About Us</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/project">
            <Nav.Link className="nav-link">Project Journey</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <Nav.Link className="nav-link">Gallery</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link className="nav-link">Blog</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/contact">
            <Nav.Link className="nav-link">Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OurJourneyNavbar;

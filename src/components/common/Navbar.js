import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCart from '../content/ShoppingCart';


function Navb() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Etusivu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >   
            <Nav.Link href="/Kuuset">Kuuset</Nav.Link>
            <Nav.Link href="/Koristeet">Koristepaketit</Nav.Link>
            <Nav.Link href="/Latvatahdet">Latvatähdet</Nav.Link>

            <Nav.Link href="/Muut">Muut</Nav.Link>
            <Nav.Link href="/Demosivu">Demosivu</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <ShoppingCart />
        </Navbar.Collapse>     
      </Container>
    </Navbar>
    );
  }
  
  export default Navb;
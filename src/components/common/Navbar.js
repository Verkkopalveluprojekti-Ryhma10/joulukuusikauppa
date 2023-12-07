import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCart from '../content/ShoppingCart';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Navb() {

  const [CategoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/categories');
            setCategoryData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    }, []);

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
            
            {CategoryData.map((category, i) => {
              return (
                <div key={i}>
                  <Nav.Link href={`/Tuotteet/`+category.id}>{category.name}</Nav.Link>
                </div>               
              )})
            }
              
            <Nav.Link href="/Kuuset">Ainon Kuuset</Nav.Link>

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
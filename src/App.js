import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [shoesData] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">신발샵</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1>20% Season OFF</h1>
        <p>
          This site offer a biggest sale product in the Korea.
          We hope you to enjoy here
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          {
            shoesData.map((shoes)=>(
              <Card shoesData={shoes} key={shoes.id}></Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function Card(props){
  const data = props.shoesData;
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${data.id+1}.jpg`} width="100%" alt=""></img>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>{data.price}원</p>
    </div>
  )
}



export default App;

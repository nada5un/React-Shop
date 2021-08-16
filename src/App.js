import './App.css';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js'
import { Link , Route, Switch} from 'react-router-dom'
import { Modal } from 'bootstrap';


function App() {
  let [shoesData] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="linkText" to="/">신발샵</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="linkText" to="/">Home</Nav.Link>
              <Nav.Link as={Link} className="linkText" to="/detail">Detail</Nav.Link>
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
      
      <Switch>
        <Route exact path='/'>
          <div className="background">
            <h1>20% Season OFF</h1>
            <p>
              This site offer a biggest sale product in the Korea.
              We hope you to enjoy here
            </p>
            <p>
            <Button variant="primary">Go Shopping</Button>
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
      
        </Route>
        <Route path='/detail/:idx'>
          <Detail shoesData={shoesData}></Detail>
        </Route>
        <Route path="/:idx">
          <div>아무거나 적었을때 보여주셈</div>
        </Route>

      </Switch>
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

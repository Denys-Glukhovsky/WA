import React from 'react';
import { HashRouter as Router, Switch, Route, Nav.Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import logo from './logo.png';

import Home from '../pages/Home';
import About from '../pages/About';
import Tarifs from '../pages/Tarifs';
import For from '../pages/For';
import Contacts from '../pages/Contacts';

{/*
import Switch from 'react-bootstrap/esm/Switch';
*/}




class Header extends React.Component {
  render() {
    return (
      <>
      <Navbar  collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height='35' width='192' className='d-inline-block align-top' alt='Logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>ГЛАВНАЯ</Nav.Link>
              <Nav.Link href='/about'>ПРО НАС</Nav.Link>
              <Nav.Link href='/for'>ДЛЯ КОГО</Nav.Link>
              <Nav.Link href='/tarifs'>ТАРИФЫ</Nav.Link>
              <Nav.Link href='/contacts'>КОНТАКТЫ</Nav.Link>
            </Nav>
            <Form inline>
              <Button variant='outlined'>Войти</Button>
              <Button variant='contained'>Регистрация</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exect path="/"  component={Home} />
          <Route exect path="/about" component={About} />
          <Route exect path="/for" component={For} />
          <Route exect path="/tarifs" component={Tarifs} />
          <Route exect path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      </>
    )
  }
}




export default Header;
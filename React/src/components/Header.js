import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <Router>
        <Navbar  collapseOnSelect expand='md' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} height='35' width='192' className='d-inline-block align-top' alt='Logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to='/'>ГЛАВНАЯ</Link>
                <Link to='/about'>ПРО НАС</Link>
                <Link to='/for'>ДЛЯ КОГО</Link>
                <Link to='/tarifs'>ТАРИФЫ</Link>
                <Link to='/contacts'>КОНТАКТЫ</Link>
              </Nav>
              <Form inline>
                <Button variant='outlined'>Войти</Button>
                <Button variant='contained'>Регистрация</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/for" component={For} />
          <Route path="/tarifs" component={Tarifs} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      </>
    )
  }
}




export default Header;
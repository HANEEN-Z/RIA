import React, { Component } from 'react';
import {Col, Container, Form, Navbar} from 'react-bootstrap';
import Logo from'../assets/images/logo.png';
import { Link } from 'react-router-dom';


export class TopNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg" className="bg-light" fixed='top'>
        <Container fluid>
        {/* Add columns to have a grid */}
        <Col lg={4} md={4} sm={12} xs={12}>
          <Navbar.Brand href="/">
            <Link to="/profile"><img  src={Logo} width={251} height={50} alt="Main Logo" className='d-inline-block' /></Link>
          </Navbar.Brand>
        </Col> 
        {/* Add columns to have a grid */}
        <Col lg={3} md={4} sm={12} xs={12}>
          <Form className="d-flex">
            <Form.Control  type="search"   placeholder="Search"   className="me-0"  aria-label="Search"/>
          <Link to="/search" variant="outline-primary"><i className='fa fa-search'></i></Link>
          </Form>
        </Col>
         {/* Add columns to have a grid */}
      
              <Link to="/Notification"><i className='fa h4 fa-bell'></i>
                <sup><span className='badge text-white bg-danger align-top'>1</span></sup>
              </Link>
              <Link to="/Favourit"><i className='fa h4 fa-heart'></i>
                <sup><span className='badge text-white bg-danger align-top'>3</span></sup>
              </Link>
              <Link to="/UserLog"><i className='fa fa-share'></i></Link>
              <Link to="/profile"><i className='fa fa-home'></i></Link>
   
        </Container>
      </Navbar>
    );
  }
}
export default TopNavbar

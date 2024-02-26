import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Additions extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>Future Additions</h2>
                    <p>Some of our future additions, You May Like</p>
                </div>
                <Row>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='card w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/13.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Return Of The 8th Class Magician</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card card className='w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/14.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>Terminally-Ill Genius Dark Knight</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card className='card w-100'>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/16.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>A Stepmother's Märchen</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col className='p-0' lg={3} md={3} sm={6}>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body className='w-100'>
                                        <img alt="Category item" src={require('../../assets/images/17.jpg')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <p>The Beginning After The End</p>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <br></br>
            </Container> 
      </Fragment>
    )
  }
}

export default Additions

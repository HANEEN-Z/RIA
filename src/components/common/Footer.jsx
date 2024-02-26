import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-dark text-white">
            <Container >
                <Row>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Contact us</h5>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-facebook'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-instagram'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-twitter'></i></a>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>More Information</h5>
                        <p><Button variant="dark">Purchase Police</Button></p>
                        <p><Button variant="dark">Privacy Policy</Button></p>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Company Address</h5>
                        <p>FIT near to Faculty of Engineering - Misrata, Libya</p>
                        <span><i className='fa fa-envelope'></i> info@xxx.xx</span>
                    </Col>
                </Row>                
            </Container>           
        </div>
      </Fragment>
    )
  }
}

export default Footer

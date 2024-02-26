import React, { Component, Fragment } from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export class Categorie extends Component {
    
    constructor(){
        super();
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <a className="btn btn-sm ml-2 site-btn"  onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className='fa fa-angle-right'></i></a>
                    <h1>Our Categories</h1>
                    <br></br>
                </div>
                <Row>
                    <Slider ref={c => (this.slider=c)} {...settings}>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/icon3.png')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <b>COMING SOON</b><br></br>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/icon4.png')}  className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <b>COMING SOON</b><br></br>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/icon2.png')} className='h-100 w-100 text-center'/>
                                    </Card.Body>
                                    <b>TAKE A LOOK</b><br></br>
                                </Card>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <Card>
                                    <Card.Body>
                                        <img alt="Category item" src={require('../../assets/images/icon1.png')}  className='h-100 w-100 text-center'/>
                                    </Card.Body>                                    
                                    <b>TAKE A LOOK</b><br></br>
                                </Card>
                            </Link>
                        </div>

                    </Slider>                    
                </Row>
            </Container>
        </Fragment>
      </div>
    )
  }
}

export default Categorie

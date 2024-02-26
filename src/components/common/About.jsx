import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
export class About extends Component {
  render() {
    return (
      <Fragment>
        <Container><br /><br /><br /><br />
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <h4 className="section-title-login">About Us Page </h4>
                    <p className="section-title-contact">
                    Our website is the perfect place for manga and manhwa enthusiasts, offering the latest chapters of manga and manhwa for free and in high quality. We are constantly striving to provide an enjoyable and user-friendly reading experience for fans of these works, by organizing manga and manhwa into different categories and genres and presenting them in an organized and accessible manner.
                    With our professional team specialized in editing and translating comic stories, we provide our visitors with accurate and reliable translations to ensure their reading pleasure and proper understanding of the stories. Additionally, users can interact with the content by rating it, writing comments, and sharing it on social media platforms.
                    If you are a fan of anime and manga, our website is the right place for you to enjoy reading your favorite stories, escape from the daily routine, and immerse yourself in exciting fictional worlds. Visit us now and enjoy the latest chapters of manga and manhwa with ease and convenience. 
                    </p>
                </Col>
            </Row>
        </Container>

      </Fragment>
    )
  }
}

export default About

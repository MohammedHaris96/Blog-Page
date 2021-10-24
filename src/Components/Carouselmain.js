import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Carouselmain = () => {
  return (
    <Container>
      <row>
        <col md={6}>
          <div>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>this is a test image.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </col>
      </row>
    </Container>
  );
};

export default Carouselmain;

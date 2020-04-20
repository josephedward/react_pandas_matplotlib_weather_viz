import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const city_lat_v_max_temp = () => {
  return (
    <div
            style={{ margin: "0 auto", textAlign:"center", height:"100%" }}

    >

<Container fluid>
  <Row>
    <Col>
    <Image
        src="./plot_images/fig1.png"
        fluid
        style={{top:"50%"}}
      />

    </Col>
    <Col>
    <Image
        src="./plot_images/fig4.png"
        fluid

      />
    </Col>
  </Row>
  <Row>
    <Col>
    <Image
        src="./plot_images/linreg_north_lat_hum.png"
        fluid
        style={{top:"50%"}}
      />

    </Col>
    <Col>
    <Image
        src="./plot_images/linreg_north_lat_temp.png"
        fluid

      />
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default city_lat_v_max_temp;

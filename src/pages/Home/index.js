import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'; 
import { dataSocmed } from './data';
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import * as Assets from '../../utils/imageRoutes';
import './style.scss';

const Home = () => {

  const handleClickSocmed = (href) => {
    window.open(
      href,
      '_blank'
    );
  }

  return (
    <>
      <Row className="home-wrapper">
        <Col xs={0} sm={1} md={2} className="content-left">
          { dataSocmed && dataSocmed.map((item, index) => (
            <div key={index}>
              <a href="" onClick={()=> handleClickSocmed(item.href)}>
                <img src={item.src} alt={item.alt} />
              </a>
            </div>
          ))}
        </Col>
        <Col xs={11} sm={11} md={4} className="content-center">
          <h2>Hi, I'am Yusril</h2>
          <h4>Software Engineer - Frontend</h4>
          <h5>Experienced in Web Development as a Front End Engineer, especially using ReactJS</h5>
          <Button className="mt-4 mb-4">
            Contact Me 
            <AiFillCaretRight/>
          </Button>
        </Col>
        <Col xs={12} sm={12} md={4} className="content-right">
          <img src={Assets.imageMe} alt="logo" />
        </Col>
      </Row>
      <Row className="text-center">
        <div className="">
          Scroll down <AiFillCaretDown/>
        </div>
      </Row>
    </>
  )
}

export default Home

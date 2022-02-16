import React from 'react'
import './roadmap.css'
import { Col, Row } from 'react-bootstrap'
import planeImg from '../../images/plane.png'
export default function Roadmap() {
  return (
    <div className='roadmapContainer'>
      <Row className='top'>
        <Col className='roadmapHeader'>
            <h4>ROADMAP</h4>
        </Col>
        <Col md={4} className='hide'>
          <img className='planeImg' style={{width:'220px'}} src={planeImg} alt="" />
        </Col>
      </Row>
      <Row className='roadmaps'>
        <Col className='d-flex align-items-center'>
          <div className="box">
            <b>1st Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col className='d-flex align-items-center'>
        <div className="box">
            <b>2nd Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        
      </Row>
      <Row className='roadmaps'>
      <Col className='d-flex align-items-center'>
          <div className="box">
            <b>3rd Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col className='d-flex align-items-center'>
        <div className="box">
            <b>4th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        
      </Row>
      <Row className='roadmaps'>
      <Col className='d-flex align-items-center'>
          <div className="box">
            <b>5th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col className='d-flex align-items-center'>
        <div className="box">
            <b>6th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
      </Row>
    </div>
  )
}

import React from 'react'
import './roadmap.css'
import { Col, Row } from 'react-bootstrap'
import planeImg from '../../images/plane.png'
export default function Roadmap() {
  return (
    <div className='roadmapContainer' id='roadmap'>
      <Row className='top'>
        <Col className='roadmapHeader'>
            <h4>ROADMAP</h4>
        </Col>
        <Col md={4} className='hide'>
          <img className='planeImg' style={{width:'220px'}} src={planeImg} alt="" />
        </Col>
      </Row>
      <Row className='roadmaps'>
        <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
          <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>1st Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
        <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>2nd Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        
      <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
          <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>3rd Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
        <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>4th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        
      <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
          <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>5th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
        <Col md={6} xs={12} className='d-flex align-items-center mb-5'>
        <div className="box" style={{flexBasis: '100%', flexGrow:0}}>
            <b>6th Stage</b>
            <p>2021 Q4 October</p>
          </div>
          <div className='arrow'></div>
          
          <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione error dicta labore suscipit voluptatum. Dignissimos labore iste magni nobis.</p>
        </Col>
      </Row>
    </div>
  )
}

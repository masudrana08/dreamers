import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './dreamer.css'
import {FaDiscord} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

export default function Dreamers() {
  return (
    <div className='dreamerContainer'>
      <Row>
        <Col xs={10} md={7} className='m-auto text-center'>
          <h3>DREAMERS</h3>
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad consequatur incidunt pariatur fugit? Dolorum eligendi ab possimus architecto. Possimus!</p>
          <p>© 2021 DREAMERS, ALL RIGHTS RESERVED.</p>
          <div>
          <a href="#">
            <FaDiscord />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

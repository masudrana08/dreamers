import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './main.css'
import DreamOn from '../../images/dreamon.png'
import NftMain from '../../images/nft-main.png'

export default function Main() {
  return (
    <div className='mainContainer'>
      <Row>
        <Col>
          <div className='mainPicture'>
            <img className='nftMain' src={NftMain} alt="" />
            <img className='dreamOn' src={DreamOn} alt="" />
          </div>
        </Col>
      </Row>
     
    </div>
  )
}

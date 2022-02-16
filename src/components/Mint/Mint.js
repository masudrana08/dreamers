import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NftBig from '../../images/nft-big.png'
import './mint.css'
export default function Mint() {
  return (
    <div className='mintContainer'>
       <Row className='d-flex justify-content-center'>
        <Col xs={0} md='4' className='hide'>
          <img  className='nftBig' src={NftBig} alt="" />
        </Col>
        <Col xs={10} md='4'>
          <div className='mintContent'>
            <h2 className='mb-4'>MINT A DREAMER</h2>
            <p>0 / 5000 Miner at 0.04 ETH each</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi inventore sunt aliquam, at alias modi excepturi aperiam sequi doloribus fuga reprehenderit temporibus iure maiores quidem harum molestias officia dolorum cumque cum. Officiis laboriosam necessitatibus neque aspernatur debitis eius accusantium, praesentium ab exercitationem? Impedit quos praesentium reprehenderit. Magnam provident dolor repudiandae?
            </p>
            <div className='inputContainer'>
              <input type="number" defaultValue={1} />
              <button className="btn btn-primary m-3">MINT</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

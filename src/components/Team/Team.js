import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './team.css'
import Nft1 from '../../images/nft1.png'
import Nft2 from '../../images/nft2.png'
import Nft3 from '../../images/nft3.png'
import Nft4 from '../../images/nft4.png'
import { Col, Row } from 'react-bootstrap'

export default function Team() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className='teamContainer'>
      <Row>
        <Col className='mb-5'>
          <h3>MEET THE TEAMS</h3>
        </Col>
      </Row>
      
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Col>
        <div>
          <img src={Nft1} alt="" />
          <b className='memberName'>John</b>
          <b className='memberTitle'>(Co-Founder)</b>
          <p>
          Visionary with the minds of ethereum blockchain as the future goal of currency
          </p>
        </div>
        </Col>
        <Col>
        <div>
          <img src={Nft2} alt="" />
          <b className='memberName'>Daniel</b>
          <b className='memberTitle'>(Artist)</b>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, similique.
          </p>
        </div>
        </Col>
        <Col>
        <div>
          <img src={Nft3} alt="" />
          <b className='memberName'>Mathew</b>
          <b className='memberTitle'>(Community Manager)</b>
          <p>
          exercitationem quae numquam minus corporis aperiam officia quas enim, ratione nostrum.
          </p>
        </div>
        </Col>
        <Col>
        <div>
          <img src={Nft4} alt="" />
          <b className='memberName'>Daniel</b>
          <b className='memberTitle'>(Artist)</b>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quasi.
          </p>
        </div>
        </Col>
      </Carousel>
    </div>
  )
}

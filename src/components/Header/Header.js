import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './header.css'
import {FaDiscord} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
export default function Header() {
  return (
      <Navbar bg="dark" expand="lg">
          <Container>
          <Navbar.Brand href="#home">
            <h5  style={{color: 'white'}}>Dreamers</h5>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
        <Nav.Link href="#mint">Mint</Nav.Link>
        <Nav.Link href="#roadmap">Roadmap</Nav.Link>
        <Nav.Link href="#faq">Faq</Nav.Link>
        <Nav.Link href="#team">Team</Nav.Link>

        <Nav.Link href="https://discord.com">
          <FaDiscord />
        </Nav.Link>
        <Nav.Link href="https://twitter.com">
          <FaTwitter />
        </Nav.Link>
        <Nav.Link href="https://instagram.com">
          <FaInstagram />
        </Nav.Link>

          <button className='btn btn-primary'>Connect Wallet</button>
        </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

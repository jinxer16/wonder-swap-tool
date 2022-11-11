import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaGift } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './Header.css'

function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const linkShow = () => setShow(false)
  const [isColor, setIsColor] = useState('')
  return (
    <div className="d-flex justify-content-center align-items-center " style={{ width: '100%' }}>
      <Navbar className="nev " collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            <Link to="/">
              <img src="logo.png" alt="" style={{ width: '50px' }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className=" justify-content-center">
            <Nav className="">
              <Nav.Link
                id="Exchange Crypto"
                onClick={() => setIsColor('Exchange Crypto')}
                className={isColor == 'Exchange Crypto' ? 'a-active' : 'a'}
              >
                <Link to="/swap">Exchange Crypto</Link>
              </Nav.Link>
              <Nav.Link
                id="About"
                onClick={() => setIsColor('About')}
                className={isColor == 'About' ? 'a-active' : 'a'}
              >
                <Link to="/About_main">About</Link>
              </Nav.Link>
              <Nav.Link id="Nft" onClick={() => setIsColor('Nft')} className={isColor == 'Nft' ? 'a-active' : 'a'}>
                <Link to="/nft" className="nav_linkk">
                  NFT
                </Link>
              </Nav.Link>
              <Nav.Link
                id="Nftop"
                onClick={() => setIsColor('Nftop')}
                className={isColor == 'Nftop' ? 'a-active' : 'a'}
              >
                <Link to="nftop" className="nav_linkk">
                  NFT open Market
                </Link>
              </Nav.Link>
              <Nav.Link
                id="L.P Farming"
                onClick={() => setIsColor('L.P Farming')}
                className={isColor == 'L.P Farming' ? 'a-active' : 'a'}
              >
                <Link to="lpfar" className="nav_linkk">
                  L.P Farming
                </Link>
              </Nav.Link>
              <Nav.Link
                id="Swap Exchange"
                onClick={() => setIsColor('Swap Exchange')}
                className={isColor == 'Swap Exchange' ? 'a-active' : 'a'}
              >
                <Link to="sawp" className="nav_linkk">
                  Swap Exchange
                </Link>
              </Nav.Link>
              <Nav.Link
                id="Wonder Land"
                onClick={() => setIsColor('Wonder Land')}
                className={isColor == 'Wonder Land' ? 'a-active' : 'a'}
              >
                <Link to="wonder" className="nav_linkk">
                  Wonder Land
                </Link>
              </Nav.Link>
              <Nav.Link onClick={() => setIsColor('pool')} className={isColor == 'pool' ? 'a-active' : 'a'}>
                <Link to="/AllPool">Pool</Link>
              </Nav.Link>
              <Nav.Link
                id="How It Work"
                onClick={() => setIsColor('How It Work')}
                className={isColor == 'How It Work' ? 'a-active' : 'a'}
              >
                <Link to="/Work_main">How It Work</Link>
              </Nav.Link>
              <Nav.Link id="FAQ" onClick={() => setIsColor('FAQ')} className={isColor == 'FAQ' ? 'a-active' : 'a'}>
                <Link to="/Faq_main">FAQ</Link>
              </Nav.Link>

              {/* <NavDropdown title="Info" id="collasible-nav-dropdown" className="gift3">
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/Overview_main">Overview</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/Pool_main">Pools</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to="/Token_main">Tokens</Link>
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="nev2" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <>
            <Button className="menu" variant="primary" onClick={handleShow}>
              <FiMenu size={30}> </FiMenu>
            </Button>

            <Offcanvas className="canvas" show={show} onHide={handleClose} backdrop="static">
              <Offcanvas.Header closeButton>
                <Navbar.Brand className="brand2" href="#home" onClick={linkShow}>
                  <Link to="/">
                    <img src="logo.png" alt="" style={{ width: '50px' }} />
                  </Link>
                </Navbar.Brand>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="canvas_body">
                <Nav>
                  {/* <Nav.Link href="#deets" className='gift gift3 m-0'><FaGift className='gift'></FaGift> How To Win $100+</Nav.Link> */}
                  <Nav.Link href="#swap" className="gift3" onClick={linkShow}>
                    <Link to="/swap">Exchange Crypto</Link>
                  </Nav.Link>
                  <Nav.Link href="#About_main" className="gift3" onClick={linkShow}>
                    <Link to="/About_main">About</Link>
                  </Nav.Link>
                  <Nav.Link href="#nft" className="gift3" onClick={linkShow}>
                    <Link to="/nft" className="nav_linkk">
                      NFT
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="#Nftop" href="#memes" className="gift3" onClick={linkShow}>
                    <Link to="/nftop" className="nav_linkk">
                      NFT open Market
                    </Link>
                  </Nav.Link>

                  <Nav.Link id="L.P Farming" href="#lpfar" onClick={linkShow}>
                    <Link to="/lpfar" className="nav_linkk">
                      L.P Farming
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="Swap Exchange" href="#sawp" onClick={linkShow}>
                    <Link to="/sawp" className="nav_linkk">
                      Swap Exchange
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="Wonder Land" href="#wonder" onClick={linkShow}>
                    <Link to="/wonder" className="nav_linkk">
                      Wonder Land
                    </Link>
                  </Nav.Link>
                  <Nav.Link id="How It Work" href="#Work_main" onClick={linkShow}>
                    <Link to="/Work_main">How It Work</Link>
                  </Nav.Link>
                  <Nav.Link id="FAQ" href="#Faq_main" onClick={linkShow}>
                    <Link to="/Faq_main">FAQ</Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
